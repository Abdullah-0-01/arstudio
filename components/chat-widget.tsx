"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Printy, your printing assistant! How can I help you today?",
      sender: "bot",
      time: "now",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "What are your photocopy rates?",
    "Passport photo prices?",
    "Do you do plastic coating?",
    "Are you open 24/7?",
    "School copy services?",
    "Pickup and delivery?",
  ]

  const botResponses: { [key: string]: string } = {
    "photocopy rates": "Photocopy rates: Rs. 8 per single side, Rs. 15 per double side. Bulk orders get discounts! 📄",
    "passport photo": "Passport photos: 6 photos for Rs. 150, 12 photos for Rs. 200. All sizes available! 📸",
    "plastic coating": "Yes! We do plastic coating on copies, books, and documents. Perfect for school materials! 🛡️",
    "24/7": "Yes! AR Studio is open 24/7 for your convenience. Call us anytime at 0345-3312908! ⏰",
    "school copy":
      "We specialize in school copy/book plastic coating! We pickup from your home, coat them, and deliver back with full responsibility! 🎒",
    "pickup and delivery":
      "Free pickup & delivery across Karachi! We handle your documents with complete trust and responsibility. WhatsApp us! 🚚",
    "printing rates": "Color printing from Rs. 8 per page, B&W from Rs. 2 per page. Bulk discounts available! 🖨️",
    "same-day delivery":
      "Yes! Same-day delivery across 50+ areas in Karachi. Order before 2 PM for same-day service! 🚀",
    "track my order": "Track your order in real-time using your tracking ID. Check our tracking section above! 📍",
    "areas cover": "We cover 50+ areas in Karachi including Gulshan, Clifton, Defence, Saddar, and many more! 🗺️",
    lamination: "Professional lamination services available for all document sizes. Protect your important papers! 📋",
    binding: "Book binding, spiral binding, and document binding services. Make your documents professional! 📚",
    stationery: "Complete stationery shop - pens, notebooks, files, markers, staplers and more! 📝",
    coating: "Plastic coating for books, copies, certificates, and important documents. Long-lasting protection! 🛡️",
    rates: "Photocopy: Rs.8/15, Passport photos: Rs.150/200, Printing from Rs.2. Call 0345-3312908 for more! 💰",
    contact: "WhatsApp us at 0345-3312908 or visit AR Studio. We're open 24/7 for your convenience! 📞",
    default:
      "Great question! For detailed info, WhatsApp us at 0345-3312908 or visit AR Studio. We're here 24/7 to help! 🤝",
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user" as const,
      time: "now",
    }

    setMessages([...messages, newMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(inputMessage)
      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: "bot" as const,
        time: "now",
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== "default" && lowerMessage.includes(key)) {
        return response
      }
    }
    return botResponses.default
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
    handleSendMessage()
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-20 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="relative rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300"
        >
          {/* 3D Animated Mascot - Printy the Pen */}
          <div className="relative">
            <div className="text-3xl animate-bounce">🖊️</div>
            {/* Notification Badge */}
            {!isOpen && <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>}
          </div>
        </Button>

        {/* Mascot Speech Bubble */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-pulse">
            Hi! Need help? 👋
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 z-50 animate-in slide-in-from-bottom-5">
          <Card className="h-full flex flex-col shadow-2xl border-primary/20">
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🖊️</span>
                </div>
                <div>
                  <h4 className="font-semibold">Printy</h4>
                  <p className="text-xs opacity-90">Your Printing Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                ✕
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.slice(0, 2).map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 bg-transparent"
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm" className="bg-primary hover:bg-primary/90">
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
