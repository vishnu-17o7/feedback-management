# Feedback Compass

![Feedback Compass Logo](public/feedback_compass_logo.png)

Collect, organize, and analyze client feedback to improve your services and build stronger relationships. **Feedback Compass** is a modern, full-stack platform for gathering actionable insights from your clients, featuring a beautiful UI, analytics, and seamless project/client management.

---

## Features

- **Submit Feedback:** Clients can easily submit feedback with ratings, comments, and tags.
- **Admin Dashboard:** Review, manage, and analyze all feedback in one place.
- **Analytics & Statistics:** Visualize client satisfaction, feedback volume, and improvement metrics.
- **Project & Client Management:** Organize feedback by project and client for targeted insights.
- **Responsive UI:** Built with Next.js, React, and Tailwind CSS for a fast, modern experience.
- **Supabase Backend:** Secure, scalable, and easy to set up.
- **Extensible UI:** Uses Radix UI, Framer Motion, and more for a rich user experience.

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) (React 19, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (PostgreSQL backend)
- [Radix UI](https://www.radix-ui.com/), [Zod](https://zod.dev/), [Framer Motion](https://www.framer.com/motion/), [Recharts](https://recharts.org/), and more

---

## Database Schema

- **Projects:** Stores project details (name, description, tools).
- **Clients:** Stores client information.
- **Feedback:** Links projects and clients, includes rating (1–5), comments, tags, reviewed status, and timestamps.

See [`supabase-schema.sql`](supabase-schema.sql) for full schema and example data.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone <repo-url>
cd feedback-management
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Example values are provided in the `.env.local` file.

### Database Setup

- Create a new [Supabase](https://supabase.com/) project.
- Run the SQL in [`supabase-schema.sql`](supabase-schema.sql) using the Supabase SQL editor to set up tables, indexes, and policies.

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/                # Next.js app directory (pages, routes)
components/         # Reusable UI components
hooks/              # Custom React hooks
lib/                # Utility libraries (e.g., Supabase client)
public/             # Static assets (logo, images)
styles/             # Global styles
supabase-schema.sql # Database schema
```

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Lint code

---

## Contributing

Contributions are welcome! Please open issues and pull requests for bug fixes, new features, or improvements. Follow the existing code style and include clear commit messages.

---

## License

[MIT](LICENSE) (or your preferred license)

---

## Contact

- **Email:** vishnu.17.offcl@gmail.com
- **Location:** Coimbatore

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)
- And all other open-source contributors

---

*Empower your team with actionable feedback and drive continuous improvement with Feedback Compass!*
