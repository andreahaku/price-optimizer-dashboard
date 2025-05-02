# price-optimizer-dashboard

**price-optimizer-dashboard** è una dashboard di simulazione dinamica dei prezzi per hotel, che consente agli utenti di modificare parametri come domanda, stagionalità, eventi locali, meteo, e vedere l’effetto sui prezzi consigliati in tempo reale. L'obiettivo è aiutare i team di revenue management a ottimizzare le strategie di pricing basate su scenari personalizzati.

---

## Tecnologie principali

- **Vue 3**: framework JavaScript progressivo per la costruzione dell'interfaccia utente.
- **Vite**: build tool moderno per uno sviluppo rapido e ottimizzato.
- **TailwindCSS**: framework CSS utility-first per uno styling flessibile e modulare.
- **Pinia**: gestione dello stato globale dell'applicazione.
- **Vitest**: framework di testing unitario integrato.
- **ESLint**: strumento per il linting e la qualità del codice.

---

## Installazione e avvio

### Prerequisiti

Assicurati di avere installato Node.js (versione 16 o superiore) e Yarn.

### Installazione dipendenze

```sh
yarn install
```

### Avvio in modalità sviluppo

Per avviare l'applicazione in modalità sviluppo con hot-reload:

```sh
yarn dev
```

L'app sarà disponibile di default su `http://localhost:3000`.

### Build per produzione

Per compilare e ottimizzare l'app per la produzione:

```sh
yarn build
```

Il risultato sarà nella cartella `dist`, pronto per essere distribuito.

---

## Testing e linting

### Eseguire i test unitari

Per lanciare i test con Vitest:

```sh
yarn test:unit
```

### Eseguire il linting del codice

Per controllare la qualità e la conformità del codice con ESLint:

```sh
yarn lint
```

---

## Script `yarn review`

Lo script `yarn review` è uno strumento automatizzato di code review che analizza i diff presenti nelle pull request, li invia all'API OpenAI, e pubblica una review automatica sintetica o commenti inline direttamente sulla PR. Questo aiuta a identificare rapidamente potenziali problemi o suggerimenti di miglioramento nel codice.

### Come funziona

- Estrae le modifiche apportate nella pull request corrente.
- Invia i diff all'API OpenAI per un'analisi approfondita.
- Riceve un report sintetico o commenti dettagliati da pubblicare sulla PR.
- Supporta sia l'esecuzione locale che l'integrazione in pipeline CI/CD.

### Uso locale

Per eseguire la code review localmente, assicurati di avere configurato correttamente le variabili d'ambiente nel file `.env.local` (vedi sezione successiva), quindi lancia:

```sh
yarn review
```

### Uso in GitHub Actions

Lo script è integrato in una GitHub Action che viene eseguita automaticamente su ogni pull request, garantendo che il codice sia sempre verificato prima del merge.

---

## Configurazione ambiente `.env.local`

Per testare lo script di code review localmente, crea un file `.env.local` nella root del progetto con la seguente struttura consigliata:

```env
# Chiave API OpenAI per l'accesso al servizio di analisi del codice
OPENAI_API_KEY=la_tua_chiave_api_openai

# Token di accesso GitHub per commentare le PR e accedere alle API
GITHUB_TOKEN=il_tuo_token_github

# Nome del repository GitHub nel formato nome_utente/nome_repo
GITHUB_REPOSITORY=nome_utente/nome_repo

# Riferimento GitHub alla pull request in esame (es. refs/pull/numero_pr/merge)
GITHUB_REF=refs/pull/numero_pr/merge
```

Assicurati che il token GitHub abbia i permessi necessari per leggere le pull request e scrivere commenti.

# Script di code coverage

Lo script di code coverage automatizza il confronto tra la copertura del codice della base (`main`) e quella della PR corrente usando **Vitest**.

Viene eseguito automaticamente tramite una GitHub Action ogni volta che viene aperta o aggiornata una pull request, così da fornire un feedback immediato sull'impatto delle modifiche sulla copertura dei test.

### Come testarlo localmente

Per testare lo script di confronto coverage in locale:

1. **Esegui i test su `main` e salva la copertura:**
   ```sh
   git checkout main
   yarn test:unit
   # Salva il file `coverage/coverage-summary.json` prodotto
   cp coverage/coverage-summary.json /tmp/coverage-main.json
   ```
2. **Passa alla branch della PR e riesegui i test:**
   ```sh
   git checkout nome_tua_branch_pr
   yarn test:unit
   ```
3. **Esegui lo script di confronto:**
   ```sh
   node .github/scripts/compare-coverage.js
   ```

### Configurazione ambiente

Per il funzionamento locale, assicurati che il file `.env.local` contenga le seguenti variabili (come per lo script `review`):

```env
GITHUB_TOKEN=il_tuo_token_github
GITHUB_REPOSITORY=nome_utente/nome_repo
GITHUB_REF=refs/pull/numero_pr/merge
```

Il token GitHub deve avere i permessi per leggere le pull request e scrivere commenti.
