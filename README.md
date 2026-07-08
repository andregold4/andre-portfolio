# Andre Goldberg — Personal Website

A minimal, dark-mode personal website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (scroll-reveal animations)
- **Lucide Icons**

## Project Structure

```
app/
  layout.tsx      — Root layout with fonts + metadata
  page.tsx        — Single-page composition
  globals.css     — Design tokens + base styles

components/
  Nav.tsx         — Floating frosted-glass navigation
  Hero.tsx        — Animated hero with gradient background
  About.tsx       — Personal story section
  Experience.tsx  — Timeline of roles
  Learning.tsx    — 6-card grid of current learning areas
  Education.tsx   — Education cards
  BeyondKeyboard.tsx — Interests/hobbies
  Contact.tsx     — Links + resume request
  Footer.tsx      — Copyright
  Divider.tsx     — Gradient divider line
  RevealOnScroll.tsx — Framer Motion scroll reveal wrapper

lib/
  utils.ts        — Utility functions
```
