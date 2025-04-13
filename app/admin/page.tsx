"use client"

import { useState, useEffect, useMemo } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/star-rating"
import { TagBadge } from "@/components/tag-badge"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Check, Filter, Search } from "lucide-react"
import {
  type Client,
  type Feedback,
  type Project,
  getClients,
  getFeedback,
  getProjects,
  updateFeedbackReviewStatus,
  ensureDummyClients,
  ensureDummyProjects,
} from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

// Helper function to parse tags
function getTagsArray(tags: string | string[] | null | undefined): string[] {
  try {
    if (Array.isArray(tags)) return tags;
    if (!tags) return [];
    return tags.split(',').map(tag => tag.trim()).filter(Boolean);
  } catch (error) {
    console.error("Error parsing tags:", error, "Tags value:", tags);
    return [];
  }
}

export default function AdminPage() {
  const { toast } = useToast()
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [filteredFeedback, setFilteredFeedback] = useState<Feedback[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Filter states
  const [projectFilter, setProjectFilter] = useState<string>("")
  const [clientFilter, setClientFilter] = useState<string>("")
  const [ratingFilter, setRatingFilter] = useState<string>("")
  const [tagFilter, setTagFilter] = useState<string>("")
  const [reviewedFilter, setReviewedFilter] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("")

  // Stats
  const [projectStats, setProjectStats] = useState<Record<string, number>>({})
  const [clientStats, setClientStats] = useState<Record<string, number>>({})

  // Memoized calculations
  const averageRating = useMemo(() => {
    if (!feedback.length) return 0
    const total = feedback.reduce((acc, curr) => acc + curr.rating, 0)
    return Number((total / feedback.length).toFixed(1))
  }, [feedback])

  const adoreScore = useMemo(() => {
    try {
      if (!feedback.length) return 0
      const weightedScore = averageRating * 1.2 // Apply Adore Score weighting
      return Number(weightedScore.toFixed(1))
    } catch (error) {
      console.error("Error calculating Adore Score:", error)
      return 0
    }
  }, [feedback, averageRating])

  const chartData = useMemo(() => {
    try {
      const monthlyData: Record<string, {total: number; count: number}> = {}
      feedback.forEach(item => {
        const date = new Date(item.created_at)
        const month = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`
        if (!monthlyData[month]) {
          monthlyData[month] = {total: 0, count: 0}
        }
        monthlyData[month].total += item.rating * 1.2 // Apply Adore Score weighting
        monthlyData[month].count++
      })

      return Object.entries(monthlyData)
        .map(([month, {total, count}]) => ({
          month,
          score: Number((total / count).toFixed(1))
        }))
        .sort((a, b) => a.month.localeCompare(b.month))
    } catch (error) {
      console.error("Error calculating chart data:", error)
      return []
    }
  }, [feedback])

  // Load data from Supabase with improved error handling
  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      try {
        // Ensure dummy clients exist
        await ensureDummyClients();
        await ensureDummyProjects();
        
        const results = await Promise.allSettled([
          getFeedback(),
          getProjects(),
          getClients(),
        ])

        // Check for any rejected promises
        const errors = results
          .filter((result): result is PromiseRejectedResult => result.status === 'rejected')
          .map(result => result.reason)

        if (errors.length > 0) {
          console.error("Errors loading data:", errors)
          throw new Error("Failed to load some data")
        }

        // All promises were fulfilled, we can safely cast
        const [feedbackData, projectsData, clientsData] = results.map(
          (result) => (result as PromiseFulfilledResult<any>).value
        )

        setFeedback(feedbackData)
        setFilteredFeedback(feedbackData)
        setProjects(projectsData)
        setClients(clientsData)
      } catch (error) {
        console.error("Error loading data:", error)
        toast({
          title: "Error",
          description: error instanceof Error 
            ? error.message 
            : "Failed to load data. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [toast])

  // Calculate average ratings
  useEffect(() => {
    const projectRatings: Record<string, number[]> = {}
    const clientRatings: Record<string, number[]> = {}

    feedback.forEach((item) => {
      // Project ratings
      if (!projectRatings[item.project_id]) {
        projectRatings[item.project_id] = []
      }
      projectRatings[item.project_id].push(item.rating)

      // Client ratings
      if (!clientRatings[item.client_id]) {
        clientRatings[item.client_id] = []
      }
      clientRatings[item.client_id].push(item.rating)
    })

    // Calculate averages
    const projectAverages: Record<string, number> = {}
    Object.entries(projectRatings).forEach(([id, ratings]) => {
      const sum = ratings.reduce((acc, curr) => acc + curr, 0)
      projectAverages[id] = Number.parseFloat((sum / ratings.length).toFixed(1))
    })

    const clientAverages: Record<string, number> = {}
    Object.entries(clientRatings).forEach(([id, ratings]) => {
      const sum = ratings.reduce((acc, curr) => acc + curr, 0)
      clientAverages[id] = Number.parseFloat((sum / ratings.length).toFixed(1))
    })

    setProjectStats(projectAverages)
    setClientStats(clientAverages)
  }, [feedback])

  // Apply filters
  useEffect(() => {
    let result = [...feedback]

    if (projectFilter && projectFilter !== "all") {
      result = result.filter((item) => item.project_id === projectFilter)
    }

    if (clientFilter && clientFilter !== "all") {
      result = result.filter((item) => item.client_id === clientFilter)
    }

    if (ratingFilter && ratingFilter !== "all") {
      const rating = Number.parseInt(ratingFilter)
      result = result.filter((item) => item.rating === rating)
    }

    if (tagFilter && tagFilter !== "all") {
      result = result.filter((item) => {
        const tagsArray = getTagsArray(item.tags);
        return tagsArray.includes(tagFilter);
      })
    }

    if (reviewedFilter === "reviewed") {
      result = result.filter((item) => item.reviewed)
    } else if (reviewedFilter === "unreviewed") {
      result = result.filter((item) => !item.reviewed)
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (item) =>
          item.comments.toLowerCase().includes(term) ||
          projects
            .find((p) => p.id === item.project_id)
            ?.name.toLowerCase()
            .includes(term) ||
          clients
            .find((c) => c.id === item.client_id)
            ?.name.toLowerCase()
            .includes(term),
      )
    }

    setFilteredFeedback(result)
  }, [feedback, projectFilter, clientFilter, ratingFilter, tagFilter, reviewedFilter, searchTerm, projects, clients])

  // Toggle reviewed status
  const toggleReviewed = async (id: string, currentStatus: boolean) => {
    const newStatus = !currentStatus
    const success = await updateFeedbackReviewStatus(id, newStatus)

    if (success) {
      setFeedback((prev) => prev.map((item) => (item.id === id ? { ...item, reviewed: newStatus } : item)))

      toast({
        title: newStatus ? "Marked as reviewed" : "Marked as not reviewed",
        description: "Feedback status updated successfully",
      })
    } else {
      toast({
        title: "Error",
        description: "Failed to update feedback status",
        variant: "destructive",
      })
    }
  }

  // Reset filters
  const resetFilters = () => {
    setProjectFilter("")
    setClientFilter("")
    setRatingFilter("")
    setTagFilter("")
    setReviewedFilter("")
    setSearchTerm("")
  }

  // Get project name by id
  const getProjectName = (id: string) => {
    return projects.find((p) => p.id === id)?.name || "Unknown Project"
  }

  // Get client name by id
  const getClientName = (id: string) => {
    return clients.find((c) => c.id === id)?.name || "Unknown Client"
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center h-64">
          <div>
            <LoadingSpinner />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Feedback Management</h1>
          <p className="text-muted-foreground">Review and manage client feedback</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search feedback..."
              className="pl-8 w-[200px] md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" onClick={resetFilters} title="Reset filters">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* Adore Score Chart */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-5">
          <CardHeader>
            <CardTitle>Adore Score Trend</CardTitle>
            <CardDescription>Average score over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(month) => month.split('-')[1]} 
                  />
                  <YAxis 
                    domain={[0, 5]} 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}`, 'Adore Score']}
                    labelFormatter={(month) => `Month: ${month}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary) / 0.2)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedback.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                {feedback.length > 0 ? averageRating.toFixed(1) : "N/A"}
              </div>
              {feedback.length > 0 && (
                <StarRating
                  rating={Math.round(averageRating)}
                  onRatingChange={() => {}}
                  readOnly
                  size={16}
                />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Adore Score</CardTitle>
            <CardDescription className="text-xs">Weighted average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {feedback.length > 0 ? adoreScore.toFixed(1) : "N/A"}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Reviewed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedback.filter((item) => item.reviewed).length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedback.filter((item) => !item.reviewed).length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Filter feedback by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="project-filter">Project</Label>
              <Select value={projectFilter} onValueChange={setProjectFilter}>
                <SelectTrigger id="project-filter">
                  <SelectValue placeholder="All Projects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name} ({projectStats[project.id] ? `★ ${projectStats[project.id]}` : "No ratings"})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="client-filter">Client</Label>
              <Select value={clientFilter} onValueChange={setClientFilter}>
                <SelectTrigger id="client-filter">
                  <SelectValue placeholder="All Clients" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Clients</SelectItem>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name} ({clientStats[client.id] ? `★ ${clientStats[client.id]}` : "No ratings"})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating-filter">Rating</Label>
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger id="rating-filter">
                  <SelectValue placeholder="Any Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Rating</SelectItem>
                  <SelectItem value="5">★★★★★ (5)</SelectItem>
                  <SelectItem value="4">★★★★☆ (4)</SelectItem>
                  <SelectItem value="3">★★★☆☆ (3)</SelectItem>
                  <SelectItem value="2">★★☆☆☆ (2)</SelectItem>
                  <SelectItem value="1">★☆☆☆☆ (1)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tag-filter">Tag</Label>
              <Select value={tagFilter} onValueChange={setTagFilter}>
                <SelectTrigger id="tag-filter">
                  <SelectValue placeholder="Any Tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Tag</SelectItem>
                  {[
                    { id: "communication", label: "Communication" },
                    { id: "quality", label: "Quality" },
                    { id: "punctuality", label: "Punctuality" },
                    { id: "value", label: "Value for Money" },
                    { id: "support", label: "Support" },
                  ].map((tag) => (
                    <SelectItem key={tag.id} value={tag.id}>
                      {tag.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reviewed-filter">Status</Label>
              <Select value={reviewedFilter} onValueChange={setReviewedFilter}>
                <SelectTrigger id="reviewed-filter">
                  <SelectValue placeholder="Any Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Status</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="unreviewed">Pending Review</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedback.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-10">
              <p className="text-muted-foreground mb-2">No feedback matches your filters</p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredFeedback.map((item) => (
            <Card key={item.id} className={item.reviewed ? "border-green-200" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{getProjectName(item.project_id)}</CardTitle>
                    <CardDescription>{getClientName(item.client_id)}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={item.rating} onRatingChange={() => {}} readOnly />
                    <Button
                      variant="outline"
                      size="sm"
                      className={`h-8 ${item.reviewed ? "bg-green-50" : ""}`}
                      onClick={() => toggleReviewed(item.id, item.reviewed)}
                    >
                      {item.reviewed ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          Reviewed
                        </>
                      ) : (
                        "Mark as Reviewed"
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{item.comments}</p>
                <div className="flex flex-wrap gap-2">
                  {getTagsArray(item.tags).map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-4">
                  Submitted on {new Date(item.created_at).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
