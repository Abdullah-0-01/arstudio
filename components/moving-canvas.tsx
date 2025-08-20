"use client"

import { useEffect, useState } from "react"

export default function MovingCanvas() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Background Elements */}
      <div className="absolute w-full h-full opacity-5" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Floating Papers */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-10 bg-primary rounded-sm shadow-lg float-animation"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}

        {/* Floating Stationery Items */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`pen-${i}`}
            className="absolute w-1 h-12 bg-secondary rounded-full float-animation"
            style={{
              right: `${5 + i * 20}%`,
              top: `${10 + i * 25}%`,
              animationDelay: `${i * 0.7}s`,
              transform: `rotate(${45 + i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Pakistani Pattern Background */}
      <div
        className="absolute inset-0 pakistani-pattern opacity-3"
        style={{ transform: `translateX(${scrollY * 0.05}px)` }}
      />
    </div>
  )
}
