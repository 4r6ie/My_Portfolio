import { Icon } from '@/components/ui';
import { profile } from '@/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={profile.avatar} alt={profile.name} className="footer-avatar" />
          <div>
            <span className="footer-name">{profile.name}</span>
            <span className="footer-role">{profile.title}</span>
          </div>
        </div>

        <div className="footer-links">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="github" size={18} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            f
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon name="mail" size={18} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} {profile.name}. Built with React + Vite.</span>
        </div>
      </div>
    </footer>
  );
}