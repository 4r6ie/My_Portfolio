import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Card = forwardRef(({ children, variant = 'default', padding = 'md', className, hoverable = true, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      'card',
      `card--${variant}`,
      `card--${padding}`,
      hoverable && 'card--hoverable',
      className
    )}
    {...props}
  >
    {children}
  </article>
));

Card.displayName = 'Card';

export const CardHeader = ({ children, className, ...props }) => (
  <div className={cn('card-header', className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cn('card-title', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className, ...props }) => (
  <p className={cn('card-description', className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={cn('card-content', className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...props }) => (
  <div className={cn('card-footer', className)} {...props}>
    {children}
  </div>
);