import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, BarChart2, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero Section - Already has min-h-screen */}
      <HeroSection />

      {/* Section 2: How It Works - Adding h-screen */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/50 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader>
              <div className="mb-4 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-purple-700" />
              </div>
              <CardTitle>1. Submit Feedback</CardTitle>
              <CardDescription>Share your thoughts on our projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Use our simple feedback form to rate your experience and provide valuable insights that help us improve.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader>
              <div className="mb-4 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-purple-700" />
              </div>
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

          <Card className="bg-white/50 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition duration-300">
            <CardHeader>
              <div className="mb-4 bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-700" />
              </div>
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

        <div className="flex justify-center mt-12">
          <Link href="/services" passHref>
            <Button variant="outline" className="group">
              Learn more about our process
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex justify-center mt-16">
          <ChevronDown className="h-6 w-6 animate-bounce text-gray-400" />
        </div>
      </div>

      {/* Section 3: New Testimonials & Stats Section */}
      <div className="h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted by Organizations Worldwide</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Join hundreds of companies that use Feedback Compass to gather actionable insights and improve client satisfaction.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-700">98%</p>
              <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-700">10k+</p>
              <p className="text-gray-600 mt-2">Feedback Responses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-700">500+</p>
              <p className="text-gray-600 mt-2">Active Organizations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-700">43%</p>
              <p className="text-gray-600 mt-2">Average Improvement</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">"</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src="/image.jpg"
                  alt="Testimonial author"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              
              <div>
                <p className="italic text-gray-700 text-lg mb-4">
                  "Feedback Compass transformed how we gather and utilize client feedback. The actionable 
                  insights helped us identify pain points and implement targeted improvements. The result was 
                  a dramatic 43% increase in client satisfaction scores in just three months."
                </p>
                
                <div>
                  <p className="font-semibold text-gray-900">Hari Prasad</p>
                  <p className="text-gray-600">Director of Client Services, TechSolutions Inc.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/about" passHref>
              <Button className="bg-purple-700 hover:bg-purple-800">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Footer with Navigation Links */}
      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Feedback Compass</h3>
              <p className="text-sm text-gray-600 mb-4">
                Collect, organize, and analyze client feedback to improve your services and build stronger relationships.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-purple-700 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-purple-700 transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-purple-700 transition-colors">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-purple-700 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Features</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/feedback/submit" className="text-gray-600 hover:text-purple-700 transition-colors">Submit Feedback</Link>
                </li>
                <li>
                  <Link href="/admin" className="text-gray-600 hover:text-purple-700 transition-colors">Admin Dashboard</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-purple-700 transition-colors">Analytics</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-purple-700 transition-colors">Integrations</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Coimbatore</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-600">hello@feedbackcompass.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Feedback Compass. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
