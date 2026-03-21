# RideConnect Deployment Guide (Free Tier)

## Backend (Render or Railway)

1. Create service from `backend/`.
2. Build command: `npm install`
3. Start command: `npm start`
4. Add environment variables from `.env.example`.
5. Ensure MongoDB Atlas IP access allows provider egress.

## Web + Admin (Vercel)

### Web
1. Import repo in Vercel.
2. Root directory: `web`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add `VITE_API_URL` and `VITE_SOCKET_URL` env vars.

### Admin
1. Create second Vercel project.
2. Root directory: `admin`
3. Same build/output settings as web.

## Mobile (Expo EAS free workflow)

1. `cd mobile`
2. `npm run start` for local development.
3. Use EAS free build minutes or local builds.
4. Configure backend URL and Firebase config via Expo env.

## MongoDB Atlas

1. Create free M0 cluster.
2. Create DB user with strong password.
3. Add network access entries for deployment providers.
4. Set `MONGO_URI` in backend service.

## Firebase Auth

1. Enable Email/Password and Google providers.
2. Generate Admin SDK service account.
3. Add service account values in backend env.

## Free Storage Choices

- Cloudinary free tier for social media heavy apps.
- Supabase storage free tier as alternative for open-source stack preference.
