-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop tables if they exist (for clean setup)
DROP TABLE IF EXISTS feedback_project_feedback;
DROP TABLE IF EXISTS feedback_project_clients;
DROP TABLE IF EXISTS feedback_project_projects;

-- Create projects table
CREATE TABLE feedback_project_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  tools TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create clients table
CREATE TABLE feedback_project_clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create feedback table with foreign key relationships
CREATE TABLE feedback_project_feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES feedback_project_projects(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES feedback_project_clients(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comments TEXT NOT NULL,
  tags TEXT,
  reviewed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX feedback_project_id_idx ON feedback_project_feedback(project_id);
CREATE INDEX feedback_client_id_idx ON feedback_project_feedback(client_id);
CREATE INDEX feedback_rating_idx ON feedback_project_feedback(rating);
CREATE INDEX feedback_reviewed_idx ON feedback_project_feedback(reviewed);
CREATE INDEX feedback_created_at_idx ON feedback_project_feedback(created_at);

-- Insert dummy clients
INSERT INTO feedback_project_clients (id, name) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Acme Corporation'),
  ('22222222-2222-2222-2222-222222222222', 'TechFlow Solutions'),
  ('33333333-3333-3333-3333-333333333333', 'Globex Enterprises'),
  ('44444444-4444-4444-4444-444444444444', 'Initech Technologies'),
  ('55555555-5555-5555-5555-555555555555', 'Stark Industries'),
  ('66666666-6666-6666-6666-666666666666', 'Wayne Enterprises'),
  ('77777777-7777-7777-7777-777777777777', 'Umbrella Corporation'),
  ('88888888-8888-8888-8888-888888888888', 'Soylent Corp'),
  ('99999999-9999-9999-9999-999999999999', 'Cyberdyne Systems'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Massive Dynamic');

-- Insert dummy projects
INSERT INTO feedback_project_projects (id, name, description, tools) VALUES
  ('11111111-1111-1111-1111-111111111112', 'Website Redesign', 'Complete redesign of corporate website', 'Figma, React, NextJS'),
  ('22222222-2222-2222-2222-222222222223', 'Mobile App', 'Customer-facing mobile application', 'React Native, Firebase'),
  ('33333333-3333-3333-3333-333333333334', 'E-commerce Platform', 'Online shopping platform with payment integration', 'Vue, Stripe, Tailwind CSS'),
  ('44444444-4444-4444-4444-444444444445', 'Internal Dashboard', 'Employee management dashboard', 'Angular, Chart.js, Bootstrap'),
  ('55555555-5555-5555-5555-555555555556', 'API Integration', 'Third-party API integration project', 'Node.js, Express, Swagger');

-- Insert dummy feedback (with dates spread across the last 3 months for better chart data)
INSERT INTO feedback_project_feedback (project_id, client_id, rating, comments, tags, reviewed, created_at) VALUES
  ('11111111-1111-1111-1111-111111111112', '22222222-2222-2222-2222-222222222222', 5, 'Excellent redesign! The website looks modern and performs great.', 'quality,punctuality', true, NOW() - INTERVAL '3 months'),
  ('22222222-2222-2222-2222-222222222223', '33333333-3333-3333-3333-333333333333', 4, 'The mobile app works well but could use some UI improvements.', 'quality,value', false, NOW() - INTERVAL '2 months 15 days'),
  ('33333333-3333-3333-3333-333333333334', '44444444-4444-4444-4444-444444444444', 5, 'Our sales have increased by 30% since launching the e-commerce platform!', 'quality,value,support', true, NOW() - INTERVAL '2 months'),
  ('44444444-4444-4444-4444-444444444445', '55555555-5555-5555-5555-555555555555', 3, 'The dashboard is functional but lacks some features we discussed.', 'communication', false, NOW() - INTERVAL '1 month 15 days'),
  ('55555555-5555-5555-5555-555555555556', '66666666-6666-6666-6666-666666666666', 2, 'API integration was delayed and documentation was insufficient.', 'punctuality,communication', false, NOW() - INTERVAL '1 month'),
  ('11111111-1111-1111-1111-111111111112', '77777777-7777-7777-7777-777777777777', 5, 'The team was highly responsive and delivered exactly what we wanted.', 'communication,quality', true, NOW() - INTERVAL '20 days'),
  ('22222222-2222-2222-2222-222222222223', '88888888-8888-8888-8888-888888888888', 4, 'Good app but we had some issues with push notifications.', 'support', false, NOW() - INTERVAL '15 days'),
  ('33333333-3333-3333-3333-333333333334', '99999999-9999-9999-9999-999999999999', 5, 'Perfect implementation! Our customers love the new shopping experience.', 'quality,value', true, NOW() - INTERVAL '10 days'),
  ('44444444-4444-4444-4444-444444444445', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 4, 'Dashboard is very useful, though we needed some additional training.', 'support,quality', false, NOW() - INTERVAL '5 days'),
  ('55555555-5555-5555-5555-555555555556', '11111111-1111-1111-1111-111111111111', 3, 'API works as expected but the implementation took longer than planned.', 'punctuality,communication', true, NOW() - INTERVAL '2 days');

-- Create Row Level Security (RLS) policies
ALTER TABLE feedback_project_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback_project_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback_project_feedback ENABLE ROW LEVEL SECURITY;

-- Create policies (assuming public access for this demo)
CREATE POLICY "Allow public read access" ON feedback_project_clients FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON feedback_project_projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON feedback_project_feedback FOR SELECT USING (true);

CREATE POLICY "Allow public insert access" ON feedback_project_clients FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON feedback_project_projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert access" ON feedback_project_feedback FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access" ON feedback_project_clients FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON feedback_project_projects FOR UPDATE USING (true);
CREATE POLICY "Allow public update access" ON feedback_project_feedback FOR UPDATE USING (true);
