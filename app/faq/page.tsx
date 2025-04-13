"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

// FAQ data structure
const faqs = [
  {
    category: "General",
    questions: [
      {
        id: "what-is-feedback-compass",
        question: "What is Feedback Compass?",
        answer: "Feedback Compass is a comprehensive feedback management platform designed to help organizations collect, analyze, and act upon client feedback efficiently. Our solution enables businesses to transform feedback into actionable insights that drive improvement and growth."
      },
      {
        id: "who-should-use-feedback-compass",
        question: "Who should use Feedback Compass?",
        answer: "Feedback Compass is ideal for service-based businesses, agencies, consultancies, and organizations of all sizes that value client feedback and are committed to continuous improvement. If you work with clients and want to enhance your service delivery based on their input, our platform is designed for you."
      },
      {
        id: "getting-started",
        question: "How do I get started with Feedback Compass?",
        answer: "Getting started is simple! Sign up for an account, configure your feedback forms to match your branding, share the forms with your clients, and start collecting valuable insights. Our onboarding team will guide you through the process and help you customize the platform to meet your specific needs."
      }
    ]
  },
  {
    category: "Platform Features",
    questions: [
      {
        id: "key-features",
        question: "What are the key features of Feedback Compass?",
        answer: "Feedback Compass offers customizable feedback forms, real-time analytics dashboard, automated response workflows, sentiment analysis, trend identification, and comprehensive reporting. Our platform also provides team collaboration tools, integration capabilities with popular CRMs, and mobile access."
      },
      {
        id: "feedback-collection-methods",
        question: "What methods can I use to collect feedback?",
        answer: "Feedback Compass supports multiple collection methods including email surveys, embedded website forms, QR code-based feedback, SMS surveys, and in-app feedback. You can choose the methods that work best for your client interactions."
      },
      {
        id: "reporting-capabilities",
        question: "What reporting capabilities does Feedback Compass offer?",
        answer: "Our platform provides comprehensive reporting including overall satisfaction scores, trend analysis, feedback volume metrics, response rates, and custom reports. You can filter data by client, project, team member, and time period to gain targeted insights."
      }
    ]
  },
  {
    category: "Data & Security",
    questions: [
      {
        id: "data-security",
        question: "How does Feedback Compass ensure data security?",
        answer: "We implement industry-standard security measures including encryption, secure authentication protocols, regular security audits, and compliance with privacy regulations. Your data and your clients' feedback are protected with the highest standards of security."
      },
      {
        id: "data-ownership",
        question: "Who owns the feedback data collected through your platform?",
        answer: "You retain full ownership of all feedback data collected through our platform. We act as a processor of this information and will never sell or share your data with third parties without your explicit permission."
      },
      {
        id: "data-export",
        question: "Can I export my feedback data?",
        answer: "Yes, Feedback Compass allows you to export your data in multiple formats including CSV, Excel, PDF, and JSON. This gives you the flexibility to use your data in other systems or for custom analysis as needed."
      }
    ]
  },
  {
    category: "Pricing & Support",
    questions: [
      {
        id: "pricing-plans",
        question: "What pricing plans does Feedback Compass offer?",
        answer: "We offer flexible pricing tiers designed to accommodate businesses of all sizes. Our Starter, Professional, and Enterprise plans vary based on features, feedback volume, and support level. Custom pricing is available for organizations with specific requirements."
      },
      {
        id: "free-trial",
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial with full access to all features in our Professional plan. This allows you to experience the platform's capabilities and determine if it's the right fit for your organization before committing."
      },
      {
        id: "support-options",
        question: "What support options are available?",
        answer: "All customers receive standard email support. Professional and Enterprise plans include priority support, dedicated customer success managers, and training sessions. We also offer comprehensive documentation, video tutorials, and a knowledge base for self-service support."
      }
    ]
  },
  {
    category: "Integration & Customization",
    questions: [
      {
        id: "integrations",
        question: "What integrations does Feedback Compass support?",
        answer: "Feedback Compass integrates with popular CRM systems, project management tools, communication platforms, and business intelligence software. Key integrations include Salesforce, HubSpot, Slack, Microsoft Teams, Jira, Asana, and Zapier for custom workflows."
      },
      {
        id: "customization-options",
        question: "Can I customize the feedback forms to match my brand?",
        answer: "Absolutely! You can fully customize feedback forms with your logo, brand colors, custom questions, and rating scales. Our Enterprise plan also offers white-labeling options for a seamless brand experience."
      },
      {
        id: "custom-development",
        question: "Do you offer custom development for specific requirements?",
        answer: "Yes, our Enterprise plan includes options for custom development to meet specific organizational needs. Our team can work with you to develop tailored features, custom integrations, or specialized workflows."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter FAQs based on search term
  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find answers to common questions about Feedback Compass
        </motion.p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for questions..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* FAQ Accordions */}
      {filteredFAQs.length > 0 ? (
        filteredFAQs.map((category, index) => (
          <Card key={category.category} className={index < filteredFAQs.length - 1 ? "mb-8" : ""}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
              <CardDescription>
                {category.category === "General" && "Basic information about Feedback Compass"}
                {category.category === "Platform Features" && "Learn about our platform capabilities"}
                {category.category === "Data & Security" && "How we protect your information"}
                {category.category === "Pricing & Support" && "Plans, pricing, and support options"}
                {category.category === "Integration & Customization" && "Connect and customize your experience"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-muted-foreground mb-4">No results found for "{searchTerm}"</p>
            <p className="text-sm">Try a different search term or browse the categories</p>
          </CardContent>
        </Card>
      )}

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help. Reach out to us for personalized assistance.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}