import { motion } from 'framer-motion';
import { Icon, Badge } from '@/components/ui';
import { profile } from '@/data';

export default function ProjectModal({ project, onClose }) {
  const visuals = {
    salon: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', icon: 'briefcase' },
    academic: { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: 'book' },
    news: { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: 'globe' },
    message: { gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: 'mail' },
    aid: { gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', icon: 'heart' },
    llm: { gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)', icon: 'sparkles' },
  };

  const projectVisual = visuals[project.visual] || visuals.salon;

  return (
    <motion.div
      className="fixed inset-0 z-50 items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl mx-4 md:mx-6 max-h-[90vh] overflow-y-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      >
        <div className="p-6 pb-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <Icon name="x" size={20} />
            </button>
          </div>

          <div className="mb-6">
            <div className="project-visual relative rounded-xl mb-4" style={{ background: projectVisual.gradient }}>
              <Icon name={projectVisual.icon} size={48} className="mx-auto text-white" />
            </div>
            <p className="text-center text-gray-600 text-sm">{project.desc || 'Project description'}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-sm">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="font-medium mb-3 text-sm">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <Icon name="check" size={12} className="text-green-500 flex-sr-0 mt-0.5" />
                    <span className="ml-2 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Live & GitHub Links */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                <Icon name="eye" size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Icon name="github" size={16} />
                GitHub
              </a>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}