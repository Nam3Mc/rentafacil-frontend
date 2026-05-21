import { PropertiesListingSection } from "@/components/sections/properties-listing-section";
import { RecentlyViewedProperties } from "@/components/sections/recently-viewed-properties";
import { PropertyFavoritesCounter } from "@/components/property/property-favorites-counter";
import { SaveSearchButton } from "@/components/property/save-search-button";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      
    <div className="flex flex-wrap items-center justify-between gap-4">
      <PropertyFavoritesCounter />
      <SaveSearchButton />
    </div>
      <PropertiesListingSection />
      <RecentlyViewedProperties />
    </div>
  );
}