import { allProperties } from "@/lib/data"
import PropertyCard from "@/components/property-card"

interface SimilarPropertiesProps {
  currentPropertyId: string
}

export default function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  const currentProperty = allProperties.find((p) => p.id === currentPropertyId)

  if (!currentProperty) return null

  // Find properties with similar type or location
  const similarProperties = allProperties
    .filter(
      (p) => p.id !== currentPropertyId && (p.type === currentProperty.type || p.location === currentProperty.location),
    )
    .slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {similarProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
