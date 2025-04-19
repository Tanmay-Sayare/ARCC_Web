"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyImageGalleryProps {
  images: string[]
  title: string
}

export default function PropertyImageGallery({ images, title }: PropertyImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image src={images[0] || "/placeholder.svg"} alt={`${title} - Main Image`} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">+{images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative h-[80vh] w-[80vw]">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt={`${title} - Image ${currentImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
