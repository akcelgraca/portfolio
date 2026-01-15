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

---

### How to run locally

To test this project on your local machine:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/akcelgraca/my-portfolio.git](https://github.com/akcelgraca/my-portfolio.git)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
