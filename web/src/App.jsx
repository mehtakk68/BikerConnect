import { Link, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import MapPage from './pages/MapPage';
import EventsPage from './pages/EventsPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

const tabs = [
  ['/', 'Feed'],
  ['/map', 'Map'],
  ['/events', 'Events'],
  ['/chat', 'Chat'],
  ['/profile', 'Profile']
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="pb-20">
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <nav className="fixed inset-x-0 bottom-0 border-t border-zinc-800 bg-zinc-900/95">
        <div className="mx-auto flex max-w-lg justify-around p-3">
          {tabs.map(([to, label]) => (
            <Link key={to} to={to} className="text-sm font-semibold text-lime-400">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
