# Copilot instructions for this repo

Overview
- Minimal React + Vite single-page app. Source lives under `src/` and the app is mounted in `src/main.jsx`.
- Firebase is initialized in `src/utils/firebase.js` (client SDK v12). Treat the file as the single source of truth for Firebase config.

Quick commands
- Install dependencies: `npm install`
- Run dev server (HMR): `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`

Architecture & key files
- `index.html` loads `/src/main.jsx` which renders `App` into `#root`.
- `src/main.jsx` — app entry; uses `createRoot` + `StrictMode`.
- `src/App.jsx` — root React component (currently minimal/placeholder).
- `src/utils/firebase.js` — initializes Firebase (`initializeApp`) and calls `getAnalytics`. Note this file currently defines `app` and `analytics` but does not export anything; when adding auth or other services, export them explicitly.
- `vite.config.js` — standard Vite setup with `@vitejs/plugin-react`.
- `eslint.config.js` and the `lint` script are present; run `npm run lint` before creating PRs.

Project-specific patterns & notes
- Absolute asset imports are used (e.g. `/vite.svg`) and also `src/assets` for local assets.
- Firebase: the config object is checked in. Do not rotate or remove keys in a change without coordination — treat as sensitive operational data.
- Watch for small typos in imports: `src/App.jsx` contains `import  {gethauth} from 'firebase/auth'` which does not match the SDK (`getAuth`). When modifying Firebase usage, prefer the documented SDK names and export an initialized `auth` helper from `src/utils/firebase.js`.
- Keep UI changes inside `src/` and CSS in `App.css` / `index.css` to avoid touching build config.

Developer workflow recommendations (practical)
- When implementing a feature:
  - Update or add modules under `src/`.
  - Run `npm run dev` and verify functionality in browser.
  - Run `npm run lint` and `npm run build` to catch issues early.
- For Firebase-related changes:
  - Add explicit exports in `src/utils/firebase.js`, for example:
    ```js
    import { initializeApp } from 'firebase/app'
    import { getAuth } from 'firebase/auth'
    const app = initializeApp(firebaseConfig)
    export const auth = getAuth(app)
    export default app
    ```

What to avoid or be careful about
- Do not assume server-side code — this is a client-only frontend project.
- Avoid committing credential rotations or secret changes without ops approval.
- There are no tests in the repo; manual verification (dev server + build) is the primary validation path.

Files to check when editing or reviewing PRs
- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [eslint.config.js](eslint.config.js)
- [src/utils/firebase.js](src/utils/firebase.js)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)

If anything is unclear or you want this expanded (examples, CI steps, export conventions), tell me which area to expand.
