import { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SectionHead } from '@/components/ui';
import { skills } from '@/data';

const categories = [
  { key: 'frontend', label: 'Frontend', icon: 'code' },
  { key: 'backend', label: 'Backend', icon: 'server' },
  { key: 'database', label: 'Database', icon: 'database' },
  { key: 'mobile', label: 'Mobile', icon: 'phone' },
  { key: 'tools', label: 'Tools', icon: 'terminal' },
  { key: 'design', label: 'Design', icon: 'palette' },
  { key: 'productivity', label: 'Productivity', icon: 'clipboard' },
  { key: 'technicalSupport', label: 'Tech Support', icon: 'wrench' },
];

const iconMap = {
  frontend: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  backend: 'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01',
  database: 'M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2ZM2 6.5C2 4.02 6.48 2 12 2s10 2.02 10 4.5M2 12c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5',
  mobile: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92Z',
  tools: 'M4 17l6-5-6-5M12 19h8',
  design: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM7.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm3-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  productivity: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M15 2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z',
  technicalSupport: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="SKILLS & EXPERTISE"
            title={<>Technologies I <em>work with.</em></>}
          />
        </Reveal>

        <Reveal>
          <div className="skills-tabs">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`skills-tab ${activeCategory === cat.key ? 'skills-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={iconMap[cat.key] || iconMap.frontend} />
                </svg>
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerContainer className="skills-grid" stagger={0.05}>
          {skills[activeCategory]?.map((skill, i) => (
            <StaggerItem key={`${activeCategory}-${skill}`}>
              <div className="skill-card">
                <span className="skill-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="skill-name">{skill}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}