---
description: Push Portfolio to GitHub and Deploy to Vercel
---

# Push to GitHub & Deploy

This workflow provides step-by-step instructions to link, push, and deploy this Next.js project.

## Step 1: Link and Push to your GitHub Repository

Initialize and deploy from this project directory (`c:\Users\mural\Documents\studies\Projects\My_portfolio\mine`):

```bash
# 1. Rename default branch to main
git branch -M main

# 2. Link your unique GitHub Repo (create one at https://github.com/new first)
# Command: git remote add origin <GITHUB_REPO_URL>
# Example: git remote add origin https://github.com/janiarithvika11/my-ai-portfolio.git

# 3. Push local commits to remote repository
# Command: git push -u origin main
```

## Step 2: Live Deployment via Vercel (Recommended)

1. Sign up/Log in to [Vercel](https://vercel.com) using your GitHub profile.
2. Select **Add New** -> **Project** on the dashboard.
3. Locate the imported repository name and click **Import**.
4. Leave settings default (Next.js presets auto-configure) and click **Deploy**.
5. Your portfolio site gets compiled and served globally on a free `vercel.app` domain.
