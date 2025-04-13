"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  onRatingChange: (rating: number) => void
  max?: number
  size?: number
  readOnly?: boolean
}

export function StarRating({ 
  rating, 
  onRatingChange, 
  max = 5, 
  size = 24, 
  readOnly = false 
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)

  // Validate rating
  const validRating = Math.min(Math.max(Math.round(rating), 0), max)

  return (
    <div 
      className="flex"
      role="group"
      aria-label={`Rating: ${validRating} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => {
        const value = i + 1
        const filled = readOnly ? value <= validRating : value <= (hoverRating || validRating)
        
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={value === validRating}
            aria-label={`Rate ${value} out of ${max} stars`}
            disabled={readOnly}
            className={`p-0.5 cursor-pointer transition-all disabled:cursor-default ${
              filled ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => {
              if (!readOnly) onRatingChange(value)
            }}
            onMouseEnter={() => {
              if (!readOnly) setHoverRating(value)
            }}
            onMouseLeave={() => {
              if (!readOnly) setHoverRating(0)
            }}
          >
            <Star
              size={size}
              className={`transition-all ${
                filled ? "fill-yellow-400" : "fill-none"
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
