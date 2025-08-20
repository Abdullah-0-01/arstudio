"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, MessageCircle, Clock, CheckCircle, Star, Palette, Ruler, Truck } from "lucide-react"
import Link from "next/link"

export default function PanaflexPage() {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")

  const sizes = [
    { name: "2x3 feet", popular: false },
    { name: "3x4 feet", popular: true },
    { name: "4x6 feet", popular: false },
    { name: "6x8 feet", popular: false },
    { name: "8x10 feet", popular: false },
    { name: "Custom Size", popular: false },
  ]

  const materials = [
    { name: "Standard Panaflex", description: "Good quality, weather resistant" },
    { name: "Premium Panaflex", description: "High quality, UV resistant" },
    { name: "Backlit Panaflex", description: "For illuminated signs" },
    { name: "Mesh Panaflex", description: "Wind resistant, outdoor use" },
  ]

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Full Color HD Printing",
      description: "Vibrant colors with high resolution",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Custom Sizes Available",
      description: "Any size according to your needs",
    },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Weather Resistant", description: "Suitable for outdoor use" },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Installation Service",
      description: "Professional installation available",
    },
  ]

  const handleWhatsAppOrder = () => {
    const message = `Hi AR Studio! I want to order Panaflex printing:
Size: ${selectedSize || "Not selected"}
Material: ${selectedMaterial || "Not selected"}
Please provide quote and details.`

    window.open(`https://wa.me/923453312908?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to AR Studio</span>
            </Link>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Clock className="w-3 h-3 mr-1" />
                Open 24/7
              </Badge>
              <Button
                onClick={() => window.open("https://wa.me/923453312908", "_blank")}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="text-yellow-600">Panaflex</span> Printing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            High-quality panaflex printing for shops, offices, events, and outdoor advertising. Weather-resistant
            materials with vibrant colors that last.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              HD Quality Printing
            </Badge>
            <Badge className="bg-teal-100 text-teal-800 border-teal-200 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Weather Resistant
            </Badge>
            <Badge className="bg-red-100 text-red-800 border-red-200 px-4 py-2">
              <Truck className="w-4 h-4 mr-2" />
              Installation Available
            </Badge>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Panaflex Printing?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Size Selection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Size</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizes.map((size, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedSize === size.name ? "ring-2 ring-yellow-500 bg-yellow-50" : ""
                } ${size.popular ? "border-yellow-400" : ""}`}
                onClick={() => setSelectedSize(size.name)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{size.name}</CardTitle>
                    {size.popular && <Badge className="bg-yellow-500 text-white">Popular</Badge>}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Selection */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Select Material Type</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedMaterial === material.name ? "ring-2 ring-teal-500 bg-teal-50" : ""
                }`}
                onClick={() => setSelectedMaterial(material.name)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{material.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{material.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Order?</CardTitle>
              <CardDescription>Get your custom panaflex printed with professional quality</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-left space-y-2">
                <p>
                  <strong>Selected Size:</strong> {selectedSize || "Please select a size"}
                </p>
                <p>
                  <strong>Selected Material:</strong> {selectedMaterial || "Please select material"}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppOrder} className="flex-1 bg-green-600 hover:bg-green-700" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </Button>
                <Button onClick={() => window.open("tel:+923453312908", "_blank")} variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                📞 Contact: 0345-3312908 | 🕒 Available 24/7 | 🚚 Home pickup & delivery available
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
