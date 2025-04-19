import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allProperties } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bath, Bed, ChevronLeft, Home, Mail, MapPin, MoveHorizontal, Phone } from "lucide-react"
import PropertyImageGallery from "@/components/property-image-gallery"
import SimilarProperties from "@/components/similar-properties"

export default function Page({ params }: { params: { id: string } }) {
  const property = allProperties.find((p) => p.id === params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      <div className="container px-4 py-8 md:px-6">    
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/properties" className="text-muted-foreground hover:text-foreground">
            Properties
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{property.title}</span>
        </div>
        
        {/* Back Button */}
        <Link href="/properties" className="inline-flex items-center text-sm mb-6 hover:text-primary">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Properties
        </Link>
        
        {/* Property Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge>{property.type}</Badge>
              {property.featured && <Badge variant="secondary">Featured</Badge>}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">₹{property.price.toLocaleString()}</p>
            <p className="text-muted-foreground text-sm">
              {property.type === "For Rent" || property.type === "For Lease" ? "per month" : ""}
            </p>
          </div>
        </div>
        
        {/* Property Images */}
        <PropertyImageGallery images={property.images} title={property.title} />
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <div className="text-muted-foreground space-y-4">
                    {property.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Property Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-primary" />
                        <span>{property.bedrooms} Bedrooms</span>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5 text-primary" />
                        <span>{property.bathrooms} Bathrooms</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MoveHorizontal className="h-5 w-5 text-primary" />
                      <span>{property.size} sq.ft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5 text-primary" />
                      <span>{property.type}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Property ID</span>
                      <span className="font-medium">{property.id}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Property Type</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Property Size</span>
                      <span className="font-medium">{property.size} sq.ft</span>
                    </div>
                    {property.bedrooms > 0 && (
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Bedrooms</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Bathrooms</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">{property.location}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="location" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Location</h2>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=1200&text=Map View"
                      alt="Map View"
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    {property.location}, Nagpur, Maharashtra, India
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64&text=Agent"
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">Property Agent</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full">Contact Agent</Button>
                  <Button variant="outline" className="w-full">Schedule Viewing</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Similar Properties */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Similar Properties</h2>
          <SimilarProperties currentPropertyId={property.id} />
        </div>
      </div>
    </div>
  )
}
