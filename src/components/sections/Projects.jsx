import { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SectionHead, Badge, Tag, Icon } from '@/components/ui';
import { projects, filters } from '@/data';

const projectVisuals = {
  salon: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', icon: 'briefcase' },
  academic: { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: 'book' },
  news: { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: 'globe' },
  message: { gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: 'mail' },
  aid: { gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', icon: 'heart' },
  llm: { gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', icon: 'sparkles' },
};

// Map visual keys to category display names
const categoryLabels = {
  "Web Apps": 'Web',
  Educational: 'Academic',
  Media: 'News',
  "Mobile Apps": 'Mobile',
  "System Development": 'System',
  "AI/ML": 'AI',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [expandedId, setExpandedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All'
      ? projects
      : projects.filter(p => 
          p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()) || 
          (p.category && categoryLabels[p.category] && categoryLabels[p.category].toLowerCase() === activeFilter.toLowerCase())
        );

    // Sort projects
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'oldest':
          return a.id - b.id;
        case 'newest':
        default:
          return b.id - a.id;
      }
    });

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
            {/* Sort buttons */}
            <div className="projects-sort">
              {['newest', 'alphabetical', 'oldest'].map(sort => (
                <button
                  key={sort}
                  className={`sort-btn ${sortBy === sort ? 'sort-btn--active' : ''}`}
                  onClick={() => setSortBy(sort)}
                >
                  {sort === 'newest' ? 'Newest' : sort === 'alphabetical' ? 'A-Z' : 'Oldest'}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <StaggerContainer className="projects-grid" stagger={0.1}>
          {sorted.map((project) => {
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

                    {/* Status Badge */}
                    {project.status && (
                      <div className="project-status-badge">
                        <span className="status-badge-text">{project.status}</span>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link--live"
                        >
                          <Icon name="eye" size={14} /> Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link--github"
                        >
                          <Icon name="github" size={14} /> GitHub
                        </a>
                      )}
                    </div>

                    {/* Enhanced expand animation */}
                    {isExpanded && (
                      <div className="project-features-expand">
                        <h4>Key Features</h4>
                        <ul>
                          {project.features.map(f => (
                            <li key={f}>
                              <Icon name="check" size={14} />
                              <motion.span animate={{ opacity: 1, y: [0, -10, 0] }} className="feature-item">
                                {f}
                              </motion.span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Modal Trigger */}
                    <button
                      className="project-modal-trigger hidden lg:block"
                      onClick={() => openModal(project)}
                      aria-label="View project details"
                    >
                      <Icon name="info-circle" size={14} /> Details
                    </button>

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

                    {/* Mobile Modal Trigger */}
                    <button
                      className="project-modal-trigger-mobile hidden lg:block"
                      onClick={() => openModal(project)}
                      aria-label="View project details"
                    >
                      <Icon name="info-circle" size={14} />
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