import { motion } from 'framer-motion';
import { Button, Icon, Badge } from '@/components/ui';
import { SlideUp, Floating } from '@/components/animations';
import { profile } from '@/data';

export default function Hero() {
  const { name, title, summary, avatar, social, resume } = profile;
  const firstName = name.split(' ')[0];
  const lastName = name.split(' ').slice(1).join(' ');

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <SlideUp delay={0.1}>
          <Badge variant="accent" className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </Badge>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="hero-eyebrow">BSIT GRADUATE &middot; BOHOL, PHILIPPINES</p>
        </SlideUp>

        <SlideUp delay={0.3}>
          <h1 className="hero-title">
            Hi, I&apos;m <em>{firstName}</em><br />{lastName}
          </h1>
        </SlideUp>

        <SlideUp delay={0.4}>
          <h2 className="hero-subtitle">{title}</h2>
        </SlideUp>

        <SlideUp delay={0.5}>
          <p className="hero-text">{summary}</p>
        </SlideUp>

        <SlideUp delay={0.6}>
          <div className="hero-buttons">
            <Button variant="primary" href="#contact" icon={<Icon name="arrow-right" size={16} />}>
              Hire me
            </Button>
            <Button variant="secondary" href="#projects">
              View projects
            </Button>
            <Button variant="ghost" href={resume} download icon={<Icon name="download" size={16} />}>
              Resume
            </Button>
          </div>
        </SlideUp>

        <SlideUp delay={0.7}>
          <div className="hero-social">
            <span className="hero-social-label">CONNECT WITH ME</span>
            <div className="hero-social-links">
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hero-social-link">
                <Icon name="github" size={18} />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hero-social-link">
                in
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hero-social-link">
                f
              </a>
            </div>
          </div>
        </SlideUp>
      </div>

      <div className="hero-visual">
        <Floating y={[-8, 8]} duration={6}>
          <div className="hero-portrait">
            <div className="hero-portrait-glow" />
            <img className="hero-avatar" src={avatar} alt={name} />
            <div className="hero-code-window">
              <div className="hero-code-top">
                <span /><span /><span />
                <small>portfolio.js</small>
              </div>
              <code>
                <b>const</b> developer = {'{'}<br />
                &nbsp;&nbsp;name: <i>&apos;{firstName}&apos;</i>,<br />
                &nbsp;&nbsp;focus: <i>&apos;solutions&apos;</i>,<br />
                &nbsp;&nbsp;ready: <em>true</em><br />
                {'}'}
              </code>
            </div>
          </div>
        </Floating>

        <div className="hero-chips">
          <Floating y={[-5, 5]} duration={4}>
            <div className="hero-chip hero-chip--1">
              <Icon name="sparkles" size={14} />
              Detail-oriented
            </div>
          </Floating>
          <Floating y={[5, -5]} duration={5}>
            <div className="hero-chip hero-chip--2">
              <Icon name="zap" size={14} />
              Tech-savvy
            </div>
          </Floating>
        </div>
      </div>

      <a href="#about" className="hero-scroll" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
        SCROLL TO DISCOVER
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Icon name="arrow-down" size={16} />
        </motion.div>
      </a>
    </section>
  );
}