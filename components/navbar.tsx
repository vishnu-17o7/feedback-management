"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { useScroll, useTransform, useMotionTemplate } from "framer-motion"
import { motion } from "framer-motion"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
})

export function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 150], [1, 0.85])
  const blur = useTransform(scrollY, [0, 150], [8, 4])
  const blurFilter = useMotionTemplate`blur(${blur}px)`
  
  return (
    <motion.nav
      style={{
        opacity,
        backdropFilter: blurFilter,
        WebkitBackdropFilter: blurFilter,
      }}
      className="fixed top-0 z-50 w-full bg-purple-50/90 border-b border-purple-200 shadow-sm transition-all"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/feedback_compass_logo.png"
              alt="Feedback Compass Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
              style={{ background: "white" }}
            />
            <div className="flex flex-col">
              <span className={`text-xl font-bold text-purple-700 transition-colors duration-300 group-hover:text-purple-900 drop-shadow-lg tracking-wide ${playfair.className}`}>
                ClientCompass
              </span>
              <span className="text-xs text-purple-500 font-light italic -mt-1">Navigating feedback together</span>
            </div>
          </Link>
          <div className="hidden space-x-2 md:flex">
            <Link href="/about" passHref>
              <Button
                variant={pathname === '/about' ? 'default' : 'ghost'}
                className={pathname === '/about' 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-purple-800 hover:bg-purple-100 transition-all"}
              >
                About Us
              </Button>
            </Link>
            <Link href="/services" passHref>
              <Button
                variant={pathname === '/services' ? 'default' : 'ghost'}
                className={pathname === '/services' 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-purple-800 hover:bg-purple-100 transition-all"}
              >
                Services
              </Button>
            </Link>
            <Link href="/faq" passHref>
              <Button
                variant={pathname === '/faq' ? 'default' : 'ghost'}
                className={pathname === '/faq' 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-purple-800 hover:bg-purple-100 transition-all"}
              >
                FAQ
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant={pathname === '/contact' ? 'default' : 'ghost'}
                className={pathname === '/contact' 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-purple-800 hover:bg-purple-100 transition-all"}
              >
                Contact
              </Button>
            </Link>
            <Link href="/feedback/submit" passHref>
              <Button
                variant={pathname === '/feedback/submit' ? 'default' : 'ghost'}
                className={pathname === '/feedback/submit' 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-purple-800 hover:bg-purple-100 transition-all"}
              >
                Submit Feedback
              </Button>
            </Link>
            <Link href="/admin" passHref>
              <Button
                variant={pathname === '/admin' ? 'default' : 'ghost'}
                className={pathname === '/admin' 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "text-purple-800 hover:bg-purple-100 transition-all"}
              >
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}