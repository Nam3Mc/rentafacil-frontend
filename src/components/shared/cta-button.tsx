import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
}

export function CTAButton({
  children,
}: CTAButtonProps) {
  return (
    <Button
      variant="premium"
      size="lg"
      className="rounded-2xl"
    >
      {children}
    </Button>
  );
}