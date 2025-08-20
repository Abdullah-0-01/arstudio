"use client"

export default function TrainBookingPage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi AR Studio! I need train ticket booking services. Please provide details and pricing.",
    )
    window.open(`https://wa.me/923453312908?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Studio</h1>
                <p className="text-sm text-gray-600">Pakistan Train Booking Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Open 24/7
              </span>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚂 Pakistan Train Booking Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Book <span className="text-red-500">Train Tickets</span> Fast
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Skip the long queues! Book train tickets for all Pakistan routes through AR Studio. Fast booking, home
            delivery, and 24/7 support available.
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <span>📱</span>
            <span>Book via WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular Train Routes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                route: "Karachi ↔ Lahore",
                trains: ["Karachi Express", "Pak Business Express", "Green Line"],
                duration: "18-20 hours",
                icon: "🚄",
              },
              {
                route: "Lahore ↔ Islamabad",
                trains: ["Islamabad Express", "Subak Kharam", "Rehman Baba"],
                duration: "4-5 hours",
                icon: "🚅",
              },
              {
                route: "Karachi ↔ Quetta",
                trains: ["Quetta Express", "Bolan Mail", "Jaffar Express"],
                duration: "12-14 hours",
                icon: "🚂",
              },
              {
                route: "Lahore ↔ Peshawar",
                trains: ["Khyber Mail", "Awam Express", "Pak Express"],
                duration: "8-10 hours",
                icon: "🚃",
              },
              {
                route: "Karachi ↔ Multan",
                trains: ["Multan Express", "Khushhal Khan", "Shah Rukn-e-Alam"],
                duration: "10-12 hours",
                icon: "🚆",
              },
              {
                route: "All Other Routes",
                trains: ["Faisalabad", "Sukkur", "Hyderabad", "Bahawalpur"],
                duration: "Various",
                icon: "🗺️",
              },
            ].map((route, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{route.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{route.route}</h3>
                <p className="text-gray-600 mb-4">Duration: {route.duration}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Available Trains:</p>
                  {route.trains.map((train, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">🚂</span>
                      {train}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Available Classes</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { class: "Economy", icon: "💺", features: ["Basic seating", "Affordable rates", "Standard service"] },
              {
                class: "AC Sleeper",
                icon: "🛏️",
                features: ["Air conditioning", "Sleeping berths", "Comfortable journey"],
              },
              {
                class: "AC Business",
                icon: "💼",
                features: ["Premium comfort", "Business class service", "Priority booking"],
              },
              { class: "First Class", icon: "👑", features: ["Luxury travel", "Premium amenities", "VIP treatment"] },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.class}</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How to Book</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", description: "WhatsApp us with your travel details", icon: "📱" },
              { step: "2", title: "Choose Route", description: "Select your departure and destination", icon: "🗺️" },
              { step: "3", title: "Select Class", description: "Pick your preferred travel class", icon: "🎫" },
              { step: "4", title: "Get Tickets", description: "Receive tickets via home delivery", icon: "🏠" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-400 to-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Travel?</h2>
          <p className="text-xl text-white/90 mb-8">Book your train tickets now - avoid the queues!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>WhatsApp: 0345-3312908</span>
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
