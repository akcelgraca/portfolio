# Personal Portfolio - Akcel Graça

This repository hosts the source code for my personal website and professional portfolio.

## Continuous Deployment & Automation

The primary purpose of this repository is to implement a modern **CI/CD (Continuous Integration/Continuous Deployment)** workflow. The infrastructure is configured to ensure that any code change is instantly reflected in the production environment.

**The Workflow:**
1.  **Development:** Code and new features are developed locally.
2.  **Push:** Changes are committed and pushed to GitHub (`git push`).
3.  **Automatic Build:** Vercel detects the new commit, triggers the build process, and runs necessary checks.
4.  **Deploy:** Upon a successful build, the new version is automatically deployed to the live URL.

> This approach ensures that my portfolio is always synchronized with the latest version of my work, eliminating the need for manual uploads or complex server configurations.

## Tech Stack

* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **Deployment:** Vercel
* **Analytics:** PostHog

## Analytics

The site sends product analytics to PostHog. A client provider in `app/providers.tsx`
initializes `posthog-js` and captures a `$pageview` on every route change.

To point the site at a different project, set these environment variables (locally in
`.env.local`, and in Vercel). Both default to this project on PostHog EU Cloud:

```shell
NEXT_PUBLIC_POSTHOG_KEY=<your_project_token>
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

---

### How to run locally

To test this project on your local machine:

1.  Clone the repository:
    ```bash
    git clone https://github.com/akcelgraca/portfolio.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
