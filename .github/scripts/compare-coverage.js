import fs from "fs";
import { Octokit } from "@octokit/rest";

const prCoverage = JSON.parse(fs.readFileSync("pr-coverage.json"));
const baseCoverage = JSON.parse(fs.readFileSync("base-coverage.json"));

const prPct = prCoverage.total.lines.pct;
const basePct = baseCoverage.total.lines.pct;
const diff = (prPct - basePct).toFixed(2);

let message = "";

if (diff > 0) {
  message = `✅ **Code coverage increased**: +${diff}% (${basePct}% → ${prPct}%)`;
} else if (diff < 0) {
  message = `📉 **Code coverage decreased**: ${diff}% (${basePct}% → ${prPct}%)`;
} else {
  message = `🟰 **Code coverage unchanged**: ${prPct}%`;
}

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const prNumber = process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\//)[1];

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

await octokit.issues.createComment({
  owner,
  repo,
  issue_number: prNumber,
  body: message,
});
