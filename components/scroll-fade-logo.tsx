"use client"

import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"

export function ScrollFadeLogo() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position
      const scrollY = window.scrollY
      
      // Calculate opacity based on scroll position
      // Logo starts fading at 50px and completely disappears at 150px
      const newOpacity = Math.max(0, 1 - (scrollY / 150))
      
      setOpacity(newOpacity)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-opacity duration-200"
      style={{ opacity }}
    >
      <Logo />
    </div>
  )
}
