import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, Landmark, Shield, Users } from "lucide-react"
import FeaturedProperties from "@/components/featured-properties"
import TestimonialSlider from "@/components/testimonial-slider"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/image 1234.jpeg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl backdrop-blur-lg bg-white/10 p-8 rounded-lg border border-white/10 shadow-lg">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white">
              Simple Made Perfect
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              At ARCC, we believe in turning your real estate dreams into reality. With a legacy of excellence in the
              real estate market, we offer a wide range of services designed to meet your unique needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/properties">Explore Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">About Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to Amarsingh Realty and Consulting Company (ARCC), a premier real estate and land holding
                  company based in East Nagpur. We take pride in owning some of the most posh lands in East Nagpur,
                  strategically located in the city's most sought-after neighborhoods.
                </p>
                <p>
                  Our portfolio includes high-value residential, commercial, and mixed-use properties, all carefully
                  selected for their prime locations and long-term investment potential.
                </p>
                <p>
                  At ARCC, we don't just help our clients buy, sell, or lease properties—we are also active investors,
                  owning and developing some of the region's most valuable real estate. With a keen eye for lucrative
                  opportunities, we ensure that our properties deliver exceptional value to both buyers and investors.
                </p>
              </div>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/house 12345.jpg" alt="ARCC Office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-accent/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We specialize in a variety of real estate services to meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background/60 backdrop-blur">
              <CardHeader className="pb-2">
                <Building className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Property Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accurate and reliable property valuations with the help of our expert valuators, ensuring informed
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader className="pb-2">
                <Landmark className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Corporate Leasing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Premium leasing solutions for businesses, whether you're a small startup or a large corporation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader className="pb-2">
                <Home className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Property Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strategic investment opportunities in high-value properties with excellent appreciation potential.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/about#services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our handpicked selection of premium properties in Nagpur.
            </p>
          </div>

          <FeaturedProperties />

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Choose ARCC?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We are committed to providing exceptional service and the highest level of professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise You Can Trust</h3>
              <p className="text-muted-foreground">
                With a dedicated team of professionals, including real estate experts, chartered accountants, and market
                analysts.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Properties</h3>
              <p className="text-muted-foreground">
                We own and develop some of the most valuable properties in East Nagpur, carefully selected for their
                prime locations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                We believe every client's needs are unique. Our services are customized to help you achieve your
                specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with ARCC.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Make Your Next Move?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Contact us today for a consultation and let us help you achieve your real estate goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
