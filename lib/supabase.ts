import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Type definitions for our database tables
export type Project = {
  id: string
  name: string
  description?: string
  tools?: string
  created_at?: string
}

export type Client = {
  id: string
  name: string
  created_at?: string
}

export type Feedback = {
  id: string
  project_id: string
  client_id: string
  rating: number
  comments: string
  tags: string
  reviewed: boolean
  created_at: string
}

// Convert string tags to array for internal use
function parseTagsToArray(tags: string | null): string[] {
  try {
    if (!tags) return [];
    return tags.split(',').map((tag: string) => tag.trim()).filter(Boolean);
  } catch (error) {
    console.error("Error parsing tags:", error, "Tags value:", tags);
    return [];
  }
}

// Convert array tags to string for database storage
function formatTagsToString(tags: string[]): string {
  return tags.join(',');
}

// Custom error class for database operations
export class DatabaseError extends Error {
  constructor(message: string, public originalError: any) {
    super(message)
    
    // Ensure proper prototype chain
    Object.setPrototypeOf(this, DatabaseError.prototype)
    
    this.name = "DatabaseError"
  }
}

// Database functions with improved error handling
export async function getProjects(): Promise<Project[]> {
  try {
    // Check if supabase client is initialized properly
    if (!supabase) {
      console.error("Supabase client not initialized");
      return [];
    }

    const { data, error } = await supabase
      .from("feedback_project_projects")
      .select("*")
      .order("name")

    if (error) {
      console.error("Supabase error fetching projects:", error);
      return [];
    }
    
    return data || []
  } catch (error) {
    console.error("Unexpected error in getProjects:", error);
    return [];
  }
}

export async function getClients(): Promise<Client[]> {
  try {
    // Check if supabase client is initialized properly
    if (!supabase) {
      console.error("Supabase client not initialized");
      return [];
    }

    const { data, error } = await supabase
      .from("feedback_project_clients")
      .select("*")
      .order("name");

    if (error) {
      console.error("Supabase error fetching clients:", error);
      // Return empty array instead of throwing an error
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error("Unexpected error in getClients:", error);
    // Return empty array instead of throwing an error
    return [];
  }
}

export async function getFeedback(): Promise<Feedback[]> {
  try {
    // Check if supabase client is initialized properly
    if (!supabase) {
      console.error("Supabase client not initialized");
      return [];
    }

    const { data, error } = await supabase
      .from("feedback_project_feedback")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error fetching feedback:", error);
      return [];
    }

    if (!data) return [];

    // Process the data to convert tags from string to array for internal use
    try {
      const processedData = data.map(item => {
        // Log for debugging
        console.log("Processing feedback item:", item.id, "Tags:", item.tags);
        
        return {
          ...item,
          // Parse tags but keep the original if parsing fails
          tags: item.tags || ''
        };
      });
      
      return processedData;
    } catch (processError) {
      console.error("Error processing feedback data:", processError);
      // Return the original data if processing fails
      return data;
    }
  } catch (error) {
    console.error("Unexpected error in getFeedback:", error);
    return [];
  }
}

export async function submitFeedback(feedback: Omit<Feedback, "id" | "created_at"> | any): Promise<boolean> {
  try {
    // Check if supabase client is initialized properly
    if (!supabase) {
      console.error("Supabase client not initialized");
      return false;
    }

    // Ensure we have all required fields
    if (!feedback.project_id || !feedback.client_id || !feedback.rating || !feedback.comments) {
      console.error("Missing required fields:", feedback);
      return false;
    }

    // Format tags properly for PostgreSQL array
    let tagsArray: string[] = [];
    
    // Convert any tag format to array
    if (typeof feedback.tags === 'string') {
      // If it's a non-empty string, split it
      if (feedback.tags.trim()) {
        tagsArray = (feedback.tags as string).split(',').map((tag: string) => tag.trim()).filter(Boolean);
      }
    } else if (Array.isArray(feedback.tags)) {
      // If it's already an array, use it
      tagsArray = feedback.tags.filter(Boolean);
    }
    
    // Format as PostgreSQL array string - this is the key fix
    const formattedTags = tagsArray.length > 0 
      ? `{${tagsArray.join(',')}}` 
      : null;
    
    console.log("Formatted tags for PostgreSQL:", formattedTags);

    // Prepare data for insertion
    const dataToInsert = {
      project_id: feedback.project_id,
      client_id: feedback.client_id,
      rating: feedback.rating,
      comments: feedback.comments,
      tags: formattedTags, // Use PostgreSQL array format
      reviewed: feedback.reviewed || false
    };

    console.log("Submitting feedback data:", dataToInsert);

    // Add more detailed debug info
    console.log(`Inserting into table: feedback_project_feedback`);
    console.log(`Supabase URL: ${supabaseUrl ? "configured" : "missing"}`);
    
    const { data, error } = await supabase
      .from("feedback_project_feedback")
      .insert([dataToInsert])
      .select();

    if (error) {
      console.error("Supabase error submitting feedback:", error);
      console.error("Error details:", JSON.stringify(error));
      return false;
    }
    
    console.log("Feedback submitted successfully:", data);
    return true;
  } catch (error) {
    console.error("Unexpected error in submitFeedback:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return false;
  }
}

export async function updateFeedbackReviewStatus(id: string, reviewed: boolean): Promise<boolean> {
  try {
    // Check if supabase client is initialized properly
    if (!supabase) {
      console.error("Supabase client not initialized");
      return false;
    }

    const { error } = await supabase
      .from("feedback_project_feedback")
      .update({ reviewed })
      .eq("id", id)

    if (error) {
      console.error("Supabase error updating feedback status:", error);
      return false;
    }
    
    return true
  } catch (error) {
    console.error("Unexpected error in updateFeedbackReviewStatus:", error);
    return false;
  }
}

// Function to insert dummy clients if none exist
export async function ensureDummyClients(): Promise<void> {
  try {
    // First check if any clients exist
    const { data: existingClients, error: checkError } = await supabase
      .from("feedback_project_clients")
      .select("id")
      .limit(1);
    
    if (checkError) {
      console.error("Error checking clients:", checkError);
      
      // If the error is about the table not existing, create it
      if (checkError.message?.includes("does not exist")) {
        console.log("Attempting to create clients table...");
        await createClientsTable();
      }
      return;
    }
    
    // If clients already exist, do nothing
    if (existingClients && existingClients.length > 0) {
      console.log("Clients already exist, skipping dummy data creation");
      return;
    }
    
    console.log("No clients found, inserting dummy clients...");
    
    // Prepare dummy client data
    const dummyClients = [
      { name: "Acme Corporation" },
      { name: "TechFlow Solutions" },
      { name: "Globex Enterprises" },
      { name: "Initech Technologies" },
      { name: "Stark Industries" },
      { name: "Wayne Enterprises" },
      { name: "Umbrella Corporation" },
      { name: "Soylent Corp" },
      { name: "Cyberdyne Systems" },
      { name: "Massive Dynamic" }
    ];
    
    // Insert dummy clients
    const { error: insertError } = await supabase
      .from("feedback_project_clients")
      .insert(dummyClients);
    
    if (insertError) {
      console.error("Error inserting dummy clients:", insertError);
      return;
    }
    
    console.log("Successfully inserted dummy clients");
  } catch (error) {
    console.error("Unexpected error in ensureDummyClients:", error);
  }
}

// Create clients table if it doesn't exist
async function createClientsTable(): Promise<void> {
  try {
    console.log("Creating clients table based on schema...");
    
    // Try to create the clients table that matches the schema
    const { error } = await supabase.from('feedback_project_clients').insert([
      { id: "11111111-1111-1111-1111-111111111111", name: "Acme Corporation" }
    ]).select();
    
    // If we got an error that's not about duplicate entry, the table likely doesn't exist
    if (error && !error.message?.includes('duplicate')) {
      console.error("Failed to insert into clients table:", error);
      
      // Since direct SQL isn't available, we'll use our dummy clients with REST API
      await createDummyClientsUsingRESTAPI();
    } else {
      console.log("Clients table exists or was successfully created");
    }
  } catch (error) {
    console.error("Unexpected error in createClientsTable:", error);
    await createDummyClientsUsingRESTAPI();
  }
}

// Fallback method to create clients using REST API
async function createDummyClientsUsingRESTAPI(): Promise<void> {
  try {
    // First, try to create the clients if they don't exist yet
    const dummyClients = [
      { id: "11111111-1111-1111-1111-111111111111", name: "Acme Corporation" },
      { id: "22222222-2222-2222-2222-222222222222", name: "TechFlow Solutions" },
      { id: "33333333-3333-3333-3333-333333333333", name: "Globex Enterprises" },
      { id: "44444444-4444-4444-4444-444444444444", name: "Initech Technologies" },
      { id: "55555555-5555-5555-5555-555555555555", name: "Stark Industries" }
    ];
    
    // Attempt to insert the clients with fixed IDs
    const { error } = await supabase
      .from("feedback_project_clients")
      .upsert(dummyClients, { onConflict: 'id' });
    
    if (error) {
      console.error("Error creating dummy clients:", error);
    } else {
      console.log("Successfully created dummy clients using REST API");
    }
  } catch (error) {
    console.error("Failed to create dummy clients using REST API:", error);
  }
}

// Function to insert dummy projects if none exist
export async function ensureDummyProjects(): Promise<void> {
  try {
    // First check if any projects exist
    const { data: existingProjects, error: checkError } = await supabase
      .from("feedback_project_projects")
      .select("id")
      .limit(1);
    
    if (checkError) {
      console.error("Error checking projects:", checkError);
      
      // If the error is about the table not existing, create it
      if (checkError.message?.includes("does not exist")) {
        console.log("Attempting to create projects table...");
        await createProjectsTable();
      }
      return;
    }
    
    // If projects already exist, do nothing
    if (existingProjects && existingProjects.length > 0) {
      console.log("Projects already exist, skipping dummy data creation");
      return;
    }
    
    console.log("No projects found, inserting dummy projects...");
    
    // Prepare dummy project data
    const dummyProjects = [
      { 
        name: "Website Redesign", 
        description: "Complete redesign of corporate website",
        tools: "Figma, React, NextJS"
      },
      { 
        name: "Mobile App", 
        description: "Customer-facing mobile application",
        tools: "React Native, Firebase"
      },
      { 
        name: "E-commerce Platform", 
        description: "Online shopping platform with payment integration",
        tools: "Vue, Stripe, Tailwind CSS"
      },
      { 
        name: "Internal Dashboard", 
        description: "Employee management dashboard",
        tools: "Angular, Chart.js, Bootstrap"
      },
      { 
        name: "API Integration", 
        description: "Third-party API integration project",
        tools: "Node.js, Express, Swagger"
      }
    ];
    
    // Insert dummy projects
    const { error: insertError } = await supabase
      .from("feedback_project_projects")
      .insert(dummyProjects);
    
    if (insertError) {
      console.error("Error inserting dummy projects:", insertError);
      return;
    }
    
    console.log("Successfully inserted dummy projects");
  } catch (error) {
    console.error("Unexpected error in ensureDummyProjects:", error);
  }
}

// Create projects table if it doesn't exist
async function createProjectsTable(): Promise<void> {
  try {
    console.log("Creating projects table based on schema...");
    
    // Try to create the projects table that matches the schema
    const { error } = await supabase.from('feedback_project_projects').insert([
      { 
        id: "11111111-1111-1111-1111-111111111112", 
        name: "Website Redesign", 
        description: "Complete redesign of corporate website",
        tools: "Figma, React, NextJS"
      }
    ]).select();
    
    // If we got an error that's not about duplicate entry, the table likely doesn't exist
    if (error && !error.message?.includes('duplicate')) {
      console.error("Failed to insert into projects table:", error);
      
      // Since direct SQL isn't available, we'll use our dummy projects with REST API
      await createDummyProjectsUsingRESTAPI();
    } else {
      console.log("Projects table exists or was successfully created");
    }
  } catch (error) {
    console.error("Unexpected error in createProjectsTable:", error);
    await createDummyProjectsUsingRESTAPI();
  }
}

// Fallback method to create projects using REST API
async function createDummyProjectsUsingRESTAPI(): Promise<void> {
  try {
    // First, try to create the projects if they don't exist yet
    const dummyProjects = [
      { 
        id: "11111111-1111-1111-1111-111111111112", 
        name: "Website Redesign", 
        description: "Complete redesign of corporate website",
        tools: "Figma, React, NextJS"
      },
      { 
        id: "22222222-2222-2222-2222-222222222223", 
        name: "Mobile App", 
        description: "Customer-facing mobile application",
        tools: "React Native, Firebase"
      },
      { 
        id: "33333333-3333-3333-3333-333333333334", 
        name: "E-commerce Platform", 
        description: "Online shopping platform with payment integration",
        tools: "Vue, Stripe, Tailwind CSS"
      }
    ];
    
    // Attempt to insert the projects with fixed IDs
    const { error } = await supabase
      .from("feedback_project_projects")
      .upsert(dummyProjects, { onConflict: 'id' });
    
    if (error) {
      console.error("Error creating dummy projects:", error);
    } else {
      console.log("Successfully created dummy projects using REST API");
    }
  } catch (error) {
    console.error("Failed to create dummy projects using REST API:", error);
  }
}
