"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
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
          About Feedback Compass
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Guiding organizations to excellence through meaningful client feedback
        </motion.p>
      </div>

      {/* Our Story */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl">Our Story</CardTitle>
          <CardDescription>How Feedback Compass came to be</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Founded in 2023, Feedback Compass emerged from a simple observation: organizations were 
                struggling to collect, manage, and act upon client feedback effectively. Despite the 
                critical importance of client satisfaction, many businesses lacked the proper tools 
                to harness these valuable insights.
              </p>
              <p className="mb-4">
                Our founder, having experienced this challenge firsthand as a consultant, set out to create 
                a solution that would transform how organizations approach feedback - not as an 
                afterthought, but as a strategic compass guiding their improvement journey.
              </p>
              <p>
                Today, Feedback Compass serves clients across industries, from small businesses to 
                enterprise organizations, all united by a commitment to client-centered growth and 
                continuous improvement.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image 
                src="/placeholder.jpg" 
                alt="Feedback Compass team" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Our Mission & Values */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl">Our Mission & Values</CardTitle>
          <CardDescription>What drives us forward</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4">Mission</h3>
            <p className="text-lg">
              To empower organizations with the insights they need to create exceptional experiences, 
              foster deeper client relationships, and drive sustainable growth.
            </p>
          </div>

          <h3 className="text-2xl font-medium mb-6">Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Client-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We believe in putting clients first in everything we do, just as we help our users do the same.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We practice what we preach by constantly refining our platform based on user feedback.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Data-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We believe in making decisions based on meaningful data, not assumptions.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We foster honest communication and build trust through clarity and openness.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Simplicity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We make the complex simple, ensuring our tools are accessible to everyone.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We constantly explore new ways to deliver more value to our users.</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Our Team */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl">Our Team</CardTitle>
          <CardDescription>The people behind Feedback Compass</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Sarah Johnson" 
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium">Sarah Johnson</h3>
              <p className="text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-sm">
                With over 15 years in customer experience management, Sarah leads our vision to transform how organizations utilize feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Michael Chen" 
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium">Michael Chen</h3>
              <p className="text-muted-foreground mb-2">CTO</p>
              <p className="text-sm">
                Michael brings extensive technical expertise to our platform, ensuring it's robust, secure, and always evolving.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image 
                  src="/placeholder-user.jpg" 
                  alt="Elena Rodriguez" 
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium">Elena Rodriguez</h3>
              <p className="text-muted-foreground mb-2">Head of Customer Success</p>
              <p className="text-sm">
                Elena ensures our clients get maximum value from our platform, leading our dedicated customer success team.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Why Choose Feedback Compass?</CardTitle>
          <CardDescription>What sets us apart</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Purpose-Built Platform</h3>
              <p className="mb-6">
                Our platform is specifically designed for client feedback management, with features tailored to the unique needs of service-based businesses.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Actionable Insights</h3>
              <p className="mb-6">
                We don't just collect data—we help you turn it into clear, actionable insights that drive measurable improvements.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Continuous Innovation</h3>
              <p>
                Our platform evolves constantly, with new features and improvements based directly on user feedback and industry best practices.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Dedicated Support</h3>
              <p className="mb-6">
                Our customer success team provides personalized support to ensure you get maximum value from our platform.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Data Security</h3>
              <p className="mb-6">
                We implement robust security measures to protect your valuable client feedback data.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Client-Centered Approach</h3>
              <p>
                Everything we do is designed to help you create better experiences for your clients, fostering loyalty and growth.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}