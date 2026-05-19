interface AuthCardProps {
  title: string;

  description: string;

  children: React.ReactNode;
}

export function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-8 shadow-sm">
      <div className="mb-8 space-y-3">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="text-muted-foreground">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}