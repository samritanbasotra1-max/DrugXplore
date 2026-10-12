# DrugXploreAI

**Open the DrugXplore app:** [DrugXplore](https://drugxplore.web.app)

**Source code:** [GitHub repository](https://github.com/samritanbasotra1-max/DrugXplore)

DrugXploreAI is a web app for exploring potential drug discovery ideas, existing drug combinations, and Ayurveda-related information with generative AI.

## Run locally in VS Code (Windows)

1. Install Node.js, extract this ZIP, and open the extracted `DrugXploreAI` folder in VS Code (**File → Open Folder**).
2. In the VS Code terminal, run these commands from the folder containing the root `package.json`:

   ```powershell
   npm install
   Copy-Item packages/frontend/.env.example packages/frontend/.env.local
   Copy-Item packages/backend/.env.example packages/backend/.env
   ```

   If you extract the ZIP in your Documents folder and already configured the original checkout on this computer, copy its local settings instead of re-entering them:

   ```powershell
   Copy-Item "$env:USERPROFILE/OneDrive/Documents/DrugXploreAI/DrugXplore/packages/frontend/.env.local" "packages/frontend/.env.local"
   Copy-Item "$env:USERPROFILE/OneDrive/Documents/DrugXploreAI/DrugXplore/packages/backend/.env" "packages/backend/.env"
   ```

3. If you did not copy existing settings, open `packages/frontend/.env.local` and fill in the Firebase web app values. Keep `VITE_API_URL=http://localhost:3000` for local development.
4. If you did not copy existing settings, open `packages/backend/.env` and set `GOOGLE_API_KEY` to your Gemini API key. The ZIP contains templates only; private keys and Firebase configuration are deliberately excluded. Never commit `.env.local` or `.env`.
5. In the first VS Code terminal, start the backend:

   ```powershell
   npm run dev --workspace=backend
   ```

6. Open a second VS Code terminal and start the frontend:

   ```powershell
   npm run dev --workspace=frontend
   ```

7. Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

See [the frontend setup notes](packages/frontend/README.md) for Firebase and local configuration details.

## Project packages

- `packages/frontend` — React and Vite web app
- `packages/backend` — Express and Genkit API

The public app link opens the existing Firebase-hosted DrugXplore site. Local code changes need to be deployed separately to update that hosted version.
