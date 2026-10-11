# DrugXploreAI

**Project link:** [DrugXploreAI on GitHub](https://github.com/samritanbasotra1-max/DrugXplore)

DrugXploreAI is a web app for exploring potential drug discovery ideas, existing drug combinations, and Ayurveda-related information with generative AI.

## Run locally

1. Install Node.js, then run `npm install` from the repository root.
2. Copy `packages/frontend/.env.example` to `packages/frontend/.env.local` and fill in the Firebase web app settings.
3. Copy `packages/backend/.env.example` to `packages/backend/.env` and set `GOOGLE_API_KEY` to your Gemini API key. Do not commit either environment file.
4. Start the backend in one terminal: `npm run dev --workspace=backend`.
5. Start the frontend in another terminal: `npm run dev --workspace=frontend`.
6. Open the local URL printed by Vite.

See [the frontend setup notes](packages/frontend/README.md) for Firebase and local configuration details.

## Project packages

- `packages/frontend` — React and Vite web app
- `packages/backend` — Express and Genkit API

The local demo is not a public hosted website. The GitHub link above points to the project source.
