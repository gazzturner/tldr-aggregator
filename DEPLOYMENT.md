# Deployment Guide

## Deploy Backend to Render

1. **Create a Render account** at https://render.com

2. **Create a new Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - Name: `tldr-aggregator-api`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Plan: Free

3. **Copy your Render URL** (e.g., `https://tldr-aggregator-api.onrender.com`)

4. **Update config.js**:
   - Replace `'https://your-backend-app.onrender.com'` with your actual Render URL

5. **Commit and push changes**

## Deploy Frontend to GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/` (root)
   - Save

2. **Your site will be live at**: `https://gazzturner.github.io/tldr-aggregator/`

## Alternative: Deploy Everything to Render

If you want to host both frontend and backend on Render:
- The current setup already serves static files from the backend
- Just deploy the backend and use its URL directly
- No need for GitHub Pages

## Testing

- Local: `npm start` → `http://localhost:3000`
- Production: Use your Render URL or GitHub Pages URL

## Notes

- Render free tier may spin down after inactivity (takes ~30s to wake up)
- Consider upgrading to paid tier for always-on service
- GitHub Pages is always on and free for public repos
