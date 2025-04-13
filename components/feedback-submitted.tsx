"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export function FeedbackSubmittedSplash() {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/")
    }, 2000)
    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="mb-6"
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="36" fill="#a78bfa" fillOpacity="0.2"/>
          <motion.path
            d="M22 38L32 48L50 30"
            stroke="#7c3aed"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </svg>
      </motion.div>
      <motion.h2
        className="text-2xl font-bold text-purple-700 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Feedback Submitted!
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Thank you for helping us improve ClientCompass.
      </motion.p>
    </div>
  )
}
