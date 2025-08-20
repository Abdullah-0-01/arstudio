"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ServiceShowcase() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedStationery, setSelectedStationery] = useState<string | null>(null)

  const startDemo = async (serviceType: string) => {
    setActiveDemo(serviceType)
    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false)
    }, 3000)
  }

  const services = [
    {
      title: "Photocopying & Scanning",
      description: "High-quality copies and digital scans",
      icon: "📄",
      color: "bg-primary",
      features: ["Black & White", "Color Copies", "Bulk Orders", "Same Day Service"],
      demoType: "photocopy",
    },
    {
      title: "Professional Printing",
      description: "Documents, photos, and marketing materials",
      icon: "🖨️",
      color: "bg-secondary",
      features: ["HD Quality", "Multiple Formats", "Fast Turnaround", "Bulk Discounts"],
      demoType: "printing",
    },
    {
      title: "Lamination & Coating",
      description: "Protect your important documents",
      icon: "🛡️",
      color: "bg-accent",
      features: ["Waterproof", "Tear Resistant", "Various Sizes", "Matte & Glossy"],
      demoType: "lamination",
    },
    {
      title: "Passport Photos & Photography",
      description: "Professional passport photos and all kinds of photography",
      icon: "📸",
      color: "bg-primary",
      features: ["Passport Size", "ID Photos", "Visa Photos", "All Photo Types"],
      demoType: "photography",
    },
    {
      title: "Stationery Store",
      description: "Complete office and school supplies",
      icon: "📚",
      color: "bg-secondary",
      features: ["Pens & Pencils", "Notebooks", "Files & Folders", "Art Supplies"],
      demoType: "stationery",
    },
  ]

  return (
    <section className="relative z-10 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need Under One Roof</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple photocopies to professional printing and complete stationery solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 slide-in group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive 3D Demo Area */}
              <div className="bg-muted/30 rounded-lg p-6 mb-4 min-h-[200px] relative">
                {service.demoType === "photocopy" && (
                  <PhotocopyDemo isActive={activeDemo === "photocopy"} isProcessing={isProcessing} />
                )}

                {service.demoType === "printing" && (
                  <PrintingDemo isActive={activeDemo === "printing"} isProcessing={isProcessing} />
                )}

                {service.demoType === "lamination" && (
                  <LaminationDemo isActive={activeDemo === "lamination"} isProcessing={isProcessing} />
                )}

                {service.demoType === "stationery" && (
                  <StationeryDemo
                    isActive={activeDemo === "stationery"}
                    selectedItem={selectedStationery}
                    onSelectItem={setSelectedStationery}
                  />
                )}

                {service.demoType === "photography" && (
                  <PhotographyDemo isActive={activeDemo === "photography"} isProcessing={isProcessing} />
                )}
              </div>

              <Button
                onClick={() => startDemo(service.demoType)}
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                disabled={isProcessing && activeDemo === service.demoType}
              >
                {isProcessing && activeDemo === service.demoType ? "Processing..." : "Try Interactive Demo"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhotocopyDemo({ isActive, isProcessing }: { isActive: boolean; isProcessing: boolean }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* Photocopy Machine */}
        <div className="w-40 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-lg relative">
          {/* Document Input Slot */}
          <div className="absolute top-2 left-4 right-4 h-1 bg-gray-600 rounded"></div>

          {/* Document being inserted */}
          {isActive && (
            <div
              className={`absolute top-0 left-6 w-8 h-12 bg-white rounded-sm shadow-md transition-all duration-2000 ${
                isProcessing ? "translate-y-4 opacity-50" : "translate-y-0"
              }`}
            >
              <div className="w-full h-1 bg-blue-500 mt-1"></div>
              <div className="w-3/4 h-1 bg-gray-300 mt-1"></div>
              <div className="w-full h-1 bg-gray-300 mt-1"></div>
            </div>
          )}

          {/* Screen */}
          <div className="absolute top-4 left-2 w-8 h-6 bg-green-400 rounded border border-gray-600 flex items-center justify-center">
            <div className={`text-xs font-bold ${isProcessing ? "animate-pulse" : ""}`}>
              {isProcessing ? "ON" : "OFF"}
            </div>
          </div>

          {/* Output Tray */}
          <div className="absolute bottom-2 left-2 right-2 h-6 bg-gray-200 rounded relative">
            {isActive && isProcessing && (
              <div className="absolute -top-2 left-2 w-8 h-12 bg-white rounded-sm shadow-md print-animation">
                <div className="w-full h-1 bg-blue-500 mt-1"></div>
                <div className="w-3/4 h-1 bg-gray-300 mt-1"></div>
                <div className="w-full h-1 bg-gray-300 mt-1"></div>
              </div>
            )}
          </div>
        </div>

        {isActive && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-primary font-medium">
            {isProcessing ? "Copying document..." : "Insert document above"}
          </div>
        )}
      </div>
    </div>
  )
}

function PrintingDemo({ isActive, isProcessing }: { isActive: boolean; isProcessing: boolean }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* Printer */}
        <div className="w-44 h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg relative">
          {/* Control Panel */}
          <div className="absolute top-2 left-2 right-2 h-6 bg-secondary rounded opacity-90 flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full ${isProcessing ? "bg-green-400 animate-pulse" : "bg-gray-500"}`}
            ></div>
          </div>

          {/* Paper Tray */}
          <div className="absolute top-10 left-2 right-2 bottom-6 bg-gray-700 rounded relative">
            {/* Ink Cartridges */}
            <div className="absolute top-1 left-2 flex gap-1">
              <div className="w-2 h-3 bg-cyan-400 rounded-sm"></div>
              <div className="w-2 h-3 bg-yellow-400 rounded-sm"></div>
              <div className="w-2 h-3 bg-red-400 rounded-sm"></div>
              <div className="w-2 h-3 bg-gray-900 rounded-sm"></div>
            </div>
          </div>

          {/* Paper Output */}
          {isActive && isProcessing && (
            <div className="absolute -bottom-4 left-4 right-4 h-8 bg-white rounded shadow-lg print-animation">
              <div className="w-full h-1 bg-primary mt-1 animate-pulse"></div>
              <div className="w-3/4 h-1 bg-gray-300 mt-1"></div>
              <div className="w-full h-1 bg-gray-300 mt-1"></div>
              <div className="w-1/2 h-1 bg-gray-300 mt-1"></div>
            </div>
          )}
        </div>

        {isActive && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-secondary font-medium">
            {isProcessing ? "Printing in HD quality..." : "Ready to print"}
          </div>
        )}
      </div>
    </div>
  )
}

function LaminationDemo({ isActive, isProcessing }: { isActive: boolean; isProcessing: boolean }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* Lamination Machine */}
        <div className="w-48 h-24 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg shadow-lg relative">
          {/* Rollers */}
          <div className="absolute top-2 left-4 right-4 flex justify-between">
            <div className={`w-4 h-4 bg-gray-600 rounded-full ${isProcessing ? "animate-spin" : ""}`}></div>
            <div className={`w-4 h-4 bg-gray-600 rounded-full ${isProcessing ? "animate-spin" : ""}`}></div>
          </div>

          {/* Document being laminated */}
          {isActive && (
            <div
              className={`absolute top-8 left-8 w-12 h-8 bg-white rounded-sm shadow-md transition-all duration-3000 ${
                isProcessing ? "translate-x-16 bg-gradient-to-r from-white to-blue-100" : "translate-x-0"
              }`}
            >
              <div className="w-full h-1 bg-gray-300 mt-1"></div>
              <div className="w-3/4 h-1 bg-gray-300 mt-1"></div>
            </div>
          )}

          {/* Heat Indicator */}
          <div className="absolute bottom-2 right-2 flex gap-1">
            <div className={`w-1 h-3 rounded-full ${isProcessing ? "bg-red-400 animate-pulse" : "bg-gray-400"}`}></div>
            <div
              className={`w-1 h-3 rounded-full ${isProcessing ? "bg-orange-400 animate-pulse" : "bg-gray-400"}`}
            ></div>
            <div
              className={`w-1 h-3 rounded-full ${isProcessing ? "bg-yellow-400 animate-pulse" : "bg-gray-400"}`}
            ></div>
          </div>
        </div>

        {isActive && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-accent font-medium">
            {isProcessing ? "Applying protective coating..." : "Insert document to laminate"}
          </div>
        )}
      </div>
    </div>
  )
}

function StationeryDemo({
  isActive,
  selectedItem,
  onSelectItem,
}: {
  isActive: boolean
  selectedItem: string | null
  onSelectItem: (item: string) => void
}) {
  const stationeryItems = [
    { name: "Blue Pen", color: "bg-blue-500", type: "pen", price: "Rs. 25" },
    { name: "Red Pen", color: "bg-red-500", type: "pen", price: "Rs. 25" },
    { name: "Notebook", color: "bg-yellow-400", type: "book", price: "Rs. 150" },
    { name: "File Folder", color: "bg-green-500", type: "folder", price: "Rs. 80" },
    { name: "Stapler", color: "bg-gray-600", type: "stapler", price: "Rs. 300" },
    { name: "Marker", color: "bg-purple-500", type: "marker", price: "Rs. 45" },
  ]

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* 3D Shelf */}
        <div className="w-52 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg relative border-2 border-amber-300">
          {/* Shelf Dividers */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-amber-400"></div>
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-amber-400"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-amber-400"></div>

          {/* Stationery Items Grid */}
          <div className="absolute inset-2 grid grid-cols-3 grid-rows-2 gap-1">
            {stationeryItems.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-200 flex items-center justify-center ${
                  selectedItem === item.name ? "scale-110 z-10" : "hover:scale-105"
                }`}
                onClick={() => onSelectItem(item.name)}
              >
                {item.type === "pen" && <div className={`w-1 h-8 ${item.color} rounded-full shadow-sm`}></div>}
                {item.type === "book" && (
                  <div className={`w-6 h-8 ${item.color} rounded-sm shadow-sm border border-yellow-600`}></div>
                )}
                {item.type === "folder" && (
                  <div className={`w-7 h-6 ${item.color} rounded-sm shadow-sm relative`}>
                    <div className="absolute top-0 left-1 w-2 h-1 bg-green-600 rounded-t"></div>
                  </div>
                )}
                {item.type === "stapler" && <div className={`w-6 h-3 ${item.color} rounded shadow-sm`}></div>}
                {item.type === "marker" && (
                  <div className={`w-2 h-7 ${item.color} rounded-full shadow-sm`}>
                    <div className="w-full h-1 bg-white rounded-full mt-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Selection Highlight */}
          {selectedItem && <div className="absolute inset-0 border-2 border-primary rounded-lg animate-pulse"></div>}
        </div>

        {selectedItem && (
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {selectedItem} - {stationeryItems.find((item) => item.name === selectedItem)?.price}
            </div>
          </div>
        )}

        {isActive && !selectedItem && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-primary font-medium">
            Click items to view details
          </div>
        )}
      </div>
    </div>
  )
}

function PhotographyDemo({ isActive, isProcessing }: { isActive: boolean; isProcessing: boolean }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        {/* Camera Setup */}
        <div className="w-44 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg relative">
          {/* Camera Body */}
          <div className="absolute top-4 left-6 w-8 h-6 bg-gray-700 rounded border border-gray-600">
            {/* Lens */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-600">
              <div
                className={`w-full h-full rounded-full ${isProcessing ? "bg-blue-400 animate-pulse" : "bg-gray-800"}`}
              ></div>
            </div>
          </div>

          {/* Flash */}
          <div
            className={`absolute top-2 right-4 w-3 h-2 rounded ${isProcessing ? "bg-yellow-300 animate-pulse" : "bg-gray-600"}`}
          ></div>

          {/* Background Setup */}
          <div className="absolute bottom-2 left-2 right-2 h-16 bg-white rounded border border-gray-300 relative">
            {/* Person Silhouette for Passport Photo */}
            {isActive && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-full">
                {/* Head */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
            )}
          </div>

          {/* Photo Output */}
          {isActive && isProcessing && (
            <div className="absolute -bottom-6 left-8 w-12 h-16 bg-white rounded shadow-lg border border-gray-200 print-animation">
              <div className="w-full h-3/4 bg-gradient-to-t from-gray-200 to-gray-100 rounded-t"></div>
              <div className="w-full h-1/4 bg-white flex items-center justify-center">
                <div className="text-xs text-gray-600">📸</div>
              </div>
            </div>
          )}
        </div>

        {isActive && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-primary font-medium">
            {isProcessing ? "Taking passport photo..." : "Professional photo setup ready"}
          </div>
        )}
      </div>
    </div>
  )
}
