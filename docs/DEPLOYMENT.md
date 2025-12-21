# Deployment Guide

This guide covers how to deploy the **Shrutkirti Sawant Portfolio** to two popular platforms: **Netlify** (via GitHub) and **Google Cloud Run**.

---

## Prerequisites

Before deploying, ensure you have the following in your project root:
1.  **package.json**: Ensure you have a build script (e.g., `"build": "vite build"`) and all dependencies listed.
2.  **vite.config.ts**: Configuration for bundling.
3.  **index.html**: Ensure the script source points to your entry file (e.g., `<script type="module" src="/index.tsx"></script>`).

---

## Option 1: Deploy to Netlify (Recommended for Static Sites)

Netlify is the easiest way to deploy React applications with built-in CI/CD from GitHub.

### Step 1: Push to GitHub
1.  Initialize git: `git init`
2.  Add files: `git add .`
3.  Commit: `git commit -m "Initial commit"`
4.  Create a repository on GitHub and push your code.

### Step 2: Connect to Netlify
1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import from an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify and select your portfolio repository.

### Step 3: Configure Build Settings
Netlify should detect these automatically, but verify them:
*   **Base directory:** `/` (root)
*   **Build command:** `npm run build`
*   **Publish directory:** `dist`

### Step 4: Deploy
Click **"Deploy Site"**. Netlify will build your project and generate a URL.

*Note: A `netlify.toml` file has been added to the project root to handle Single Page Application (SPA) routing automatically.*

---

## Option 2: Deploy to Google Cloud Run

Cloud Run is a serverless platform that runs stateless containers. This is ideal if you want enterprise-grade scaling or integration with other Google Cloud services.

### Step 1: Prerequisites
*   [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed.
*   A Google Cloud Project created.
*   Billing enabled for the project.

### Step 2: Containerize the Application
We have provided a `Dockerfile` and `nginx.conf` in the project root. This setup uses a multi-stage build:
1.  **Build Stage:** Uses Node.js to compile the React code.
2.  **Production Stage:** Uses Nginx to serve the static files with high performance.

### Step 3: Build and Deploy

Open your terminal in the project root and run the following commands:

**1. Authenticate with Google Cloud:**
```bash
gcloud auth login
gcloud config set project [YOUR_PROJECT_ID]
```

**2. Enable Cloud Build and Cloud Run APIs:**
```bash
gcloud services enable cloudbuild.googleapis.com run.googleapis.com
```

**3. Build the Container Image:**
This command builds your Docker image and stores it in the Google Container Registry (GCR) or Artifact Registry.
```bash
gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/portfolio-app
```

**4. Deploy to Cloud Run:**
```bash
gcloud run deploy portfolio-service \
  --image gcr.io/[YOUR_PROJECT_ID]/portfolio-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Step 4: Access Your Site
Once the deployment finishes, your terminal will display a Service URL (e.g., `https://portfolio-service-uc.a.run.app`).

---

## Troubleshooting

**Netlify: "Page Not Found" on refresh**
Ensure the `netlify.toml` file exists with the redirect rules. React is an SPA (Single Page Application), so all routes must redirect to `index.html`.

**Cloud Run: 404 Errors**
Ensure the `nginx.conf` file is correctly configured to use `try_files $uri /index.html;`. This ensures client-side routing works correctly.