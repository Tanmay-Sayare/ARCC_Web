import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Contact Us"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team of real estate experts to discuss your needs and find the perfect property.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Our Office</CardTitle>
                <CardDescription>Visit us at our office</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">1, Amarsingh Complex, Lakadganj, Nagpur, 440008</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call us directly</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">+91 98344 81966</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Send us an email</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">info@arccnagpur.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-accent/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're here to help you
                with all your real estate needs.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter subject" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Find Us</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Visit our office in Nagpur to meet our team and discuss your real estate needs in person.
            </p>
          </div>

          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Map"
              alt="Office Location Map"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
