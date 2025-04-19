import Link from "next/link"
import { Building, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">ARCC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Turning your real estate dreams into reality with a legacy of excellence in the market.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Properties
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about#services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Property Valuation
              </Link>
              <Link
                href="/about#services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Loan Services
              </Link>
              <Link
                href="/about#services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Corporate Leasing
              </Link>
              <Link
                href="/about#services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Subsidy Services
              </Link>
              <Link
                href="/about#services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Real Estate Tax Expertise
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <p className="text-sm text-muted-foreground">1, Amarsingh Complex, Lakadganj, Nagpur, 440008</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">+91 98344 81966</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">info@arccnagpur.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">@arccnagpur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amarsingh Realty and Consulting Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
