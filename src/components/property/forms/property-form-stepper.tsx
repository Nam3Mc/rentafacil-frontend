import { Check } from "lucide-react";

import { FormStep } from "@/types/form.types";

interface PropertyFormStepperProps {
  steps: FormStep[];
  currentStep: number;
}

export function PropertyFormStepper({
  steps,
  currentStep,
}: PropertyFormStepperProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card p-4">
      <div className="flex min-w-max items-center gap-3">
        {steps.map((step, index) => {
          const isActive =
            currentStep === step.id;

          const isCompleted =
            currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-9 items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="size-4" />
                  ) : (
                    step.id
                  )}
                </div>

                <div>
                  <p
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="h-px w-8 bg-border" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}