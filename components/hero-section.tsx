import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-700 opacity-90"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.1),transparent)]"></div>

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Client Feedback <span className="block">That Matters</span>
          </h1>
          <p className="mt-6 text-xl text-white/90 md:text-2xl">
            Collect, organize, and analyze client feedback to improve your services and build stronger relationships.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/feedback/submit" passHref>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                Submit Feedback
              </Button>
            </Link>
            <Link href="/admin" passHref>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
