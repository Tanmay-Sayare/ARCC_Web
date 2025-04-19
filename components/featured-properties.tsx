import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bath, Bed, MapPin, MoveHorizontal } from "lucide-react"
import { featuredProperties } from "@/lib/data"

export default function FeaturedProperties() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProperties.slice(0, 3).map((property) => (
        <Link href={`/properties/${property.id}`} key={property.id}>
          <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2">{property.type}</Badge>
              {property.featured && (
                <Badge variant="secondary" className="absolute top-2 left-2">
                  Featured
                </Badge>
              )}
            </div>
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{property.title}</CardTitle>
                <p className="font-bold text-lg">₹{property.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{property.location}</span>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 pb-2">
              <p className="text-muted-foreground text-sm line-clamp-2">{property.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-2 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms} Baths</span>
                </div>
              </div>
              <div className="flex items-center">
                <MoveHorizontal className="h-4 w-4 mr-1" />
                <span>{property.size} sq.ft</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
