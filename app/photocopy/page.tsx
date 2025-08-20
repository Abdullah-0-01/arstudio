"use client"

export default function PhotocopyPage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi AR Studio! I need photocopy services. Please provide details and pricing.")
    window.open(`https://wa.me/923453312908?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Studio</h1>
                <p className="text-sm text-gray-600">Professional Photocopy Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Open 24/7
              </span>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🖨️ Professional Photocopy Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            High Quality <span className="text-yellow-500">Photocopying</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Fast, reliable, and affordable photocopying services with crystal clear quality. Single side, double side,
            and bulk copying available.
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Photocopy Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Single Side Copying",
                description: "Rs. 8 per page - Crystal clear single side photocopying",
                icon: "📄",
                features: ["High quality paper", "Sharp text reproduction", "Fast processing"],
              },
              {
                title: "Double Side Copying",
                description: "Rs. 15 per page - Professional double side printing",
                icon: "📋",
                features: ["Both sides printed", "Perfect alignment", "Cost effective"],
              },
              {
                title: "Bulk Copying",
                description: "Special discounts for large quantities",
                icon: "📚",
                features: ["Volume discounts", "Quick turnaround", "Consistent quality"],
              },
              {
                title: "Document Scanning",
                description: "Convert physical documents to digital format",
                icon: "🖥️",
                features: ["High resolution", "Multiple formats", "Secure handling"],
              },
              {
                title: "Color Copying",
                description: "Vibrant color reproduction for presentations",
                icon: "🌈",
                features: ["True color matching", "Professional finish", "Various paper sizes"],
              },
              {
                title: "Binding Available",
                description: "Complete your documents with professional binding",
                icon: "📖",
                features: ["Spiral binding", "Comb binding", "Perfect finish"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow"
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
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Contact us now for fast and reliable photocopy services</p>
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
