# Wheel Miniapp

A Chinese Zodiac spinning wheel game for the Year of the Horse celebration. Built with React, TypeScript, and Vite.

## Features

- 🎡 Interactive spinning wheel with 12 Chinese Zodiac animals
- 🐴 Win by landing on the Horse
- 🎟️ Ticket-based gameplay system
- 🎨 Beautiful gradient animations and effects

## Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Authentication**: Farcaster SDK
- **Styling**: Inline styles with CSS animations

## Getting Started

### Prerequisites

- Node.js 22.11.0 or higher
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Environment Configuration

The project is configured to use:
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Framework**: Vite

These settings are defined in `vercel.json`.

## Project Structure

```
wheel-miniapp/
├── src/
│   ├── components/       # React components
│   │   ├── SpinToWin.tsx
│   │   ├── Wheel.tsx
│   │   ├── WheelPointer.tsx
│   │   └── GradientTitle.tsx
│   ├── services/         # Business logic
│   │   └── gameService.ts
│   ├── types/           # TypeScript types
│   │   └── types.ts
│   ├── utils/           # Utility functions
│   │   └── wheelRotation.ts
│   └── App.tsx
├── public/
│   └── .well-known/
│       └── farcaster.json
├── design/              # Design assets & images
└── vercel.json         # Vercel configuration

```

## Farcaster Configuration

The `/.well-known/farcaster.json` is served from the public directory and can be updated by editing `./public/.well-known/farcaster.json`.

## Documentation

For detailed specifications, see [SPEC.md](./SPEC.md).

For Farcaster Mini Apps documentation, visit [miniapps.farcaster.xyz](https://miniapps.farcaster.xyz/docs/getting-started).

## Development Notes

- The winning probability is currently set to 50% for testing (see `gameService.ts`)
- The test mode display shows which animal should win (remove before production)
- Change the win probability back to 1/12 (8.33%) for production

---

**Created**: February 2, 2026  
**Version**: 1.0
