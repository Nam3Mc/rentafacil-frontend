interface RecommendationBadgeProps {
  score: number;

  reason: string;
}

export function RecommendationBadge({
  score,
  reason,
}: RecommendationBadgeProps) {

  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">

      <div className="flex items-center justify-between gap-4">

        <div>

          <p className="font-semibold text-primary">
            Recomendado para ti
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {reason}
          </p>

        </div>

        <div className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">

          {score}%

        </div>

      </div>

    </div>
  );
}