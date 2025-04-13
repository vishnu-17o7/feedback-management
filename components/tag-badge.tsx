import { cn } from "@/lib/utils"

interface TagBadgeProps {
  tag: string
  className?: string
}

const tagColors: Record<string, { bg: string; text: string; label: string }> = {
  communication: { bg: "bg-blue-100", text: "text-blue-800", label: "Communication" },
  quality: { bg: "bg-green-100", text: "text-green-800", label: "Quality" },
  punctuality: { bg: "bg-purple-100", text: "text-purple-800", label: "Punctuality" },
  value: { bg: "bg-amber-100", text: "text-amber-800", label: "Value for Money" },
  support: { bg: "bg-rose-100", text: "text-rose-800", label: "Support" },
  default: { bg: "bg-gray-100", text: "text-gray-800", label: "Unknown Tag" },
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  const tagName = tag?.toLowerCase() ?? ""
  const { bg, text, label } = tagColors[tagName] || tagColors.default

  return (
    <span
      role="status"
      aria-label={`Tag: ${label}`}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        bg,
        text,
        className
      )}
    >
      {label}
    </span>
  )
}
