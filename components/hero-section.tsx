"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <motion.div 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-700 opacity-90"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <motion.div 
        className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.1),transparent)]"
        animate={{
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
      />

      <div className="container relative mx-auto min-h-screen flex items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center w-full">
          <motion.img
            src="/feedback_compass_logo.png"
            alt="Feedback Compass Logo"
            className="mx-auto mb-6 w-20 h-20 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ClientCompass <motion.span 
              className="block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Feedback That Matters
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-white/90 md:text-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Collect, organize, and analyze client feedback to improve your services and build stronger relationships.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/feedback/submit" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-purple-700 font-bold border border-purple-200 shadow hover:bg-purple-50 transition"
                >
                  Submit Feedback
                </Button>
              </motion.div>
            </Link>
            <Link href="/admin" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-700 text-purple-700 bg-white/80 hover:bg-purple-50 font-bold transition"
                >
                  View Dashboard
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
