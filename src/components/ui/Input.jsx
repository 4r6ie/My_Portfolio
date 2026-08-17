import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef(({ label, error, helperText, icon, className, ...props }, ref) => (
  <div className={cn('input-wrapper', error && 'input-wrapper--error', className)}>
    {label && <label className="input-label">{label}</label>}
    <div className="input-container">
      {icon && <span className="input-icon">{icon}</span>}
      <input ref={ref} className={cn('input', icon && 'input--with-icon', error && 'input--error')} {...props} />
    </div>
    {(error || helperText) && (
      <span className={cn('input-helper', error && 'input-helper--error')}>{error || helperText}</span>
    )}
  </div>
));

Input.displayName = 'Input';

export const Textarea = forwardRef(({ label, error, helperText, rows = 4, className, ...props }, ref) => (
  <div className={cn('input-wrapper', error && 'input-wrapper--error', className)}>
    {label && <label className="input-label">{label}</label>}
    <textarea ref={ref} rows={rows} className={cn('input', 'textarea', error && 'input--error')} {...props} />
    {(error || helperText) && (
      <span className={cn('input-helper', error && 'input-helper--error')}>{error || helperText}</span>
    )}
  </div>
));

Textarea.displayName = 'Textarea';