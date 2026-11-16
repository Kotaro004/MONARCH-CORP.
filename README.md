# MONARCH CORP.

**AI automation & digital systems — public project repository**

MONARCH is a bilingual, responsive static website concept for an AI automation studio. This repository contains the website source, an interactive ROI calculator, a qualification questionnaire and a self-contained workflow demonstration.

> **Project status:** MONARCH is presented as a project in development. Service descriptions, package information and pricing shown on the website are illustrative and do not represent confirmed commercial availability or client results.

## Features
- Spanish and English interface with remembered language preference.
- Responsive navigation and hash-based page routing.
- Interactive ROI calculator and qualification questionnaire.
- Standalone workflow demonstration for enquiry intake, classification and response preparation.
- Self-hosted Newsreader and Hanken Grotesk fonts with SIL Open Font License notices.
- Vercel-ready static deployment with baseline security headers.

## Technology
HTML5 · CSS3 · Vanilla JavaScript · SVG · Vercel static hosting. No framework, build step, package manager or database is required.

## Run locally
```bash
python3 -m http.server 8000
```
Visit `http://localhost:8000`.

## Contact
The public contact destination is configured in `site.config.js` and uses `hello@monarchcorp.es`. Do not commit personal phone numbers, private scheduling links, credentials, API keys or environment files.

## Deploy to Vercel
Import this repository, select **Other** as the framework preset if prompted, leave the build command empty and deploy.

## Interactive workflow example
Open `/examples/gestion-de-solicitudes.html`. It uses fictional sample data and runs in the browser. It does not send messages or connect to a live CRM.

## Privacy and licensing
No secrets or credentials are required. The bundled Newsreader and Hanken Grotesk fonts are distributed under SIL Open Font License 1.1; license texts are included in `assets/fonts/`.
