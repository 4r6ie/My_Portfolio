import { useEffect, useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SectionHead, Badge, Tag, Button, Icon } from '@/components/ui';
import { projects, filters, profile } from '@/data';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()));

  const handleImageError = (e, projectId) => {
    e.target.style.display = 'none';
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const openLightbox = (project) => {
    setLightboxProject(project);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxProject(null);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

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
            const hasImage = Boolean(project.image) && !imageErrors[project.id];

            return (
              <StaggerItem key={project.id}>
                <div className={`project-card ${isExpanded ? 'project-card--expanded' : ''}`}>
                  <div
                    className="project-visual"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${project.title} details`}
                    onClick={() => openLightbox(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(project);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {hasImage ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        onError={(e) => handleImageError(e, project.id)}
                        loading="lazy"
                      />
                    ) : (
                      <Icon name={visual.icon} size={32} className="project-visual-icon" />
                    )}
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

        {lightboxOpen && lightboxProject && (() => {
          const visual = projectVisuals[lightboxProject.visual] || projectVisuals.salon;
          const hasImage = Boolean(lightboxProject.image) && !imageErrors[lightboxProject.id];
          const walkthroughHref = `mailto:${profile.email}?subject=${encodeURIComponent(`Project walkthrough: ${lightboxProject.title}`)}`;

          return (
            <div className="lightbox-overlay" onClick={closeLightbox}>
              <div
                className="lightbox-content"
                role="dialog"
                aria-modal="true"
                aria-label={lightboxProject.title}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={closeLightbox} aria-label="Close project details">&times;</button>
                {hasImage ? (
                  <img
                    src={lightboxProject.image}
                    alt={lightboxProject.title}
                    className="lightbox-image"
                    onError={(e) => handleImageError(e, lightboxProject.id)}
                  />
                ) : (
                  <div className="lightbox-cover" style={{ background: visual.gradient }}>
                    <Icon name={visual.icon} size={48} />
                  </div>
                )}
                <div className="lightbox-info">
                  <h3 className="lightbox-title">{lightboxProject.title}</h3>
                  <p className="lightbox-desc">{lightboxProject.desc}</p>
                  <div className="lightbox-tech">
                    {lightboxProject.tech.map(t => (
                      <span key={t} className="lightbox-tech-item">{t}</span>
                    ))}
                  </div>
                  {!lightboxProject.links?.demo && !lightboxProject.links?.repo && (
                    <div className="lightbox-actions">
                      <Button
                        variant="secondary"
                        size="sm"
                        href={walkthroughHref}
                        icon={<Icon name="mail" size={14} />}
                      >
                        Request a walkthrough
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
