import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  target,
  rel,
  icon,
  iconRight,
  loading,
  disabled,
  className,
  ...props
}, ref) => {
  const classes = cn(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    loading && 'btn--loading',
    disabled && 'btn--disabled',
    className
  );

  const content = (
    <>
      {loading && <span className="btn-spinner" />}
      {icon && !loading && <span className="btn-icon">{icon}</span>}
      <span className="btn-label">{children}</span>
      {iconRight && <span className="btn-icon btn-icon--right">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export const LinkButton = forwardRef(({ children, href, className, ...props }, ref) => (
  <a ref={ref} href={href} className={cn('link-button', className)} {...props}>
    {children}
  </a>
));

LinkButton.displayName = 'LinkButton';