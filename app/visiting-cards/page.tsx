"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Palette,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function VisitingCardsPage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedFinish, setSelectedFinish] = useState("")

  const packages = [
    {
      name: "100 Cards",
      popular: false,
      description: "Perfect for small businesses",
    },
    {
      name: "250 Cards",
      popular: true,
      description: "Most popular choice",
    },
    {
      name: "500 Cards",
      popular: false,
      description: "Great value for money",
    },
    {
      name: "1000 Cards",
      popular: false,
      description: "Best for large teams",
    },
  ]

  const finishes = [
    {
      name: "Matte Finish",
      description: "Elegant, non-reflective finish",
      popular: true,
    },
    {
      name: "Glossy Finish",
      description: "Shiny, vibrant colors",
      popular: false,
    },
    {
      name: "UV Coating",
      description: "Premium protection & shine",
      popular: false,
    },
    {
      name: "Embossed",
      description: "Raised text, luxury feel",
      popular: false,
    },
  ]

  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Premium Card Stock",
      description: "350 GSM high-quality paper",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Full Color Printing",
      description: "CMYK + Pantone colors available",
    },
    { icon: <Zap className="w-6 h-6" />, title: "Same Day Service", description: "Rush orders completed in 4 hours" },
    { icon: <Users className="w-6 h-6" />, title: "Free Design Help", description: "Professional design assistance" },
  ]

  const designTemplates = [
    { name: "Corporate", description: "Professional business designs" },
    { name: "Creative", description: "Artistic and unique layouts" },
    { name: "Medical", description: "Clean designs for healthcare" },
    { name: "Restaurant", description: "Food & hospitality themed" },
    { name: "Real Estate", description: "Property business focused" },
    { name: "Custom", description: "Your own design or idea" },
  ]

  const handleWhatsAppOrder = () => {
    const message = `Hi AR Studio! I want to order Visiting Cards:
Package: ${selectedPackage || "Not selected"}
Finish: ${selectedFinish || "Not selected"}
Please provide details and help with design.`

    window.open(`https://wa.me/923453312908?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
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
            Professional <span className="text-blue-600">Visiting Cards</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Make a lasting first impression with premium quality visiting cards. Professional designs, high-quality
            printing, and fast delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Premium 350 GSM
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Free Design Help
            </Badge>
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Same Day Service
            </Badge>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Visiting Cards?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
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

      {/* Package Selection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedPackage === pkg.name ? "ring-2 ring-blue-500 bg-blue-50" : ""
                } ${pkg.popular ? "border-blue-400" : ""}`}
                onClick={() => setSelectedPackage(pkg.name)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    {pkg.popular && <Badge className="bg-blue-500 text-white">Popular</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Finish Selection */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Select Finish Type</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {finishes.map((finish, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedFinish === finish.name ? "ring-2 ring-purple-500 bg-purple-50" : ""
                } ${finish.popular ? "border-purple-400" : ""}`}
                onClick={() => setSelectedFinish(finish.name)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{finish.name}</CardTitle>
                    {finish.popular && <Badge className="bg-purple-500 text-white">Recommended</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{finish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Templates */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Design Templates Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTemplates.map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{template.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              💡 <strong>Free Design Consultation:</strong> Our designers will help you create the perfect card
            </p>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Order?</CardTitle>
              <CardDescription>Get your professional visiting cards printed today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-left space-y-2">
                <p>
                  <strong>Selected Package:</strong> {selectedPackage || "Please select a package"}
                </p>
                <p>
                  <strong>Selected Finish:</strong> {selectedFinish || "Please select finish"}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What's Included:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✅ Premium 350 GSM card stock</li>
                  <li>✅ Full color printing (both sides)</li>
                  <li>✅ Free design consultation</li>
                  <li>✅ Same day printing available</li>
                  <li>✅ Home pickup & delivery</li>
                </ul>
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
                📞 Contact: 0345-3312908 | 🕒 Available 24/7 | 🚚 Free design help included
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
