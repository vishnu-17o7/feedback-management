"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    interest: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Success response
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you soon.",
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        interest: ""
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          Contact Us
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in touch with our team for inquiries, support, or to schedule a demo
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader className="pb-2">
            <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Phone</CardTitle>
            <CardDescription>Call us directly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">+1 (555) 123-4567</p>
            <p className="text-muted-foreground mt-1">For sales and general inquiries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Email</CardTitle>
            <CardDescription>Send us an email</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">hello@feedbackcompass.com</p>
            <p className="text-muted-foreground mt-1">We'll respond within 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Office</CardTitle>
            <CardDescription>Visit our headquarters</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">123 Feedback Avenue</p>
            <p className="text-muted-foreground mt-1">San Francisco, CA 94103</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Ways to reach our team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Business Hours
                </h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9AM - 6PM PST<br />
                  Saturday: 10AM - 2PM PST<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Support
                </h3>
                <p className="text-muted-foreground">
                  For technical support:<br />
                  support@feedbackcompass.com<br />
                  Or use our help center
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      value={formData.name} 
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email} 
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+1 (555) 123-4567" 
                      value={formData.phone} 
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Your Company, Inc." 
                      value={formData.company} 
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("interest", value)}
                      value={formData.interest}
                    >
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Product Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="How can we help?" 
                      value={formData.subject} 
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us more about your needs..." 
                      className="min-h-[120px]" 
                      value={formData.message} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="mt-6 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree to our <a href="#" className="text-primary">Privacy Policy</a> and 
                consent to Feedback Compass storing your information for contact purposes.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Location Map */}
      <Card className="mb-16 overflow-hidden">
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
          <CardDescription>Visit our headquarters in San Francisco</CardDescription>
        </CardHeader>
        <CardContent className="p-0 h-[400px] relative">
          {/* Placeholder for map - in a real app, you'd use a Maps component */}
          <div className="w-full h-full bg-muted flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/5 z-10"></div>
            <div className="relative z-20 text-center p-6 bg-background/90 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Feedback Compass HQ</h3>
              <p className="text-muted-foreground">
                123 Feedback Avenue<br />
                San Francisco, CA 94103<br />
                United States
              </p>
              <Button variant="outline" className="mt-4" size="sm">
                Get Directions
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Quick answers to common questions about contacting us
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-2">What is the typical response time?</h3>
            <p className="text-muted-foreground">
              We aim to respond to all inquiries within 24 business hours. For urgent matters, 
              please call our support line directly.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">How can I schedule a demo?</h3>
            <p className="text-muted-foreground">
              You can schedule a demo by filling out the contact form and selecting "Product Demo" 
              in the interest field, or by emailing demos@feedbackcompass.com directly.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">Do you offer in-person meetings?</h3>
            <p className="text-muted-foreground">
              Yes, we offer in-person meetings at our San Francisco headquarters for 
              Enterprise clients and potential partners. Virtual meetings are available for all clients.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">Where can I get technical support?</h3>
            <p className="text-muted-foreground">
              Technical support is available through our help center, via email at support@feedbackcompass.com, 
              or by phone during business hours for priority support clients.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="link" className="text-primary" asChild>
            <a href="/faq">View all FAQs</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}