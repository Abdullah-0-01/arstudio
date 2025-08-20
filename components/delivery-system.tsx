"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function DeliverySystem() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [deliveryVans, setDeliveryVans] = useState([
    { id: 1, x: 20, y: 30, area: "Gulshan-e-Iqbal", status: "delivering" },
    { id: 2, x: 60, y: 50, area: "Clifton", status: "pickup" },
    { id: 3, x: 40, y: 70, area: "Saddar", status: "available" },
  ])

  // Animate delivery vans
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryVans((vans) =>
        vans.map((van) => ({
          ...van,
          x: (van.x + Math.random() * 10 - 5) % 100,
          y: (van.y + Math.random() * 8 - 4) % 100,
        })),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const karachiAreas = [
    { name: "Gulshan-e-Iqbal", x: 25, y: 35, available: true, deliveryTime: "30-45 min" },
    { name: "Clifton", x: 65, y: 55, available: true, deliveryTime: "20-30 min" },
    { name: "Saddar", x: 45, y: 75, available: true, deliveryTime: "25-35 min" },
    { name: "Defence", x: 70, y: 40, available: true, deliveryTime: "35-50 min" },
    { name: "North Nazimabad", x: 30, y: 20, available: true, deliveryTime: "40-55 min" },
    { name: "Korangi", x: 80, y: 70, available: false, deliveryTime: "Coming Soon" },
    { name: "Malir", x: 85, y: 85, available: false, deliveryTime: "Coming Soon" },
    { name: "Lyari", x: 15, y: 60, available: true, deliveryTime: "45-60 min" },
  ]

  return (
    <section className="relative z-10 px-6 py-16 bg-gradient-to-br from-card/50 to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Pickup & Delivery</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We Come to You Across Karachi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track our delivery vans in real-time and book pickup/delivery services across major areas of Karachi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Map of Karachi */}
          <Card className="p-6 relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-4 text-center">Live Delivery Map</h3>

            {/* Map Container */}
            <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg border-2 border-primary/20 overflow-hidden">
              {/* Karachi Areas */}
              {karachiAreas.map((area, index) => (
                <div
                  key={index}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    selectedArea === area.name ? "scale-125 z-20" : "hover:scale-110"
                  }`}
                  style={{ left: `${area.x}%`, top: `${area.y}%` }}
                  onClick={() => setSelectedArea(selectedArea === area.name ? null : area.name)}
                >
                  <div
                    className={`w-4 h-4 rounded-full shadow-lg ${
                      area.available ? "bg-primary animate-pulse" : "bg-gray-400"
                    }`}
                  ></div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap">
                    {area.name}
                  </div>
                  {selectedArea === area.name && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
                      {area.deliveryTime}
                    </div>
                  )}
                </div>
              ))}

              {/* Animated Delivery Vans */}
              {deliveryVans.map((van) => (
                <div
                  key={van.id}
                  className="absolute transition-all duration-2000 ease-in-out z-10"
                  style={{ left: `${van.x}%`, top: `${van.y}%` }}
                >
                  <div
                    className={`w-6 h-4 rounded-sm shadow-lg flex items-center justify-center text-xs font-bold ${
                      van.status === "delivering"
                        ? "bg-accent text-accent-foreground"
                        : van.status === "pickup"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground"
                    }`}
                  >
                    🚚
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center">
                    {van.area}
                  </div>
                </div>
              ))}

              {/* Map Legend */}
              <div className="absolute bottom-2 left-2 bg-white/90 rounded p-2 text-xs">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Available Areas</span>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Coming Soon</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">🚚</span>
                  <span>Live Vans</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Click on areas to see delivery times • Vans update every 2 seconds
              </p>
            </div>
          </Card>

          {/* Booking Form */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Book Pickup & Delivery</h3>

            {!showBookingForm ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    size="lg"
                    className="h-20 flex flex-col items-center justify-center bg-primary hover:bg-primary/90"
                    onClick={() => setShowBookingForm(true)}
                  >
                    <span className="text-2xl mb-1">📤</span>
                    <span>Schedule Pickup</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center bg-transparent"
                    onClick={() => setShowBookingForm(true)}
                  >
                    <span className="text-2xl mb-1">📥</span>
                    <span>Request Delivery</span>
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Service Features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Free pickup for orders above Rs. 500
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Same-day delivery available
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Real-time tracking via WhatsApp
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Secure document handling
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-primary/10 rounded p-3">
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Areas Covered</div>
                  </div>
                  <div className="bg-secondary/10 rounded p-3">
                    <div className="text-lg font-bold text-secondary">24/7</div>
                    <div className="text-xs text-muted-foreground">Service Hours</div>
                  </div>
                  <div className="bg-accent/10 rounded p-3">
                    <div className="text-lg font-bold text-accent">30min</div>
                    <div className="text-xs text-muted-foreground">Avg Delivery</div>
                  </div>
                </div>
              </div>
            ) : (
              <BookingForm onClose={() => setShowBookingForm(false)} />
            )}
          </Card>
        </div>

        {/* Service Areas Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {karachiAreas.map((area, index) => (
              <Card
                key={index}
                className={`p-4 text-center cursor-pointer transition-all duration-300 ${
                  area.available ? "hover:shadow-lg hover:scale-105 bg-card" : "opacity-60 bg-muted cursor-not-allowed"
                }`}
              >
                <div className={`text-2xl mb-2 ${area.available ? "" : "grayscale"}`}>
                  {area.available ? "🏢" : "🚧"}
                </div>
                <h4 className="font-semibold text-sm mb-1">{area.name}</h4>
                <p className={`text-xs ${area.available ? "text-primary" : "text-muted-foreground"}`}>
                  {area.deliveryTime}
                </p>
                {area.available && (
                  <Badge variant="secondary" className="mt-2 text-xs">
                    Available
                  </Badge>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BookingForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    serviceType: "pickup",
    name: "",
    phone: "",
    address: "",
    area: "",
    description: "",
    urgency: "standard",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `🔔 *New Booking Request - AR Studio*

📋 *Service Type:* ${formData.serviceType === "pickup" ? "Pickup" : "Delivery"}
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Address:* ${formData.address}
🏢 *Area:* ${formData.area}
📝 *Requirements:* ${formData.description}
⚡ *Urgency:* ${formData.urgency === "urgent" ? "Urgent (+Rs.100)" : "Standard (24hrs)"}

Please confirm this booking and provide estimated time.`

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/923453312908?text=${encodeURIComponent(message)}`, "_blank")

    alert("Booking details sent to WhatsApp! We'll contact you shortly.")
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Book Your Service</h4>
        <Button variant="ghost" size="sm" onClick={onClose}>
          ✕
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant={formData.serviceType === "pickup" ? "default" : "outline"}
          onClick={() => setFormData({ ...formData, serviceType: "pickup" })}
        >
          Pickup
        </Button>
        <Button
          type="button"
          variant={formData.serviceType === "delivery" ? "default" : "outline"}
          onClick={() => setFormData({ ...formData, serviceType: "delivery" })}
        >
          Delivery
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>

      <Input
        placeholder="Complete Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />

      <select
        className="w-full p-2 border border-border rounded-md bg-background"
        value={formData.area}
        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
        required
      >
        <option value="">Select Area</option>
        <option value="gulshan">Gulshan-e-Iqbal</option>
        <option value="clifton">Clifton</option>
        <option value="saddar">Saddar</option>
        <option value="defence">Defence</option>
        <option value="nazimabad">North Nazimabad</option>
        <option value="lyari">Lyari</option>
      </select>

      <Textarea
        placeholder="Describe your printing/copying requirements..."
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        rows={3}
      />

      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant={formData.urgency === "standard" ? "default" : "outline"}
          onClick={() => setFormData({ ...formData, urgency: "standard" })}
        >
          Standard (24hrs)
        </Button>
        <Button
          type="button"
          variant={formData.urgency === "urgent" ? "default" : "outline"}
          onClick={() => setFormData({ ...formData, urgency: "urgent" })}
        >
          Urgent (+Rs.100)
        </Button>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Submit Booking Request
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We'll contact you via WhatsApp within 15 minutes to confirm details
      </p>
    </form>
  )
}
