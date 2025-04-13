"use client"

import { motion } from "framer-motion"

export function LoadingSpinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
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
