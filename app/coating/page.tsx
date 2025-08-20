"use client"

export default function CoatingPage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi AR Studio! I need plastic coating/lamination services. Please provide details and pricing.",
    )
    window.open(`https://wa.me/923453312908?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Studio</h1>
                <p className="text-sm text-gray-600">Plastic Coating & Lamination</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Open 24/7
              </span>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛡️ Plastic Coating & Lamination Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Protect Your <span className="text-green-500">Documents</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional plastic coating and lamination services for documents, certificates, school copies, books, and
            important papers. Long-lasting protection guaranteed.
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Coating & Lamination Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Document Lamination",
                description: "Protect important documents with clear plastic coating",
                icon: "📋",
                features: ["Crystal clear finish", "Waterproof protection", "Tear resistant", "Long lasting"],
              },
              {
                title: "School Copies & Books",
                description: "Special coating for student notebooks and textbooks",
                icon: "📚",
                features: ["Pickup from home", "Safe handling", "Quick processing", "Home delivery"],
              },
              {
                title: "Certificate Protection",
                description: "Professional lamination for certificates and awards",
                icon: "🏆",
                features: ["Premium quality", "No bubbles", "Perfect edges", "Professional finish"],
              },
              {
                title: "ID Card Lamination",
                description: "Durable coating for ID cards and membership cards",
                icon: "🆔",
                features: ["Pocket size", "Flexible coating", "Clear visibility", "Scratch resistant"],
              },
              {
                title: "Menu & Price Lists",
                description: "Restaurant menus and business price lists protection",
                icon: "📄",
                features: ["Food safe coating", "Easy to clean", "Professional look", "Bulk discounts"],
              },
              {
                title: "Custom Lamination",
                description: "Any size, any document - we protect it all",
                icon: "⚙️",
                features: ["Custom sizes", "Special requirements", "Thick or thin coating", "Expert handling"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow"
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

      {/* Special Section for School Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">School Copy & Book Coating</h2>
            <p className="text-xl text-gray-600">
              Special service for students - we pickup, coat, and deliver with full trust
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Home Pickup</h3>
                <p className="text-gray-600">We collect your copies and books from your home safely</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Coating</h3>
                <p className="text-gray-600">High quality plastic coating for long-lasting protection</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Home Delivery</h3>
                <p className="text-gray-600">Ready books delivered back to your home with full trust</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-medium text-green-600 mb-4">
                "Hamari Zimmedari Hai" - Your books are safe with us!
              </p>
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
              >
                <span>📱</span>
                <span>Book School Service</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400 to-emerald-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Protect Your Documents Today</h2>
          <p className="text-xl text-white/90 mb-8">Contact us for professional coating and lamination services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppContact}
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>WhatsApp: 0345-3312908</span>
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
