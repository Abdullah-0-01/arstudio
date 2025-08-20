"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  business: string
  rating: number
  text: string
  service: string
  location: string
  avatar: string
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Hassan",
      business: "Hassan Traders",
      rating: 5,
      text: "Excellent service! Their 3D tracking system is amazing. I could see my bulk order being processed in real-time. Fast delivery to Defence area.",
      service: "Bulk Printing",
      location: "Defence",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Fatima Khan",
      business: "Al-Noor Academy",
      rating: 5,
      text: "Best lamination service in Karachi! The quality is outstanding and the pickup service is very convenient. Highly recommended for schools.",
      service: "Lamination",
      location: "Gulshan-e-Iqbal",
      avatar: "👩‍🏫",
    },
    {
      id: 3,
      name: "Muhammad Ali",
      business: "Tech Solutions",
      rating: 5,
      text: "Professional printing quality for our presentations. The online tracking and WhatsApp updates made everything so easy. Will definitely use again!",
      service: "Professional Printing",
      location: "Clifton",
      avatar: "👨‍💻",
    },
    {
      id: 4,
      name: "Ayesha Malik",
      business: "Creative Studio",
      rating: 5,
      text: "Amazing stationery collection and great prices! The 3D website experience is unique. Fast delivery and excellent customer service.",
      service: "Stationery Purchase",
      location: "Saddar",
      avatar: "👩‍🎨",
    },
    {
      id: 5,
      name: "Omar Sheikh",
      business: "Legal Associates",
      rating: 5,
      text: "Reliable service for our legal documents. Secure handling and professional quality. The real-time tracking gives us peace of mind.",
      service: "Document Copying",
      location: "North Nazimabad",
      avatar: "👨‍⚖️",
    },
    {
      id: 6,
      name: "Zara Ahmed",
      business: "Fashion House",
      rating: 5,
      text: "Perfect for our marketing materials! High-quality color printing and fast turnaround. The delivery service covers our entire area efficiently.",
      service: "Marketing Materials",
      location: "Korangi",
      avatar: "👩‍💼",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoRotating, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoRotating(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoRotating(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoRotating(false)
    setCurrentIndex(index)
  }

  return (
    <section className="relative z-10 px-6 py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Customer Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses and individuals across Karachi who trust us with their printing needs
          </p>
        </div>

        {/* 3D Rotating Testimonial Cards */}
        <div className="relative">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="relative w-full max-w-4xl">
              {/* Main Testimonial Card */}
              <Card className="relative p-8 mx-auto max-w-2xl transform transition-all duration-500 hover:scale-105 shadow-2xl bg-gradient-to-br from-card to-muted/30">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    "
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].business}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonials[currentIndex].service}
                      </Badge>
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📍</span>
                    <span>{testimonials[currentIndex].location}</span>
                  </div>
                  <div className="text-sm text-primary font-medium">Verified Customer</div>
                </div>
              </Card>

              {/* Side Cards (Preview) */}
              <div className="hidden lg:block">
                {/* Left Preview */}
                <Card className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-64 p-4 opacity-60 scale-90 transform rotate-y-12 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-lg">
                      {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].avatar}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">
                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].business}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    "{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}"
                  </p>
                </Card>

                {/* Right Preview */}
                <Card className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-64 p-4 opacity-60 scale-90 transform -rotate-y-12 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-lg">
                      {testimonials[(currentIndex + 1) % testimonials.length].avatar}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">
                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {testimonials[(currentIndex + 1) % testimonials.length].business}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    "{testimonials[(currentIndex + 1) % testimonials.length].text}"
                  </p>
                </Card>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              ←
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              →
            </Button>
          </div>

          {/* Auto-rotate Toggle */}
          <div className="text-center mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isAutoRotating ? "⏸️ Pause" : "▶️ Auto-rotate"}
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-2xl font-bold text-secondary mb-1">5,000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">📋</div>
            <div className="text-2xl font-bold text-accent mb-1">10,000+</div>
            <div className="text-sm text-muted-foreground">Orders Completed</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
