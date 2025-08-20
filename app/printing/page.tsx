"use client"

export default function PrintingPage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi AR Studio! I need printing services. Please provide details and pricing.")
    window.open(`https://wa.me/923453312908?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-purple-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Studio</h1>
                <p className="text-sm text-gray-600">Professional Printing Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Open 24/7
              </span>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🖨️ Professional Printing Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            High Quality <span className="text-purple-500">Printing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From documents to presentations, business cards to brochures - we deliver professional printing with
            exceptional quality.
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <span>📱</span>
            <span>Order via WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Printing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Document Printing",
                description: "Professional document printing in black & white or color",
                icon: "📄",
                features: ["High resolution", "Various paper sizes", "Fast processing", "Bulk discounts"],
              },
              {
                title: "Color Printing",
                description: "Vibrant color printing for presentations and marketing",
                icon: "🌈",
                features: [
                  "True color reproduction",
                  "Glossy or matte finish",
                  "Professional quality",
                  "Quick turnaround",
                ],
              },
              {
                title: "Large Format",
                description: "A3, A2, A1 and custom size printing available",
                icon: "📊",
                features: ["Engineering drawings", "Posters & banners", "Technical documents", "Custom sizes"],
              },
              {
                title: "Brochures & Flyers",
                description: "Marketing materials with professional finish",
                icon: "📰",
                features: ["Folded brochures", "Single page flyers", "Bulk quantities", "Design assistance"],
              },
              {
                title: "Reports & Manuals",
                description: "Professional binding and presentation",
                icon: "📚",
                features: ["Spiral binding", "Perfect binding", "Cover pages", "Professional finish"],
              },
              {
                title: "Custom Projects",
                description: "Special printing requirements handled with care",
                icon: "⚙️",
                features: ["Special papers", "Unique sizes", "Custom finishing", "Expert consultation"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-400 to-pink-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Print?</h2>
          <p className="text-xl text-white/90 mb-8">Contact us for professional printing services</p>
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
