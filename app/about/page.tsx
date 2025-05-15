import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, CheckCircle, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image 123.jpeg"
            alt="About ARCC"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            About Amarsingh Realty and Consulting Company
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A premier real estate and land holding company based in East Nagpur.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">About Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to Amarsingh Realty and Consulting Company (ARCC), a premier real estate and land holding
                  company based in East Nagpur. We take pride in owning some of the most posh lands in East Nagpur,
                  strategically located in the city's most sought-after neighborhoods. Our portfolio includes high-value
                  residential, commercial, and mixed-use properties, all carefully selected for their prime locations
                  and long-term investment potential.
                </p>
                <p>
                  At ARCC, we don't just help our clients buy, sell, or lease properties—we are also active investors,
                  owning and developing some of the region's most valuable real estate. With a keen eye for lucrative
                  opportunities, we ensure that our properties deliver exceptional value to both buyers and investors.
                </p>
                <p>
                  In addition to property ownership, ARCC is recognized as one of the top corporate leasing firms in
                  Nagpur, offering tailored leasing solutions for businesses of all sizes. Whether you're a startup
                  looking for your first office space or a large corporation in need of premium commercial properties,
                  we provide flexible leasing options that align with your business objectives and growth.
                </p>
                <p>
                  Whether you are looking to buy, sell, invest, or lease, ARCC is your trusted partner in navigating the
                  dynamic real estate market. Our commitment to excellence, integrity, and personalized service ensures
                  that your property goals are not only met but exceeded.
                </p>
                <p>
                  Thank you for choosing Amarsingh Realty and Consulting Company (ARCC)—where opportunity, expertise,
                  and customer satisfaction come together.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/house 12345.jpg" alt="ARCC Office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-accent/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/60 backdrop-blur">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  We conduct our business with the highest standards of honesty, transparency, and ethical behavior,
                  ensuring that our clients can trust us completely.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Client-Centric</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  Our clients are at the heart of everything we do. We listen to their needs, understand their goals,
                  and work tirelessly to exceed their expectations with personalized solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  We strive for excellence in every aspect of our business, from the quality of our services to the
                  relationships we build with our clients and partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-accent/20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of real estate services designed to meet your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle>Property Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With the assistance of our expert valuators, we provide accurate and reliable property valuation
                  services. Whether you're looking to buy, sell, or invest, our professional valuation ensures you have
                  a clear understanding of your property's true market value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle>Corporate Leasing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in Top Corporate Leasing solutions tailored to the needs of businesses. We offer premium
                  office spaces, retail locations, and commercial properties that align with the operational
                  requirements of businesses of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle>Property Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As property owners ourselves, we offer expert guidance on real estate investments. We help you
                  identify properties with strong appreciation potential and provide strategies to maximize your
                  returns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle>Property Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop premium residential and commercial properties in East Nagpur's most sought-after locations.
                  Our developments are known for their quality construction, modern amenities, and strategic locations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle>Real Estate Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team of real estate experts provides comprehensive consulting services to help you navigate the
                  complex real estate market. Whether you're buying, selling, or investing, we offer strategic advice
                  tailored to your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle>Property Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer end-to-end property management services for residential and commercial properties. From
                  tenant screening and rent collection to maintenance and repairs, we take care of everything so you
                  don't have to.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
