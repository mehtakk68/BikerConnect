# RideConnect — Biker Community Platform

Full-stack starter architecture for a free-tier biker social platform across web, mobile, and admin.

## 1) Folder Structure

```text
RideConnect/
├── backend/                  # Node.js + Express + MongoDB + Socket.io API
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── sockets/
│       └── server.js
├── web/                      # React + Tailwind + PWA-ready shell
├── mobile/                   # React Native (Expo) app shell
├── admin/                    # React admin dashboard shell
├── docs/
│   └── DEPLOYMENT.md
└── .env.example
```

## 2) Tech Decisions (Free/Open)

- **Auth**: Firebase Auth (free tier)
- **DB**: MongoDB Atlas free tier
- **Realtime**: Socket.io self-hosted on backend
- **Maps**: OpenStreetMap + Leaflet
- **Media**: Cloudinary free tier (or Supabase Storage free tier)
- **Hosting**: Vercel (web/admin), Render/Railway (backend)

## 3) Installation Steps

### Prerequisites
- Node.js 20+
- npm 10+
- Expo CLI (for mobile)
- MongoDB Atlas project
- Firebase project with email+Google providers enabled

### Clone and install

```bash
git clone <your-repo-url>
cd RideConnect

cd backend && npm install
cd ../web && npm install
cd ../mobile && npm install
cd ../admin && npm install
```

Copy env template:

```bash
cp .env.example backend/.env
```

## 4) Run Commands

```bash
# backend
cd backend
npm run dev

# web
cd web
npm run dev

# mobile (Expo)
cd mobile
npm run start

# admin
cd admin
npm run dev
```

## 5) API Surface (v1)

- `POST /api/v1/users/profile` — create/update user profile
- `GET /api/v1/users/nearby` — nearby riders via geo query
- `GET /api/v1/posts/feed` — social feed
- `POST /api/v1/posts` — create post
- `POST /api/v1/rides/start` — start ride
- `PATCH /api/v1/rides/:id/end` — end ride
- `GET /api/v1/chats/:chatId/messages` — message history
- `GET|POST /api/v1/groups` — groups CRUD (starter)
- `GET|POST /api/v1/events` — events CRUD (starter)
- `GET /api/v1/admin/dashboard` — admin metrics

## 6) Socket.io Namespaces

- `/chat`
- `/ride-tracking`
- `/notifications`

## 7) Next Implementation Milestones

1. Complete Firebase token lifecycle in web/mobile clients.
2. Add media upload endpoints (Cloudinary/Supabase adapters).
3. Build full privacy and join-request flows for live rides.
4. Add moderation queues and marketplace workflows.
5. Add gamification workers (streaks, milestones, challenges).
6. Add unit/integration tests + CI.

## 8) Security Baseline Included

- Helmet
- Rate limiting
- NoSQL injection sanitization
- Token verification middleware

See detailed deployment in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).
