import { PropertiesListingSection } from "@/components/sections/properties-listing-section";
import { RecentlyViewedProperties } from "@/components/sections/recently-viewed-properties";
import { PropertyFavoritesCounter } from "@/components/property/property-favorites-counter";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      
      <div className="flex justify-end">
        <PropertyFavoritesCounter />
      </div>

      <PropertiesListingSection />
      <RecentlyViewedProperties />
    </div>
  );
}