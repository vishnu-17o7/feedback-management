import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Submit Feedback</CardTitle>
              <CardDescription>Share your thoughts on our projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Use our simple feedback form to rate your experience and provide valuable insights that help us improve.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. We Review</CardTitle>
              <CardDescription>Our team analyzes your feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Every piece of feedback is carefully reviewed by our team to identify areas of improvement and
                excellence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. We Improve</CardTitle>
              <CardDescription>Your feedback drives our growth</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We use your insights to enhance our services, refine our processes, and deliver better results for all
                clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-auto border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Feedback Management Tool. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
