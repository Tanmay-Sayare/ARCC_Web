"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "First-time Homebuyer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "ARCC made my first home buying experience incredibly smooth. Their team guided me through every step of the process and helped me find the perfect property within my budget.",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Property Investor",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I've worked with several real estate consultants, but ARCC stands out for their professionalism and market knowledge. They helped me build a profitable real estate portfolio in Nagpur.",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    position: "Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Finding the right commercial space for my business was crucial. ARCC understood my requirements perfectly and found us an ideal location that has significantly contributed to our growth.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-background/60 backdrop-blur">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Quote className="h-12 w-12 text-primary/40 mb-6" />
            <p className="text-lg sm:text-xl mb-8 italic">"{testimonials[current].quote}"</p>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
