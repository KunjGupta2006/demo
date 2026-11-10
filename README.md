# Demo Websites Repository

A curated multi-project collection of modern, production-grade industry demo websites built with Next.js, React, Tailwind CSS, and TypeScript. Each website lives in its own dedicated directory with independent dependencies, configuration, and scripts.

**One repo → three Vercel projects** using different root directories.

---

## Repository Structure

```
demo/
├── dental/       # Aura Dental Studio — Contemporary aesthetic dentistry & clinic
├── gym/          # Spark Fitness — High-energy fitness & personal training studio
├── salon/        # Care4U Studio — Modern haircuts, vibrant color & scalp head spa
├── README.md     # Repository-level documentation & quickstart guide
└── .gitignore    # Universal ignore rules for node_modules, build caches, and secrets
```

---

## Demo Websites

### 1. Dental Website (`dental/`)
- **Brand**: Aura Dental Studio
- **Stack**: Next.js 16 (Turbopack), React 19, Tailwind CSS, Radix UI primitives, React Hook Form, Zod validation, Embla Carousel, Motion, TypeScript
- **Features**: Online appointment booking with real-time slot checking, treatment process timelines, smile makeover gallery, doctor profiles, and emergency dental inquiry dialogs.
- **Commands**:
  ```bash
  cd dental
  npm install
  npm run dev
  ```
  App runs locally at `http://localhost:3000`.

### 2. Gym Website (`gym/`)
- **Brand**: Spark Fitness
- **Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide Icons, TypeScript
- **Features**: Interactive membership plans, coach profiles, class schedules, trial booking form, before/after transformations, and FAQ accordion.
- **Commands**:
  ```bash
  cd gym
  npm install
  npm run dev
  ```
  App runs locally at `http://localhost:3000`.

### 3. Salon Website (`salon/`)
- **Brand**: Care4U Studio Paris
- **Stack**: Next.js 16 (Turbopack), React 19, Tailwind CSS, GSAP & ScrollTrigger, Lenis Smooth Scroll, TypeScript
- **Features**: 5-step booking wizard with calendar slot selection, before/after interactive transformation slider, transparent pricing catalog, stylist portfolios, Japanese head spa showcase, and print-ready service menus.
- **Commands**:
  ```bash
  cd salon
  npm install
  npm run dev
  ```
  App runs locally at `http://localhost:3000`.

---

## Vercel Deployment (Monorepo)

Deploy all three websites from this single repo using **separate Vercel projects**, each pointed at a different root directory.

### Step-by-Step

1. **Push this repo** to GitHub (e.g., `github.com/YourUsername/demo`).

2. **Create 3 Vercel projects** — one for each demo site:

   | Vercel Project      | Root Directory | Framework Preset |
   |---------------------|----------------|------------------|
   | `aura-dental`       | `dental`       | Next.js          |
   | `spark-fitness`     | `gym`          | Next.js          |
   | `care4u-salon`      | `salon`        | Next.js          |

3. **For each project** in the Vercel dashboard:
   - Import from GitHub → select `demo` repo
   - Under **Root Directory**, set the folder name (`dental`, `gym`, or `salon`)
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Click **Deploy**

4. **Custom domains** (optional):
   - `dental.yourdomain.com` → `aura-dental` project
   - `gym.yourdomain.com` → `spark-fitness` project
   - `salon.yourdomain.com` → `care4u-salon` project

### How It Works

Vercel's **Root Directory** setting tells it to treat the subfolder as the project root. Each project gets its own:
- Independent builds (only rebuilds when files in its folder change)
- Separate deployment URLs
- Its own environment variables, domains, and settings

> **No monorepo tooling needed** — no Turborepo, no workspaces. Each folder is a fully independent Next.js app.

---

## Development Guide

### Running Multiple Demos Concurrently

Each project defaults to port 3000. To run them simultaneously, specify a custom port:

```bash
# Terminal 1 - Dental
cd dental && npm run dev -- -p 3001

# Terminal 2 - Gym
cd gym && npm run dev -- -p 3002

# Terminal 3 - Salon
cd salon && npm run dev -- -p 3003
```

### Adding Future Demo Websites

1. Create a new directory under the repository root (e.g., `restaurant/`, `clinic/`, `real-estate/`).
2. Scaffold or copy the project into the new directory, ensuring `package.json`, build configs, and source files remain encapsulated inside that folder.
3. Keep dependency installations local to the subproject (`cd <project> && npm install`).
4. Never commit `.env*`, `.next/`, or `node_modules/` (the root `.gitignore` automatically protects all subdirectories).
5. Document the new website under the **Demo Websites** section in this `README.md`.
6. Create a new Vercel project pointed at the new folder's root directory.

---

## Git Safety & Security

- All `node_modules/`, `.next/`, `dist/`, `build/`, and `.env*` environment files are strictly excluded from source control.
- No API keys, credentials, or secrets are tracked or committed.
