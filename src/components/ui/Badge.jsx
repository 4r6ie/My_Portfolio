import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Badge = forwardRef(({ children, variant = 'default', size = 'sm', className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn('badge', `badge--${variant}`, `badge--${size}`, className)}
    {...props}
  >
    {children}
  </span>
));

Badge.displayName = 'Badge';

export const Tag = forwardRef(({ children, variant = 'default', active, className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn('tag', `tag--${variant}`, active && 'tag--active', className)}
    {...props}
  >
    {children}
  </button>
));

Tag.displayName = 'Tag';

export const Pill = forwardRef(({ children, variant = 'default', className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn('pill', `pill--${variant}`, className)}
    {...props}
  >
    {children}
  </span>
));

Pill.displayName = 'Pill';