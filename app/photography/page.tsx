"use client"

export default function PhotographyPage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi AR Studio! I need photography services. Please provide details and pricing.")
    window.open(`https://wa.me/923453312908?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Studio</h1>
                <p className="text-sm text-gray-600">Professional Photography Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Open 24/7
              </span>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📸 Professional Photography Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Perfect <span className="text-blue-500">Photos</span> Every Time
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passport photos, CNIC photos, visa photos, and all kinds of professional photography services. Quick
            processing with guaranteed quality.
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Photography Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Passport Photos",
                description: "6 photos for Rs. 150 | 12 photos for Rs. 200",
                icon: "🛂",
                features: ["Standard passport size", "Professional quality", "Quick processing", "Matte finish"],
              },
              {
                title: "CNIC Photos",
                description: "Official CNIC size photos with proper specifications",
                icon: "🆔",
                features: ["Correct dimensions", "White background", "Sharp quality", "Fast delivery"],
              },
              {
                title: "Visa Photos",
                description: "International visa photos for all countries",
                icon: "✈️",
                features: ["Country specific sizes", "Professional lighting", "High resolution", "Multiple copies"],
              },
              {
                title: "ID Card Photos",
                description: "Employee ID, student ID, and membership photos",
                icon: "🎫",
                features: ["Custom sizes", "Professional look", "Bulk orders", "Same day service"],
              },
              {
                title: "Certificate Photos",
                description: "Academic and professional certificate photos",
                icon: "🎓",
                features: ["Formal attire", "Professional background", "High quality print", "Multiple formats"],
              },
              {
                title: "Custom Photography",
                description: "Any size, any requirement - we deliver",
                icon: "📷",
                features: ["Custom dimensions", "Special requirements", "Professional editing", "Quick turnaround"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-400 to-teal-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Professional Photos?</h2>
          <p className="text-xl text-white/90 mb-8">Contact us for all your photography needs</p>
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
