"use client"

export default function StationeryPage() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi AR Studio! I need stationery items. Please provide details and pricing.")
    window.open(`https://wa.me/923453312908?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-indigo-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Studio</h1>
                <p className="text-sm text-gray-600">Complete Stationery Shop</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                📞 Open 24/7
              </span>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
          <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📚 Complete Stationery Shop
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            All Your <span className="text-indigo-500">Stationery</span> Needs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From pens and notebooks to files and office supplies - we have everything you need for school, office, and
            home.
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

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Writing Instruments",
                description: "Pens, pencils, markers, and highlighters",
                icon: "✏️",
                items: ["Ball point pens", "Gel pens", "Pencils", "Markers", "Highlighters", "Fountain pens"],
              },
              {
                category: "Notebooks & Copies",
                description: "All types of notebooks and exercise books",
                icon: "📓",
                items: ["Exercise copies", "Notebooks", "Registers", "Diaries", "Spiral notebooks", "Graph copies"],
              },
              {
                category: "Files & Folders",
                description: "Organization solutions for documents",
                icon: "📁",
                items: ["Ring files", "Clip files", "Folders", "Document bags", "Expanding files", "Box files"],
              },
              {
                category: "Office Supplies",
                description: "Essential office and business items",
                icon: "📎",
                items: ["Staplers", "Paper clips", "Rubber bands", "Pins", "Tape", "Glue sticks"],
              },
              {
                category: "Art & Craft",
                description: "Creative supplies for students and artists",
                icon: "🎨",
                items: ["Color pencils", "Crayons", "Paint sets", "Brushes", "Craft paper", "Scissors"],
              },
              {
                category: "School Essentials",
                description: "Everything students need for school",
                icon: "🎒",
                items: ["Geometry sets", "Calculators", "Erasers", "Sharpeners", "Rulers", "Protractors"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.category}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-blue-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Services</h2>
            <p className="text-xl text-gray-600">Additional services to make your life easier</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bulk Orders",
                description: "Special discounts for schools and offices",
                icon: "📦",
                features: ["Volume discounts", "School supply packages", "Office starter kits", "Custom orders"],
              },
              {
                title: "Home Delivery",
                description: "Get your stationery delivered to your doorstep",
                icon: "🚚",
                features: ["Free delivery on bulk orders", "Same day delivery", "Safe packaging", "24/7 availability"],
              },
              {
                title: "Custom Printing",
                description: "Personalized stationery with your name or logo",
                icon: "🖨️",
                features: ["Custom notebooks", "Branded pens", "Personalized files", "Logo printing"],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-400 to-blue-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Stationery Items?</h2>
          <p className="text-xl text-white/90 mb-8">Contact us for all your stationery needs</p>
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
