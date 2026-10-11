# DrugXploreAI

## Run locally

1. From the repository root, install dependencies with `npm install`.
2. Copy `packages/frontend/.env.example` to `packages/frontend/.env.local` and fill in the Firebase web app values. Set `VITE_API_URL=http://localhost:3000` for local development.
3. Copy `packages/backend/.env.example` to `packages/backend/.env` and set `GOOGLE_API_KEY` to a key from a Gemini API Free Tier project. Free-tier quotas and eligible models are set by Google; the project must not have billing enabled.
4. In one terminal, run `npm run dev --workspace=backend` from the repository root.
5. In another terminal, run `npm run dev --workspace=frontend` from the repository root and open the URL printed by Vite.

Firebase Authentication and Firestore must be enabled in the Firebase project. Firestore should use owner-only security rules. Never commit `.env.local` or `.env` files.

## Build the frontend

Run `npm run build --workspace=frontend` from the repository root.
