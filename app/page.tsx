"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Hero3D from "@/components/hero-3d"
import ServiceShowcase from "@/components/service-showcase"
import MovingCanvas from "@/components/moving-canvas"
import DeliverySystem from "@/components/delivery-system"
import OrderTracking from "@/components/order-tracking"
import Testimonials from "@/components/testimonials"
import ChatWidget from "@/components/chat-widget"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showDetailedServices, setShowDetailedServices] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openWhatsApp = () => {
    window.open("https://wa.me/+923453312908?text=Hello AR Studio! I'm interested in your services.", "_blank")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Moving Canvas Background */}
      <MovingCanvas />

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center float-animation">
            <span className="text-primary-foreground font-bold text-lg">📸</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">AR Studio</h1>
            <p className="text-sm text-muted-foreground">Professional Print & Photo Services</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-pulse">⏰ Open 24/7</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={openWhatsApp}>
            Contact
          </Button>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90" onClick={openWhatsApp}>
            Order Now
          </Button>
        </div>
      </header>

      {/* Hero Section with 3D Workspace */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white animate-pulse">
              ⏰ Open 24/7 | 🚀 Fast Service Available
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to the Future of
              <span className="text-primary block">Printing & Stationery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional printing, photocopying, photography, and now train ticket booking services! From passport
              photos to Karachi train tickets - we handle it all. Available 24/7 for your convenience!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Our Services
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowDetailedServices(true)}>
                View Services
              </Button>
            </div>
          </div>

          {/* 3D Workspace */}
          <Hero3D />
        </div>
      </section>

      {/* Detailed Services Modal */}
      {showDetailedServices && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-foreground">AR Studio Services & Pricing</h2>
                <Button variant="outline" onClick={() => setShowDetailedServices(false)}>
                  ✕
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">📄 Photocopying Services</h3>

                  <div className="space-y-3">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary">💰 Our Rates:</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>
                          • Single Side: <span className="font-bold text-green-600">Rs. 8 per page</span>
                        </li>
                        <li>
                          • Double Side: <span className="font-bold text-green-600">Rs. 15 per page</span>
                        </li>
                        <li>
                          • Bulk Orders: <span className="font-bold text-orange-600">Special Discounts!</span>
                        </li>
                      </ul>
                    </div>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• A4, A3, Legal Size Available</li>
                      <li>• ID Card & Document Copying</li>
                      <li>• High Quality Copies</li>
                      <li>• Same Day Service</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">📸 Photography Services</h3>

                  <div className="space-y-3">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary">💰 Passport Photo Rates:</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>
                          • 6 Photos: <span className="font-bold text-green-600">Rs. 150</span>
                        </li>
                        <li>
                          • 12 Photos: <span className="font-bold text-green-600">Rs. 200</span>
                        </li>
                        <li>• All sizes available (Passport, CNIC, Visa)</li>
                      </ul>
                    </div>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Professional Studio Setup</li>
                      <li>• Instant Printing</li>
                      <li>• All Country Visa Sizes</li>
                      <li>• Digital Copies Available</li>
                    </ul>
                  </div>
                </Card>

                {/* Printing Services */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">🖨️ Printing Services</h3>

                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Black & White Printing (A4, A3, Legal)</li>
                    <li>• Color Printing (High Quality)</li>
                    <li>• Document & Thesis Printing</li>
                    <li>• Bulk Printing (Special Rates)</li>
                    <li>• Double-sided Available</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">🛡️ Plastic Coating & Lamination</h3>

                  <div className="space-y-3">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary">🔥 New Service!</h4>
                      <p className="text-sm mt-1">Plastic coating for copies and books</p>
                    </div>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Document Lamination</li>
                      <li>• Book Cover Coating</li>
                      <li>• ID Card Lamination</li>
                      <li>• Certificate Protection</li>
                      <li>• Waterproof Coating</li>
                      <li>• Long-lasting Protection</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">📚 Binding Services</h3>

                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Spiral Binding</li>
                    <li>• Hard Cover Binding</li>
                    <li>• Thesis Binding</li>
                    <li>• Report Binding</li>
                    <li>• Custom Binding Options</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">✏️ Stationery Shop</h3>

                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Pens, Pencils, Markers</li>
                    <li>• Notebooks & Registers</li>
                    <li>• Files & Folders</li>
                    <li>• Office Supplies</li>
                    <li>• School & College Items</li>
                  </ul>
                </Card>

                {/* Train Ticket Booking Service */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
                  <h3 className="text-xl font-bold text-primary mb-4">🚂 Pakistan Train Ticket Booking</h3>

                  <div className="space-y-3">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary">🎫 All Pakistan Routes!</h4>
                      <p className="text-sm mt-1">Book train tickets for any route across Pakistan</p>
                    </div>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• All Pakistan Train Routes</li>
                      <li>• Karachi, Lahore, Islamabad, Multan</li>
                      <li>• Quetta, Peshawar, Faisalabad</li>
                      <li>• Fast Booking Service</li>
                      <li>• Instant Confirmation</li>
                      <li>• Home Delivery Available</li>
                      <li>• AC & Non-AC Classes</li>
                      <li>• Group Bookings Welcome</li>
                      <li>• Same Day Service</li>
                    </ul>

                    <div className="bg-green-100 p-3 rounded-lg border border-green-300">
                      <h4 className="font-bold text-green-800 mb-2">⚡ Why Choose Us:</h4>
                      <ul className="text-sm space-y-1 text-green-700">
                        <li>• No need to stand in long queues</li>
                        <li>• Book from comfort of your home</li>
                        <li>• Expert assistance for all routes</li>
                        <li>• Competitive service charges</li>
                        <li>• 15+ years ticketing experience</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* AR Studio location map */}
              <div className="mt-8">
                <Card className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4 text-center">📍 Visit AR Studio</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3886599993402!2d67.04912017618027!3d24.884721077913458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef73a9e71f3%3A0xa8eed0938da7631!2sAR%20Studio!5e0!3m2!1sen!2s!4v1755682096029!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-muted-foreground mb-2">Come visit us at our location!</p>
                    <Button className="bg-blue-500 hover:bg-blue-600" onClick={openWhatsApp}>
                      📱 Get Directions via WhatsApp
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="mt-8 text-center space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">💡 Special Offers:</h3>
                  <p className="text-green-700 text-sm">
                    • Bulk orders get automatic discounts
                    <br />• Free pickup & delivery for orders above Rs. 500
                    <br />• Student discounts available with ID
                    <br />• Train ticket booking with minimal charges
                  </p>
                </div>
                <Button size="lg" className="bg-green-500 hover:bg-green-600" onClick={openWhatsApp}>
                  📱 WhatsApp us: 0345-3312908
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Showcase */}
      <ServiceShowcase />

      {/* AR Studio Location Section */}
      <section className="relative z-10 px-6 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white">📍 Visit AR Studio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📍 Visit <span className="text-primary">AR Studio</span>
            </h2>
            <p className="text-lg text-muted-foreground">Come visit us at our convenient Karachi location</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">🏢 Our Location</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📍 AR Studio, Karachi</p>
                  <p>📞 Contact: 0345-3312908</p>
                  <p className="text-green-600 font-bold">🕒 Open: 24/7 (Always Available)</p>
                  <p>🚗 Easy parking available</p>
                </div>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600" onClick={openWhatsApp}>
                  📱 Get Directions via WhatsApp
                </Button>
              </Card>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3886599993402!2d67.04912017618027!3d24.884721077913458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef73a9e71f3%3A0xa8eed0938da7631!2sAR%20Studio!5e0!3m2!1sen!2s!4v1755682096029!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Services Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white">🎒 Special School Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              School Copy & Book <span className="text-primary">Plastic Coating</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We specialize in plastic coating for school copies and books with complete pickup and delivery service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">School Copy & Book Coating</h3>
                <p className="text-green-700">Professional plastic coating for durability</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">✨ What We Coat:</h4>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• School notebooks & copies</li>
                    <li>• Textbooks & reference books</li>
                    <li>• Important documents</li>
                    <li>• Study materials</li>
                    <li>• Certificates & awards</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-2">💪 Benefits:</h4>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• Waterproof protection</li>
                    <li>• Long-lasting durability</li>
                    <li>• Easy to clean</li>
                    <li>• Professional finish</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Pickup & Delivery Service</h3>
                <p className="text-blue-700">We come to your home with full responsibility</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">🏠 Our Promise:</h4>
                  <ul className="text-sm space-y-1 text-blue-700">
                    <li>• We pickup from your home</li>
                    <li>• Professional coating service</li>
                    <li>• Safe delivery back to you</li>
                    <li>
                      • <strong>FULL TRUST & RESPONSIBILITY</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-2">⚡ Quick Process:</h4>
                  <ul className="text-sm space-y-1 text-blue-700">
                    <li>• Call us: 0345-3312908</li>
                    <li>• We pickup your items</li>
                    <li>• Professional coating done</li>
                    <li>• Delivered back safely</li>
                  </ul>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                  <h4 className="font-bold text-yellow-800 mb-2">🛡️ Our Guarantee:</h4>
                  <p className="text-sm text-yellow-700">
                    <strong>"Hamari zimmedari hai"</strong> - Your books and copies are our responsibility from pickup
                    to delivery. We handle everything with complete care and trust.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" onClick={openWhatsApp}>
              📱 WhatsApp for School Services: 0345-3312908
            </Button>
          </div>
        </div>
      </section>

      {/* Train Ticket Booking Section - All Pakistan */}
      <section className="relative z-10 px-6 py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500 text-white animate-pulse">🚂 All Pakistan Train Booking</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Pakistan Train <span className="text-primary">Ticket Booking</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Skip the long queues! Book train tickets for any route across Pakistan through AR Studio with fast,
              reliable service and home delivery
            </p>
          </div>

          {/* Popular Routes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-blue-200">
              <div className="text-4xl mb-4">🚄</div>
              <h3 className="text-xl font-bold text-primary mb-3">Karachi Routes</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Karachi ↔ Lahore</li>
                <li>• Karachi ↔ Islamabad</li>
                <li>• Karachi ↔ Rawalpindi</li>
                <li>• Karachi ↔ Multan</li>
                <li>• Karachi ↔ Faisalabad</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-green-200">
              <div className="text-4xl mb-4">🚅</div>
              <h3 className="text-xl font-bold text-primary mb-3">Punjab Routes</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Lahore ↔ Islamabad</li>
                <li>• Lahore ↔ Multan</li>
                <li>• Lahore ↔ Faisalabad</li>
                <li>• Rawalpindi ↔ Multan</li>
                <li>• All Punjab cities</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-purple-200">
              <div className="text-4xl mb-4">🚈</div>
              <h3 className="text-xl font-bold text-primary mb-3">Other Routes</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Karachi ↔ Quetta</li>
                <li>• Lahore ↔ Quetta</li>
                <li>• Peshawar routes</li>
                <li>• Sukkur connections</li>
                <li>• All Pakistan routes</li>
              </ul>
            </Card>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-primary mb-3">Fast Booking</h3>
              <p className="text-sm text-muted-foreground">Instant confirmation for all Pakistan routes</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-primary mb-3">Home Delivery</h3>
              <p className="text-sm text-muted-foreground">Tickets delivered to your doorstep</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-primary mb-3">Best Rates</h3>
              <p className="text-sm text-muted-foreground">Minimal service charges</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-lg font-bold text-primary mb-3">All Classes</h3>
              <p className="text-sm text-muted-foreground">Economy, AC, Business available</p>
            </Card>
          </div>

          {/* Booking Process */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">🚂 How to Book Pakistan Train Tickets</h3>
            <div className="grid md:grid-cols-5 gap-4 text-sm">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <p className="font-semibold mb-2">1. WhatsApp Us</p>
                <p className="text-muted-foreground">Contact: 0345-3312908</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📝</div>
                <p className="font-semibold mb-2">2. Route Details</p>
                <p className="text-muted-foreground">From, To, Date, Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <p className="font-semibold mb-2">3. Passengers</p>
                <p className="text-muted-foreground">Names, CNIC, Class</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💳</div>
                <p className="font-semibold mb-2">4. Payment</p>
                <p className="text-muted-foreground">Easy payment options</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎫</div>
                <p className="font-semibold mb-2">5. Get Tickets</p>
                <p className="text-muted-foreground">Home delivery</p>
              </div>
            </div>
          </div>

          {/* Special Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">✨ Why Choose AR Studio for Train Booking?</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>
                  • <strong>No Queue Hassle:</strong> Book from comfort of your home
                </li>
                <li>
                  • <strong>Expert Service:</strong> 15+ years experience in ticketing
                </li>
                <li>
                  • <strong>All Routes:</strong> Complete Pakistan railway network
                </li>
                <li>
                  • <strong>Group Bookings:</strong> Special rates for families & groups
                </li>
                <li>
                  • <strong>24/7 Support:</strong> Always available for assistance
                </li>
                <li>
                  • <strong>Safe Delivery:</strong> Secure ticket delivery to your address
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🎯 Available Train Classes</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>
                  • <strong>Economy Class:</strong> Budget-friendly travel
                </li>
                <li>
                  • <strong>AC Standard:</strong> Air-conditioned comfort
                </li>
                <li>
                  • <strong>AC Sleeper:</strong> Comfortable overnight journeys
                </li>
                <li>
                  • <strong>Business Class:</strong> Premium travel experience
                </li>
                <li>
                  • <strong>Green Line:</strong> Express services
                </li>
                <li>
                  • <strong>Special Trains:</strong> Festival & holiday specials
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 max-w-2xl mx-auto mb-6">
              <h4 className="font-bold text-yellow-800 mb-2">🔥 Special Offer!</h4>
              <p className="text-sm text-yellow-700">
                Book 5+ tickets together and get <strong>FREE home delivery</strong> + special group discount rates!
              </p>
            </div>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4"
              onClick={openWhatsApp}
            >
              📱 Book Pakistan Train Tickets: 0345-3312908
            </Button>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery System */}
      <DeliverySystem />

      {/* Order Tracking Dashboard */}
      <OrderTracking />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Quick Stats */}
      <section className="relative z-10 px-6 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Orders Completed", value: "10,000+", icon: "📋" },
              { label: "Happy Customers", value: "5,000+", icon: "😊" },
              { label: "Delivery Areas", value: "50+", icon: "🚚" },
              { label: "Years Experience", value: "15+", icon: "⭐" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg float-animation"
          onClick={openWhatsApp}
        >
          <span className="text-2xl">💬</span>
        </Button>
      </div>

      {/* Chat Widget with 3D Mascot */}
      <ChatWidget />
    </div>
  )
}
