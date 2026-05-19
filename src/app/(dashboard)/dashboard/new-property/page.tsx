import { PropertyForm } from "@/components/property/forms/property-form";
import { PropertyDraftPreview } from "@/components/property/forms/property-draft-preview";
import { PropertyValidationPreview } from "@/components/property/forms/property-validation-preview";
import { PropertyAutosaveStatus } from "@/components/property/forms/property-autosave-status";
import { PropertyFormProvider } from "@/components/providers/property-form-provider";

export default function NewPropertyPage() {
  return (
    <div className="space-y-8">
      
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Publicar propiedad
        </h1>

        <p className="mt-3 text-muted-foreground">
          Completa la información para publicar una nueva propiedad.
        </p>
        <div className="mt-6">
          <PropertyAutosaveStatus />
        </div>
      </div>

      <PropertyFormProvider>
        <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
          <PropertyForm />
          
          <div className="space-y-6">
            <PropertyDraftPreview />
            <PropertyValidationPreview />
          </div>
        </div>
      </PropertyFormProvider>
    </div>
  );
}