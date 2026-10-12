import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="page-container not-found-page">
      <div className="not-found-card">
        <Compass size={64} className="not-found-icon" />
        <span className="eyebrow">404 &middot; Lost in Space</span>
        <h1>Page not found.</h1>
        <p>The screen you are looking for has either moved, vanished, or never existed in this dimension.</p>
        <Link to="/" className="primary-button">
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </div>
    </div>
  );
}

