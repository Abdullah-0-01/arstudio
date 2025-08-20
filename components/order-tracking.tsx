"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface OrderStatus {
  id: string
  customerName: string
  orderType: string
  currentStep: number
  estimatedTime: string
  steps: {
    name: string
    status: "completed" | "active" | "pending"
    time?: string
    description: string
  }[]
}

export default function OrderTracking() {
  const [trackingId, setTrackingId] = useState("")
  const [currentOrder, setCurrentOrder] = useState<OrderStatus | null>(null)
  const [isTracking, setIsTracking] = useState(false)

  // Demo orders for tracking
  const demoOrders: OrderStatus[] = [
    {
      id: "KPH001",
      customerName: "Ahmed Khan",
      orderType: "Document Printing",
      currentStep: 2,
      estimatedTime: "15 minutes",
      steps: [
        { name: "Order Received", status: "completed", time: "10:30 AM", description: "Your order has been confirmed" },
        { name: "Processing", status: "completed", time: "10:35 AM", description: "Documents are being prepared" },
        { name: "Printing", status: "active", description: "High-quality printing in progress" },
        { name: "Quality Check", status: "pending", description: "Final quality inspection" },
        { name: "Ready for Pickup", status: "pending", description: "Order ready for collection" },
      ],
    },
    {
      id: "KPH002",
      customerName: "Fatima Ali",
      orderType: "Lamination Service",
      currentStep: 3,
      estimatedTime: "8 minutes",
      steps: [
        { name: "Order Received", status: "completed", time: "11:15 AM", description: "Lamination request confirmed" },
        {
          name: "Document Prep",
          status: "completed",
          time: "11:20 AM",
          description: "Documents prepared for lamination",
        },
        { name: "Heating Process", status: "completed", time: "11:25 AM", description: "Lamination machine heated" },
        { name: "Laminating", status: "active", description: "Applying protective coating" },
        { name: "Cooling & Cutting", status: "pending", description: "Final finishing touches" },
        { name: "Ready for Delivery", status: "pending", description: "Ready for pickup/delivery" },
      ],
    },
    {
      id: "KPH003",
      customerName: "Hassan Sheikh",
      orderType: "Bulk Photocopying",
      currentStep: 4,
      estimatedTime: "5 minutes",
      steps: [
        { name: "Order Received", status: "completed", time: "09:45 AM", description: "Bulk copy order confirmed" },
        { name: "Document Sorting", status: "completed", time: "09:50 AM", description: "Documents organized" },
        { name: "Copying Process", status: "completed", time: "10:00 AM", description: "High-speed copying completed" },
        { name: "Collating", status: "completed", time: "10:15 AM", description: "Documents organized and sorted" },
        { name: "Quality Check", status: "active", description: "Final quality inspection" },
        { name: "Packaging", status: "pending", description: "Secure packaging for delivery" },
      ],
    },
  ]

  const handleTrackOrder = () => {
    setIsTracking(true)

    // Simulate API call
    setTimeout(() => {
      const order = demoOrders.find((o) => o.id.toLowerCase() === trackingId.toLowerCase())
      setCurrentOrder(order || null)
      setIsTracking(false)
    }, 1500)
  }

  const getStepIcon = (stepName: string, status: string) => {
    const icons: { [key: string]: string } = {
      "Order Received": "📋",
      Processing: "⚙️",
      "Document Prep": "📄",
      "Document Sorting": "📚",
      Printing: "🖨️",
      "Copying Process": "📄",
      "Heating Process": "🔥",
      Laminating: "🛡️",
      Collating: "📑",
      "Quality Check": "🔍",
      "Cooling & Cutting": "✂️",
      Packaging: "📦",
      "Ready for Pickup": "✅",
      "Ready for Delivery": "🚚",
    }

    return icons[stepName] || "📋"
  }

  return (
    <section className="relative z-10 px-6 py-16 bg-gradient-to-br from-muted/30 to-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">Real-Time Tracking</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Track Your Order Live</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your documents being processed in real-time with our 3D order tracking system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Tracking Input */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Enter Tracking ID</h3>

            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your tracking ID (e.g., KPH001)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleTrackOrder}
                  disabled={!trackingId || isTracking}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isTracking ? "Tracking..." : "Track"}
                </Button>
              </div>

              {/* Demo IDs */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-sm">Try Demo Tracking IDs:</h4>
                <div className="flex flex-wrap gap-2">
                  {demoOrders.map((order) => (
                    <Button
                      key={order.id}
                      variant="outline"
                      size="sm"
                      onClick={() => setTrackingId(order.id)}
                      className="text-xs"
                    >
                      {order.id}
                    </Button>
                  ))}
                </div>
              </div>

              {!currentOrder && !isTracking && trackingId && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">🔍</div>
                  <p className="text-muted-foreground">Order not found. Try one of the demo IDs above.</p>
                </div>
              )}
            </div>
          </Card>

          {/* Live Order Status */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Live Order Updates</h3>

            <div className="space-y-4">
              {demoOrders.slice(0, 3).map((order, index) => (
                <div
                  key={order.id}
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => {
                    setTrackingId(order.id)
                    setCurrentOrder(order)
                  }}
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {order.id.slice(-1)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{order.customerName}</div>
                    <div className="text-xs text-muted-foreground">{order.orderType}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-primary">{order.estimatedTime}</div>
                    <div className="text-xs text-muted-foreground">remaining</div>
                  </div>
                  <div className="text-lg">{getStepIcon(order.steps[order.currentStep].name, "active")}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Detailed Order Tracking */}
        {currentOrder && (
          <Card className="mt-8 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold">Order #{currentOrder.id}</h3>
                <p className="text-muted-foreground">
                  {currentOrder.customerName} • {currentOrder.orderType}
                </p>
              </div>
              <div className="text-right">
                <Badge className="bg-primary text-primary-foreground mb-2">In Progress</Badge>
                <p className="text-sm text-muted-foreground">Est. {currentOrder.estimatedTime} remaining</p>
              </div>
            </div>

            {/* 3D Progress Tracker */}
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                {currentOrder.steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    {/* Step Icon */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                        step.status === "completed"
                          ? "bg-primary text-primary-foreground scale-100"
                          : step.status === "active"
                            ? "bg-secondary text-secondary-foreground scale-110 animate-pulse"
                            : "bg-muted text-muted-foreground scale-90"
                      }`}
                    >
                      {getStepIcon(step.name, step.status)}
                    </div>

                    {/* Step Name */}
                    <div className="mt-2 text-center">
                      <div
                        className={`text-sm font-medium ${
                          step.status === "active"
                            ? "text-secondary"
                            : step.status === "completed"
                              ? "text-primary"
                              : "text-muted-foreground"
                        }`}
                      >
                        {step.name}
                      </div>
                      {step.time && <div className="text-xs text-muted-foreground">{step.time}</div>}
                    </div>

                    {/* Connection Line */}
                    {index < currentOrder.steps.length - 1 && (
                      <div
                        className={`absolute top-8 left-full w-full h-1 -translate-y-1/2 ${
                          index < currentOrder.currentStep ? "bg-primary" : "bg-muted"
                        }`}
                        style={{ width: "calc(100vw / 6)" }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Current Step Details */}
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">
                  {getStepIcon(currentOrder.steps[currentOrder.currentStep].name, "active")}
                </div>
                <h4 className="text-lg font-semibold mb-2">{currentOrder.steps[currentOrder.currentStep].name}</h4>
                <p className="text-muted-foreground mb-4">{currentOrder.steps[currentOrder.currentStep].description}</p>

                {/* Animated Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-4">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 animate-pulse"
                    style={{ width: `${((currentOrder.currentStep + 1) / currentOrder.steps.length) * 100}%` }}
                  />
                </div>

                <div className="flex justify-center gap-4 text-sm">
                  <span className="text-primary font-medium">
                    Step {currentOrder.currentStep + 1} of {currentOrder.steps.length}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-secondary font-medium">{currentOrder.estimatedTime} remaining</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" onClick={() => window.open("https://wa.me/+923453312908", "_blank")}>
                Contact via WhatsApp
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Get SMS Updates</Button>
            </div>
          </Card>
        )}

        {/* Tracking Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-semibold mb-2">Real-Time Updates</h4>
            <p className="text-sm text-muted-foreground">
              Get instant notifications via WhatsApp and SMS as your order progresses
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold mb-2">Accurate Timing</h4>
            <p className="text-sm text-muted-foreground">
              Our AI-powered system provides precise delivery estimates based on current workload
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="font-semibold mb-2">Secure Tracking</h4>
            <p className="text-sm text-muted-foreground">
              Your order information is encrypted and only accessible with your unique tracking ID
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
