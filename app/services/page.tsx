"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, BarChart2, MessageSquare, Zap, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive feedback management solutions tailored to your organization's needs
        </motion.p>
      </div>

      {/* Main Service Areas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-2">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Feedback Collection</CardTitle>
              <CardDescription>Streamlined feedback gathering</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Collect meaningful feedback from your clients through customizable surveys, forms, 
                and automated request workflows. Our intelligent collection methods ensure high response 
                rates and quality insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customizable feedback forms and surveys</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multi-channel collection (email, web, QR codes)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated request scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Response optimization techniques</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-2">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Feedback Analysis</CardTitle>
              <CardDescription>Transform data into insights</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Our powerful analytics engine transforms raw feedback into actionable insights. 
                Identify trends, sentiment patterns, and improvement opportunities with 
                intuitive dashboards and reports.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sentiment analysis and trend identification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom reporting and visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Benchmarking against industry standards</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-2">
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Actionable Workflows</CardTitle>
              <CardDescription>Convert insights to improvements</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Don't just collect feedback—act on it. Our platform helps you create structured 
                workflows to ensure every piece of feedback leads to appropriate actions, 
                closing the loop with clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated response workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Task assignment and tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Client follow-up management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Improvement tracking and validation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Advanced Services */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enhanced solutions for organizations seeking more sophisticated feedback capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-1 border-0 shadow-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background">
            <CardContent className="bg-background p-6 rounded-lg">
              <div className="mb-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Enterprise Solutions</h3>
                <p className="text-muted-foreground">
                  Tailored feedback systems for large organizations with complex requirements
                </p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom implementation and integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced security and compliance features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated support and success manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom development and white-labeling</span>
                </li>
              </ul>
              
              <Link href="/contact" passHref>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="p-1 border-0 shadow-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background">
            <CardContent className="bg-background p-6 rounded-lg">
              <div className="mb-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Consulting Services</h3>
                <p className="text-muted-foreground">
                  Expert guidance to maximize the impact of your feedback program
                </p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Feedback program strategy development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom survey design and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Data analysis and insights workshops</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Change management and implementation</span>
                </li>
              </ul>
              
              <Link href="/contact" passHref>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Story */}
      <Card className="mb-20 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-2 text-sm font-medium text-primary">SUCCESS STORY</div>
            <h3 className="text-2xl font-bold mb-4">
              How TechSolutions improved client satisfaction by 43%
            </h3>
            <p className="mb-6 text-muted-foreground">
              "Feedback Compass transformed how we gather and utilize client feedback. The actionable 
              insights and streamlined workflows helped us identify pain points and implement 
              targeted improvements. The result was a dramatic increase in client satisfaction 
              and a more client-centric approach across our entire organization."
            </p>
            <div>
              <p className="font-medium">David Chen</p>
              <p className="text-sm text-muted-foreground">Director of Client Services, TechSolutions</p>
            </div>
          </div>
          <div className="relative min-h-[300px] bg-muted">
            <Image 
              src="/image.jpg" 
              alt="TechSolutions success story" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Card>

      {/* Pricing Overview */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
              <CardDescription>For small businesses and teams</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Up to 500 feedback responses/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3 feedback form templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Basic analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button variant="outline" className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 -translate-y-1/2 rounded-full">
              MOST POPULAR
            </div>
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">$249</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
              <CardDescription>For growing businesses</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Up to 2,000 feedback responses/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited feedback form templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom branding options</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <div className="mt-4 mb-2">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <CardDescription>For large organizations</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited feedback responses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom implementation and integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced security features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated success manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>White-labeling options</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to transform your feedback process?</h2>
            <p className="text-primary-foreground/80 max-w-xl">
              Start collecting, analyzing, and acting on client feedback with Feedback Compass.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact" passHref>
              <Button variant="secondary" size="lg">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}