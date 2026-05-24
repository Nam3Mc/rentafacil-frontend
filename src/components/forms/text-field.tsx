"use client";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  error?: {
    message?: string;
  };
  type?: string;
  value?: string | number;
  min?: number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function TextField({
  label,
  placeholder,
  error,
  type = "text",
  value,
  min,
  onChange,
}: TextFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        min={min}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-12 w-full rounded-2xl border bg-background px-4 outline-none transition-all ${
          error
            ? "border-destructive"
            : "border-border focus:border-primary"
        }`}
      />

      {error?.message && (
        <p className="text-sm text-destructive">
          {error.message}
        </p>
      )}
    </div>
  );
}