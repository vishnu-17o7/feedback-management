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
                src="/image.jpg" 
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
          <div className="grid md:grid-cols-1 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image 
                  src="/image.jpg" 
                  alt="Vishnu V" 
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium">Vishnu V</h3>
              <p className="text-muted-foreground mb-2">AI & ML Specialist, Founder</p>
              <p className="text-sm mb-4">
                Based in Coimbatore, Vishnu brings expertise in deep learning, data analysis, and software development. 
                With a passion for building AI-driven solutions, he leads our platform development with a focus on 
                predictive analytics, automation, and intelligent systems.
              </p>
              
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/vishnu-17o7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a href="https://linkedin.com/in/vishnu-17o7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                
                <a href="https://linktr.ee/vishnu17.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486 0 .648.533 1.176 1.178 1.176.323 0 .645-.08.888-.323l6.39-6.396-6.39-6.397c-.243-.242-.565-.323-.888-.323-.645 0-1.178.53-1.178 1.177 0 .162 0 .324.08.486l5.421 5.057-5.421 5.057zm11.004-11.949v17.766c0 1.295-.566 2.456-1.464 3.27a4.654 4.654 0 01-3.249 1.28h-9.6c-1.21 0-2.4-.486-3.248-1.28a4.727 4.727 0 01-1.464-3.27V3.117c0-1.295.566-2.457 1.464-3.27A4.653 4.653 0 014.644.567h9.6c1.21 0 2.4.485 3.249 1.28a4.727 4.727 0 011.464 3.27z" />
                  </svg>
                </a>
                
                <a href="mailto:vishnu.17.offcl@gmail.com" className="text-gray-600 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
                
                <a href="tel:+919500673878" className="text-gray-600 hover:text-purple-700 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Education & Expertise</h4>
                <p className="text-sm mb-2">
                  <span className="font-medium">Coimbatore Institute of Technology</span><br/>
                  M.Sc. Integrated in AI & Machine Learning (2022-2027)<br/>
                  CGPA: 8.556/10.0 (up to V Semester)
                </p>
                <h4 className="font-medium text-gray-900 mb-2">Skills</h4>
                <p className="text-sm">
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">Python</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">Java</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">React JS</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">TailwindCSS</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">NodeJS</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">MySQL</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">MongoDB</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">AWS</span>
                  <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">TensorFlow</span>
                </p>
              </div>
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