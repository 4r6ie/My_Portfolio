import { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SectionHead, Badge, Tag, Icon } from '@/components/ui';
import { projects, filters } from '@/data';

const projectVisuals = {
  salon: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', icon: 'briefcase' },
  academic: { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: 'book' },
  news: { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: 'globe' },
  message: { gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: 'mail' },
  aid: { gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', icon: 'heart' },
  hris: { gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', icon: 'users' },
  llm: { gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', icon: 'sparkles' },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()));

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="PROJECTS"
            title={<>Featured <em>work & projects.</em></>}
          />
        </Reveal>

        <Reveal>
          <div className="projects-filters">
            {filters.map(f => (
              <Tag key={f} active={activeFilter === f} onClick={() => setActiveFilter(f)}>
                {f}
              </Tag>
            ))}
          </div>
        </Reveal>

        <StaggerContainer className="projects-grid" stagger={0.1}>
          {filtered.map((project) => {
            const visual = projectVisuals[project.visual] || projectVisuals.salon;
            const isExpanded = expandedId === project.id;

            return (
              <StaggerItem key={project.id}>
                <div className={`project-card ${isExpanded ? 'project-card--expanded' : ''}`}>
                  <div className="project-visual" style={{ background: visual.gradient }}>
                    <Icon name={visual.icon} size={32} className="project-visual-icon" />
                    <div className="project-visual-overlay" />
                  </div>

                  <div className="project-content">
                    <div className="project-tags">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="accent" size="sm">{tag}</Badge>
                      ))}
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>

                    <div className="project-tech">
                      {project.tech.map(t => (
                        <span key={t} className="project-tech-item">{t}</span>
                      ))}
                    </div>

                    {isExpanded && (
                      <div className="project-features">
                        <h4>Key Features</h4>
                        <ul>
                          {project.features.map(f => (
                            <li key={f}>
                              <Icon name="check" size={14} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button
                      className="project-expand"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    >
                      {isExpanded ? 'Show less' : 'Show more'}
                      <Icon name={isExpanded ? 'arrow-up' : 'arrow-down'} size={14} />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}