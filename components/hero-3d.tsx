"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Hero3D() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const startDemo = (demoType: string) => {
    setActiveDemo(demoType)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  return (
    <div className="relative">
      {/* 3D Workspace Container */}
      <div className="bg-gradient-to-br from-card to-muted rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Pakistani Pattern Overlay */}
        <div className="absolute inset-0 pakistani-pattern opacity-10"></div>

        {/* 3D Workspace Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
          {/* Photocopy Machine */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`relative cursor-pointer transition-all duration-500 ${
                activeDemo === "photocopy" ? "scale-110" : "hover:scale-105"
              }`}
              onClick={() => startDemo("photocopy")}
            >
              <div className="w-32 h-40 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-lg relative float-animation">
                {/* Machine Body */}
                <div className="absolute top-2 left-2 right-2 h-6 bg-primary rounded opacity-80"></div>
                <div className="absolute top-10 left-4 right-4 h-20 bg-white rounded border-2 border-gray-400">
                  {/* Paper Animation */}
                  {activeDemo === "photocopy" && (
                    <div className="absolute inset-1 bg-blue-100 rounded print-animation"></div>
                  )}
                </div>
                {/* Output Tray */}
                <div className="absolute bottom-2 left-2 right-2 h-8 bg-gray-200 rounded">
                  {isAnimating && activeDemo === "photocopy" && (
                    <div className="w-full h-1 bg-primary rounded animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 text-center">Photocopying</h3>
            <p className="text-sm text-muted-foreground text-center">Click to see magic!</p>
          </div>

          {/* Printer */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`relative cursor-pointer transition-all duration-500 ${
                activeDemo === "printer" ? "scale-110" : "hover:scale-105"
              }`}
              onClick={() => startDemo("printer")}
            >
              <div className="w-36 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg relative float-animation">
                {/* Printer Body */}
                <div className="absolute top-1 left-2 right-2 h-4 bg-secondary rounded opacity-90"></div>
                <div className="absolute top-6 left-1 right-1 bottom-4 bg-gray-700 rounded">
                  {/* Paper Output */}
                  {activeDemo === "printer" && (
                    <div className="absolute -bottom-2 left-2 right-2 h-6 bg-white rounded shadow print-animation">
                      <div className="w-full h-1 bg-primary mt-1 animate-pulse"></div>
                    </div>
                  )}
                </div>
                {/* Status Light */}
                <div
                  className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                    isAnimating && activeDemo === "printer" ? "bg-green-400 animate-pulse" : "bg-gray-500"
                  }`}
                ></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 text-center">High-Tech Printing</h3>
            <p className="text-sm text-muted-foreground text-center">Professional quality</p>
          </div>

          {/* Stationery Shelf */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`relative cursor-pointer transition-all duration-500 ${
                activeDemo === "stationery" ? "scale-110" : "hover:scale-105"
              }`}
              onClick={() => startDemo("stationery")}
            >
              <div className="w-32 h-36 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg relative float-animation border-2 border-amber-300">
                {/* Shelf Items */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="w-3 h-12 bg-blue-500 rounded-sm"></div>
                  <div className="w-3 h-10 bg-red-500 rounded-sm"></div>
                  <div className="w-3 h-14 bg-green-500 rounded-sm"></div>
                </div>
                <div className="absolute top-16 left-2 right-2 flex gap-1 flex-wrap">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-2 right-2 h-8 bg-gray-300 rounded flex items-center justify-center">
                  <div className="text-xs font-bold text-gray-600">FILES</div>
                </div>
                {/* Sparkle Effect */}
                {activeDemo === "stationery" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl animate-spin">✨</div>
                  </div>
                )}
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4 text-center">Stationery Shop</h3>
            <p className="text-sm text-muted-foreground text-center">Everything you need</p>
          </div>
        </div>

        {/* Interactive Demo Status */}
        {activeDemo && (
          <div className="mt-8 text-center">
            <Card className="inline-block px-6 py-3 bg-primary/10 border-primary/20">
              <p className="text-primary font-medium">
                {activeDemo === "photocopy" && "📄 Photocopying in progress..."}
                {activeDemo === "printer" && "🖨️ High-quality printing..."}
                {activeDemo === "stationery" && "📚 Browsing stationery collection..."}
              </p>
            </Card>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => startDemo("photocopy")}>
            Try Photocopy Demo
          </Button>
          <Button size="lg" variant="outline" onClick={() => startDemo("printer")}>
            See Printing Process
          </Button>
        </div>
      </div>
    </div>
  )
}
