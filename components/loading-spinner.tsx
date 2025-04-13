"use client"

import { motion } from "framer-motion"

export function LoadingSpinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.img
        src="/feedback_compass_logo.png"
        alt="Feedback Compass Logo"
        className="w-10 h-10 mb-2 rounded-full shadow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-t-transparent border-white border-opacity-40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          borderTopColor: "#a78bfa", // Tailwind purple-400
        }}
      />
      <span className="mt-4 text-white/80 text-lg font-medium animate-pulse">{label}</span>
    </div>
  )
}
