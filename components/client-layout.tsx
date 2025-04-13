"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "./navbar"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hasNavbar = pathname !== "/"
  return (
    <>
      {hasNavbar && <Navbar />}
      <div className={hasNavbar ? "pt-20 transition-all duration-300" : ""}>
        {children}
      </div>
    </>
  )
}
