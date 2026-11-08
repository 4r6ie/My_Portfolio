import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui';
import { cn, debounce } from '@/lib/utils';
import { profile, skills, services, projects, devEnvironments, toolsList } from '@/data';

const searchableContent = [
  ...Object.entries(skills).flatMap(([category, items]) =>
    items.map(skill => ({ type: 'skill', category, title: skill, description: `${category} skill`, icon: 'code', action: 'skills' }))
  ),
  ...services.map(s => ({ type: 'service', title: s.title, description: s.description, icon: s.icon, action: 'services' })),
  ...projects.map(p => ({ type: 'project', title: p.title, description: p.desc, icon: 'folder', action: 'projects' })),
  ...devEnvironments.map(d => ({ type: 'tool', title: d, description: 'Development environment', icon: 'terminal', action: 'skills' })),
  ...toolsList.map(t => ({ type: 'tool', title: t, description: 'Development tool', icon: 'wrench', action: 'skills' })),
  { type: 'nav', title: 'Hero', description: 'Go to hero section', icon: 'home', action: 'home' },
  { type: 'nav', title: 'About', description: 'Go to about section', icon: 'user', action: 'about' },
  { type: 'nav', title: 'Skills', description: 'Go to skills section', icon: 'layers', action: 'skills' },
  { type: 'nav', title: 'Services', description: 'Go to services section', icon: 'briefcase', action: 'services' },
  { type: 'nav', title: 'Projects', description: 'Go to projects section', icon: 'folder', action: 'projects' },
  { type: 'nav', title: 'Experience', description: 'Go to experience section', icon: 'calendar', action: 'experience' },
  { type: 'nav', title: 'Contact', description: 'Go to contact section', icon: 'mail', action: 'contact' },
  { type: 'nav', title: 'Resume', description: 'Download resume', icon: 'download', action: 'resume' },
  { type: 'theme', title: 'Toggle Theme', description: 'Switch between dark and light mode', icon: 'sun', action: 'theme' },
];

const quickActions = [
  { title: 'View Projects', icon: 'folder', action: 'projects' },
  { title: 'Contact Me', icon: 'mail', action: 'contact' },
  { title: 'Download Resume', icon: 'download', action: 'resume' },
  { title: 'Toggle Theme', icon: 'sun', action: 'theme' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState(() => {
    try { return JSON.parse(localStorage.getItem('recentSearches') || '[]'); } catch { return []; }
  });
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchableContent
      .filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      )
      .slice(0, 10);
  }, [query]);

  const displayItems = query.trim() ? results : quickActions;

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const saveRecentSearch = useCallback((search) => {
    setRecentSearches(prev => {
      const updated = [search, ...prev.filter(s => s !== search)].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const executeAction = useCallback((item) => {
    if (item.type === 'theme') {
      document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    } else if (item.action) {
      const el = document.getElementById(item.action);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    if (query.trim()) saveRecentSearch(query);
    onClose();
  }, [query, onClose, saveRecentSearch]);

  const handleKeyDown = useCallback((e) => {
    const items = displayItems;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => (i + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => (i - 1 + items.length) % items.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (items[selectedIndex]) executeAction(items[selectedIndex]);
        break;
      case 'Escape':
        onClose();
        break;
    }
  }, [displayItems, selectedIndex, executeAction, onClose]);

  const debouncedSearch = useMemo(() => debounce((val) => setQuery(val), 150), []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  const getIcon = (item) => {
    const iconMap = { skill: 'code', service: 'briefcase', project: 'folder', tool: 'terminal', nav: 'arrow-right', theme: 'sun' };
    return iconMap[item.type] || item.icon || 'arrow-right';
  };

  const getTypeLabel = (item) => {
    const labels = { skill: 'Skill', service: 'Service', project: 'Project', tool: 'Tool', nav: 'Section', theme: 'Action' };
    return labels[item.type] || item.type;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="command-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />
          <motion.div
            className="command-palette"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Search"
          >
            <div className="command-header">
              <Icon name="search" size={18} className="command-search-icon" />
              <input
                ref={inputRef}
                type="text"
                className="command-input"
                placeholder="Search skills, projects, sections..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
              <kbd className="command-kbd">ESC</kbd>
            </div>

            <div className="command-body" ref={listRef}>
              {!query.trim() && recentSearches.length > 0 && (
                <div className="command-section">
                  <span className="command-section-label">Recent Searches</span>
                  {recentSearches.map((search, i) => (
                    <button
                      key={search}
                      className="command-item"
                      onClick={() => { setQuery(search); inputRef.current?.focus(); }}
                    >
                      <Icon name="clock" size={16} className="command-item-icon" />
                      <span className="command-item-text">{search}</span>
                    </button>
                  ))}
                </div>
              )}

              <div className="command-section">
                <span className="command-section-label">
                  {query.trim() ? `Results for "${query}"` : 'Quick Actions'}
                </span>
                {displayItems.length === 0 ? (
                  <div className="command-empty">
                    <Icon name="search" size={24} />
                    <p>No results found for "{query}"</p>
                    <span>Try different keywords or check spelling</span>
                  </div>
                ) : (
                  displayItems.map((item, i) => (
                    <button
                      key={`${item.type}-${item.title}`}
                      className={cn('command-item', i === selectedIndex && 'command-item--active')}
                      onClick={() => executeAction(item)}
                      onMouseEnter={() => setSelectedIndex(i)}
                    >
                      <Icon name={getIcon(item)} size={16} className="command-item-icon" />
                      <div className="command-item-content">
                        <span className="command-item-title">{item.title}</span>
                        {item.description && (
                          <span className="command-item-desc">{item.description}</span>
                        )}
                      </div>
                      <span className="command-item-type">{getTypeLabel(item)}</span>
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className="command-footer">
              <span><kbd>↑↓</kbd> Navigate</span>
              <span><kbd>↵</kbd> Select</span>
              <span><kbd>Esc</kbd> Close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}