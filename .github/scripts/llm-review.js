import dotenv from "dotenv";
import { Octokit } from "@octokit/rest";
import OpenAI from "openai";

dotenv.config({ path: ".env.local" });

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const DRY_RUN = true;

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const prNumber =
  process.env.GITHUB_PR_NUMBER ??
  (() => {
    const refMatch = process.env.GITHUB_REF?.match(/refs\/pull\/(\d+)\//);
    if (!refMatch) {
      throw new Error("GITHUB_REF non è valido e GITHUB_PR_NUMBER non è settato!");
    }
    return refMatch[1];
  })();

async function getModifiedFiles() {
  const files = await octokit.pulls.listFiles({ owner, repo, pull_number: prNumber });
  return files.data.filter((f) => f.patch && /\.(js|ts|jsx|tsx)$/.test(f.filename));
}

async function getPRInfo() {
  const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  return {
    headSha: pr.head.sha,
  };
}

async function generateReviewSummary(files) {
  const allDiffs = files.map((f) => `File: ${f.filename}\n${f.patch}`).join("\n\n");

  const prompt = `
Sei un esperto sviluppatore JavaScript/TypeScript.

Fai una code review sul seguente insieme di diff. Per ogni file:
- Evidenzia problemi di leggibilità, manutenibilità, performance, sicurezza o best practices.
- Suggerisci come migliorare ogni punto con esempi di codice se utili.
- Spiega i vantaggi concreti di ogni cambiamento suggerito.

Organizza il feedback per file. Sii chiaro, costruttivo e diretto.

Diffs:
\`\`\`diff
${allDiffs}
\`\`\`
`;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.4,
  });

  return response.data.choices[0].message.content;
}

async function submitPullRequestReview(body, commitId) {
  await octokit.pulls.createReview({
    owner,
    repo,
    pull_number: prNumber,
    commit_id: commitId,
    body,
    event: "COMMENT",
  });
}

(async () => {
  try {
    const prInfo = await getPRInfo();
    const files = await getModifiedFiles();

    if (files.length === 0) {
      console.log("Nessun file rilevante modificato.");
      return;
    }

    const review = await generateReviewSummary(files);

    if (!DRY_RUN) {
      await submitPullRequestReview(
        `## 🤖 Code Review Automatica (LLM)\n\n${review}`,
        prInfo.headSha,
      );
      console.log("✅ Review aggregata pubblicata nella PR.");
    } else {
      console.log("🔵 DRY RUN - Review che sarebbe stata inviata:");
      console.log(review);
    }
  } catch (error) {
    console.error("Errore durante la review:", error);
    process.exit(1);
  }
})();
