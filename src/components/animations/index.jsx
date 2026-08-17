import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, duration = 0.6, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideUp = ({ children, delay = 0, duration = 0.8, distance = 30, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: distance }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideDown = ({ children, delay = 0, duration = 0.8, distance = 30, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: -distance }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideLeft = ({ children, delay = 0, duration = 0.8, distance = 40, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, x: -distance }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideRight = ({ children, delay = 0, duration = 0.8, distance = 40, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, x: distance }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, duration = 0.5, scale = 0.95, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, stagger = 0.1, delayChildren = 0, className = '', ...props }) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', ...props }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Reveal = ({ children, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealLeft = ({ children, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealRight = ({ children, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Floating = ({ children, y = [-10, 10], duration = 6, className = '', ...props }) => (
  <motion.div
    animate={{ y }}
    transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Glow = ({ children, className = '', ...props }) => (
  <motion.div
    animate={{
      boxShadow: [
        '0 0 20px rgba(34, 211, 238, 0.3)',
        '0 0 40px rgba(34, 211, 238, 0.5)',
        '0 0 20px rgba(34, 211, 238, 0.3)',
      ],
    }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Rotate = ({ children, duration = 20, className = '', ...props }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Shimmer = ({ children, className = '', ...props }) => (
  <motion.div
    style={{
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      backgroundSize: '200% 100%',
    }}
    animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Presence = ({ children, mode = 'wait' }) => (
  <motion.div
    initial="hidden"
    animate="show"
    exit="exit"
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.05 } },
      exit: { opacity: 0, transition: { staggerChildren: 0.03, staggerDirection: -1 } },
    }}
  >
    {children}
  </motion.div>
);