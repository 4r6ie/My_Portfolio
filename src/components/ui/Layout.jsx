import { cn } from '@/lib/utils';

export const SectionHead = ({ eyebrow, title, description, align = 'left', className, ...props }) => (
  <div className={cn('section-head', align === 'center' && 'section-head--center', className)} {...props}>
    {eyebrow && (
      <span className="section-eyebrow">
        {eyebrow}
      </span>
    )}
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-desc">{description}</p>}
  </div>
);

export const Section = ({ children, id, className, ...props }) => (
  <section id={id} className={cn('section', className)} {...props}>
    {children}
  </section>
);

export const Container = ({ children, size = 'default', className, ...props }) => (
  <div className={cn('container', size !== 'default' && `container--${size}`, className)} {...props}>
    {children}
  </div>
);

export const Grid = ({ children, cols = 'auto', gap = 'md', className, ...props }) => (
  <div className={cn('grid', `grid--${cols}`, `gap--${gap}`, className)} {...props}>
    {children}
  </div>
);

export const Flex = ({ children, direction = 'row', align, justify, gap, wrap, className, ...props }) => (
  <div
    className={cn(
      'flex',
      direction && `flex--${direction}`,
      align && `flex--align-${align}`,
      justify && `flex--justify-${justify}`,
      gap && `gap--${gap}`,
      wrap && 'flex--wrap',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const Divider = ({ className, ...props }) => (
  <hr className={cn('divider', className)} {...props} />
);