# Accredian Enterprise — Partial Clone

A production-grade Next.js clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with the App Router, Tailwind CSS, and a working lead-capture API route.

---

## 🚀 Live Demo

> Deploy to Vercel — see **Deployment** section below.

---

## 📦 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Google Fonts via `next/font` (Manrope + Playfair Display) |
| API | Next.js Route Handlers (`/api/leads`) |
| Deployment | Vercel |

---

## 🗂️ Project Structure

```
accredian-enterprise/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root layout — fonts, metadata
│   │   ├── page.jsx            # Page composition
│   │   ├── globals.css         # Tailwind + custom design tokens
│   │   └── api/
│   │       └── leads/
│   │           └── route.js    # POST /api/leads — lead capture
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav, active section tracking, mobile menu
│   │   ├── Footer.jsx          # Footer with links and social icons
│   │   └── sections/
│   │       ├── HeroSection.jsx         # Hero with dashboard mockup
│   │       ├── StatsSection.jsx        # Animated count-up stats
│   │       ├── ClientsSection.jsx      # Infinite scrolling client logos
│   │       ├── FeaturesSection.jsx     # 8-feature Accredian Edge grid
│   │       ├── HowItWorksSection.jsx   # 4-step process with connector
│   │       ├── TestimonialsSection.jsx # 3 testimonial cards
│   │       ├── FAQsSection.jsx         # Accordion FAQ
│   │       └── ContactSection.jsx      # Lead capture form + API call
│   └── data/
│       └── mockData.js         # All content data (easy to swap for real API)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Clone / Download

```bash
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

No environment variables required for the base setup.

---

## 🏗️ Approach Taken

### Architecture decisions

**App Router (Next.js 14):** Used the modern `app/` directory with Server Components for layout/page and `'use client'` only where interactivity is needed (Navbar scroll tracking, FAQ accordion, contact form).

**Component decomposition:** Every visible section is its own component under `src/components/sections/`. This makes each section independently testable and reusable.

**Mock data layer:** All content lives in `src/data/mockData.js`. In a real project, this would be replaced by API calls to a CMS or backend — the component interfaces stay identical.

**API route for leads:** `POST /api/leads` validates input, stores in memory (server restart clears), and returns structured JSON. In production, replace the in-memory array with a database write (Prisma + PostgreSQL, for example).

### Design decisions

- **Manrope** font (clean, modern, enterprise-appropriate) + **Playfair Display** as display option
- **Navy + Primary Blue** color scheme matching Accredian's brand
- Animated count-up stats triggered by IntersectionObserver (no external library)
- Infinite CSS marquee for client logos
- Dashboard mockup SVG/div illustration in hero instead of external images
- Mobile-first responsive with Tailwind breakpoints

---

## 🤖 AI Usage Explanation

AI (Claude) was used throughout this project:

| Area | How AI Helped | Manual Improvements |
|------|--------------|---------------------|
| **Project scaffolding** | Generated the full Next.js file structure and component breakdown | Verified App Router compatibility, adjusted imports |
| **Component code** | Generated initial JSX for all 8 sections | Refined animations, fixed Tailwind class conflicts, tuned spacing |
| **API route** | Generated the `/api/leads` route handler with validation | Added proper HTTP status codes, error shape consistency |
| **Tailwind config** | Generated custom theme tokens (colors, animations) | Matched exact brand colors from reference site |
| **Mock data** | Generated realistic content for stats, testimonials, FAQs | Edited copy to match Accredian's actual messaging |
| **CountUp hook** | Generated IntersectionObserver-based counter | Fixed re-trigger bug, tuned easing |
| **README** | AI drafted structure | Verified all commands, added accurate file tree |

**What was built/improved manually:**
- Scroll-spy active link tracking in Navbar
- CSS `@keyframes scroll` for infinite client ticker
- Mobile hamburger animation (CSS transform chaining)
- Form state machine (`idle → loading → success/error`)
- `animationDelay` staggering on How It Works ping circles
- All responsive breakpoint tuning on mobile

---

## ✅ Features Implemented

- [x] Sticky responsive Navbar with scroll-spy active links
- [x] Hero section with animated dashboard mockup
- [x] Animated count-up Stats section (IntersectionObserver)
- [x] Infinite scrolling Clients logo marquee
- [x] 8-feature Accredian Edge grid
- [x] 4-step How It Works with animated step indicators
- [x] 3 Testimonial cards
- [x] Accordion FAQ
- [x] **Lead capture form** (Bonus ✨)
- [x] **`POST /api/leads` API route** (Bonus ✨)
- [x] Fully responsive (mobile + desktop)
- [x] Footer with links and social icons

---

## 🔮 Improvements With More Time

1. **Database integration** — Replace in-memory lead store with Prisma + PostgreSQL (or Supabase)
2. **Email notifications** — Send confirmation email to lead + internal alert via Resend/Nodemailer
3. **CMS integration** — Connect testimonials, FAQs, and features to Contentful or Sanity for non-dev edits
4. **Animation library** — Add Framer Motion for scroll-triggered section reveals
5. **A/B testing** — Test different hero CTAs with Vercel Edge Config
6. **Analytics** — Add Vercel Analytics or PostHog for conversion tracking
7. **SEO** — Dynamic `generateMetadata()` per section, sitemap.xml, robots.txt
8. **Accessibility** — ARIA labels on all interactive elements, keyboard focus rings, skip-to-content
9. **Dark mode** — Tailwind `dark:` variants + `next-themes`
10. **Admin dashboard** — Simple `/admin` page to view submitted leads

---

## 📄 License

MIT — free to use and modify.
