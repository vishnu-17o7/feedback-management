"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { StarRating } from "@/components/star-rating"
import { useEffect, useState } from "react"
import { type Client, type Project, getClients, getProjects, submitFeedback } from "@/lib/supabase"

// Helper function to convert array to comma-separated string for submission
function formatTagsForSubmission(tags: string[]): string {
  return tags.join(',');
}

const tags = [
  { id: "communication", label: "Communication" },
  { id: "quality", label: "Quality" },
  { id: "punctuality", label: "Punctuality" },
  { id: "value", label: "Value for Money" },
  { id: "support", label: "Support" },
]

// Define the schema with explicit types
const feedbackFormSchema = z.object({
  project_id: z.string({
    required_error: "Please select a project",
  }),
  client_id: z.string({
    required_error: "Please select a client",
  }),
  rating: z.number({
    required_error: "Please provide a rating",
  }).min(1, {
    message: "Rating is required",
  }).max(5),
  comments: z.string({
    required_error: "Please provide your feedback",
  }).min(5, {
    message: "Comments must be at least 5 characters",
  }),
  tags: z.array(z.string()),
});

// Create a type from the schema
type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function FeedbackSubmitPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [projects, setProjects] = useState<Project[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize the form with properly typed values
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      rating: 0,
      comments: "",
      tags: [],
    },
  })

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      try {
        const [projectsData, clientsData] = await Promise.all([getProjects(), getClients()])
        setProjects(projectsData)
        setClients(clientsData)
      } catch (error) {
        console.error("Error loading data:", error)
        toast({
          title: "Error",
          description: "Failed to load projects and clients. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [toast])

  // Use the proper type definition for form values
  const onSubmit = async (values: FeedbackFormValues) => {
    console.log("Form submission values:", values);
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!values.project_id) {
        throw new Error("Project selection is required");
      }
      if (!values.client_id) {
        throw new Error("Client selection is required");
      }
      if (!values.rating || values.rating < 1) {
        throw new Error("Rating is required");
      }
      if (!values.comments || values.comments.trim().length < 5) {
        throw new Error("Comments are required (minimum 5 characters)");
      }

      // Prepare feedback data with proper tag formatting
      const feedbackData = {
        project_id: values.project_id,
        client_id: values.client_id,
        rating: Number(values.rating), // Ensure rating is a number
        comments: values.comments.trim(),
        tags: Array.isArray(values.tags) ? values.tags.join(',') : '',
        reviewed: false
      };
      
      console.log("Submitting feedback data:", feedbackData);
      
      // Make sure the data is properly formed before submitting
      if (!feedbackData.project_id || !feedbackData.client_id || !feedbackData.rating || !feedbackData.comments) {
        console.error("Missing required data before submission:", feedbackData);
        throw new Error("Form validation failed - missing required fields");
      }
      
      // Submit to Supabase
      const result = await submitFeedback(feedbackData);

      if (result) {
        toast({
          title: "Feedback submitted",
          description: "Thank you for your feedback!",
        });

        // Redirect to home page
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="flex items-center justify-center py-10">
            <p>Loading...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Submit Feedback</CardTitle>
          <CardDescription>We value your feedback. Please share your thoughts on our project.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="project_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a project" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {projects.map((project) => (
                            <SelectItem key={project.id} value={project.id}>
                              {project.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="client_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a client" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {clients.map((client) => (
                            <SelectItem key={client.id} value={client.id}>
                              {client.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <StarRating rating={field.value} onRatingChange={field.onChange} />
                    </FormControl>
                    <FormDescription>Rate your overall satisfaction with the project</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please share your detailed feedback about the project..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Tags (Optional)</FormLabel>
                      <FormDescription>Select aspects of the project you'd like to highlight</FormDescription>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {tags.map((tag) => (
                        <FormField
                          key={tag.id}
                          control={form.control}
                          name="tags"
                          render={({ field }) => {
                            return (
                              <FormItem key={tag.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(tag.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...(field.value || []), tag.id])
                                        : field.onChange(field.value?.filter((value) => value !== tag.id))
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{tag.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
