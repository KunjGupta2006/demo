import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-ink"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full min-h-[100px] px-4 py-3 rounded-input bg-white border border-ink/10 text-ink text-base",
            "placeholder:text-muted/60 transition-all duration-200 resize-y",
            "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary",
            error && "border-coral/60 focus:ring-coral/30",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-sm text-coral" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
