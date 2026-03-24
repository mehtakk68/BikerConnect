# RideConnect — Biker Community Website + Mobile App

RideConnect is a full-stack community platform for bikers with social feed, realtime ride tracking, nearby rider discovery, events, groups/clubs, and free-tier-first infrastructure.

## Why this architecture

- **100% free-tier compatible** for MVP (no paid chat API, no paid maps API, no paid storage required).
- **Single JS/TS ecosystem** across backend, web, admin, and React Native mobile app.
- **Realtime by design** using a self-hosted Socket.io server.
- **Map stack without Google billing** using OpenStreetMap + Leaflet.

---

## 1) Folder structure

```text
RideConnect/
├── backend/
│   ├── src/
│   │   ├── config/                 # DB + Firebase bootstrapping
│   │   ├── controllers/            # Express route handlers
│   │   ├── middleware/             # Auth + async error wrappers
│   │   ├── models/                 # MongoDB collections/schemas
│   │   ├── routes/                 # REST API routes
│   │   ├── sockets/                # Socket.io namespaces + events
│   │   └── server.js
│   └── package.json
├── web/                            # React + Tailwind + PWA shell
├── mobile/                         # React Native (Expo) app shell
├── admin/                          # Moderation/admin dashboard shell
├── docs/
│   └── DEPLOYMENT.md
├── .env.example
└── README.md
```

---

## 2) Free tech stack

### Frontend (Web)
- React + Vite
- Tailwind CSS
- PWA-ready setup

### Mobile App
- React Native + Expo
- Single codebase for Android + iOS

### Backend
- Node.js + Express
- MongoDB Atlas free tier
- Socket.io (self-hosted realtime)

### Auth
- Firebase Auth free tier (email + Google)

### Media storage (choose one)
- Cloudinary free tier
- Supabase Storage free tier

### Maps
- OpenStreetMap tiles
- Leaflet for map rendering

### Hosting
- Vercel (web/admin)
- Render or Railway (backend)
- MongoDB Atlas (database)

---

## 3) Core feature coverage in this starter

### User & social
- Profile create/update
- Nearby rider query (geo search)
- Feed + post create
- Groups + events basic CRUD starter

### Ride & realtime
- Start/end ride APIs
- Socket namespaces:
  - `/chat`
  - `/ride-tracking`
  - `/notifications`

### Added feature scaffolds
- **Route sharing** APIs (`/api/v1/routes`)
- **Marketplace** APIs (`/api/v1/marketplace`)
- **Safety SOS** APIs (`/api/v1/safety/sos`)

---

## 4) API endpoints (starter)

- `POST /api/v1/users/profile`
- `GET /api/v1/users/nearby?lng=&lat=&km=`
- `GET /api/v1/posts/feed`
- `POST /api/v1/posts`
- `POST /api/v1/rides/start`
- `PATCH /api/v1/rides/:id/end`
- `GET /api/v1/chats/:chatId/messages`
- `GET|POST /api/v1/groups`
- `GET|POST /api/v1/events`
- `GET|POST /api/v1/routes`
- `GET|POST /api/v1/marketplace`
- `PATCH /api/v1/marketplace/:id/sold`
- `GET|POST /api/v1/safety/sos`
- `PATCH /api/v1/safety/sos/:id/resolve`
- `GET /api/v1/admin/dashboard`

---

## 5) Installation

### Prerequisites
- Node.js 20+
- npm 10+
- MongoDB Atlas free cluster
- Firebase project (Auth enabled)
- Expo Go app (for quick mobile validation)

### Install all apps

```bash
cd backend && npm install
cd ../web && npm install
cd ../mobile && npm install
cd ../admin && npm install
```

### Configure environment

```bash
cp .env.example backend/.env
```

Update values in `backend/.env` from your Firebase/Mongo/Storage projects.

---

## 6) `.env` template

Use the root `.env.example` as baseline:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rideconnect
JWT_SECRET=super-secret-jwt
CORS_ORIGIN=http://localhost:5173,http://localhost:5174,http://localhost:19006
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=service_role_key
```

---

## 7) Run commands

```bash
# backend
cd backend
npm run dev

# web
cd web
npm run dev

# mobile
cd mobile
npm run start

# admin
cd admin
npm run dev
```

---

## 8) Deployment steps

1. **MongoDB Atlas**
   - Create M0 cluster.
   - Allow backend host IP and set DB user.
2. **Firebase**
   - Enable email/password + Google sign-in.
   - Create admin SDK credentials for backend verification.
3. **Backend (Render/Railway)**
   - Deploy `backend` as Node service.
   - Set env vars from `.env.example`.
4. **Web + Admin (Vercel)**
   - Deploy `web` and `admin` as separate projects.
   - Configure API base URLs to backend service URL.
5. **Mobile**
   - Use Expo EAS for Android/iOS production builds.

Detailed checklist: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## 9) Viral/retention features recommended next

- Moto-vlog reels feed with trending audio overlays.
- Offline ride recording and later sync.
- Fuel station + weather overlays.
- Rider verification badge flow.
- Community challenges and achievement streak seasons.
- Trip expense splitter with per-rider settlement logs.

---

## 10) Freemium model integration plan

- **Free**: profile, posting, basic chat, public rides, nearby riders.
- **Pro Rider**: advanced analytics, full history, private premium groups, ad-free experience, custom badge.
- Keep core infra free by using open-source + self-hosted realtime; monetize only via premium features and sponsorships.
