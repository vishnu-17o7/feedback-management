"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { useScroll, useTransform, useMotionTemplate } from "framer-motion"
import { motion } from "framer-motion"

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
      className="fixed top-0 z-50 w-full bg-white/80 border-b border-gray-200 shadow-sm transition-all"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
              ClientCompass
            </span>
          </Link>

          <div className="hidden space-x-2 md:flex">
            <Link href="/feedback/submit" passHref>
              <Button 
                variant={pathname === '/feedback/submit' ? 'default' : 'ghost'} 
                className="text-black hover:bg-gray-100 transition-all"
              >
                Submit Feedback
              </Button>
            </Link>
            <Link href="/admin" passHref>
              <Button 
                variant={pathname === '/admin' ? 'default' : 'ghost'} 
                className="text-black hover:bg-gray-100 transition-all"
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
