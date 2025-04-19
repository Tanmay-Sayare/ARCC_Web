import { allProperties } from "@/lib/data"
import PropertyCard from "@/components/property-card"

export default function PropertiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-accent/20 py-12">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Find Your Perfect Property</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Browse our extensive collection of properties in Nagpur and find the one that meets your needs.
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Properties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
