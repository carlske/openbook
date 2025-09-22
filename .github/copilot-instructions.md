# OpenBook AI Coding Agent Instructions

This is a modern Next.js 15 application using the App Router, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack & Architecture

- **Framework**: Next.js 15 with App Router (`src/app/` directory structure)
- **Runtime**: React 19.1 with React Compiler enabled
- **Styling**: Tailwind CSS v4 (config-less setup with `@theme inline`)
- **Build Tool**: Turbopack for faster development and builds
- **Package Manager**: pnpm (based on `pnpm-lock.yaml`)

## Key Development Patterns

### File Organization

- App structure follows Next.js 15 App Router conventions in `src/app/`
- TypeScript path mapping: Use `@/*` for imports from `src/` directory
- Global styles in `src/app/globals.css` using Tailwind's new `@theme inline` syntax

### Styling Conventions

- Tailwind v4 with CSS-first configuration (no `tailwind.config.js`)
- CSS custom properties defined in `:root` for theming
- Dark mode handled via `prefers-color-scheme` media queries
- Font variables: `--font-geist-sans` and `--font-geist-mono` from Next.js fonts

### Development Workflow

```bash
# Development (uses Turbopack)
pnpm dev

# Production build (uses Turbopack)
pnpm build

# Linting with autofix plugins
pnpm lint
```

## Code Quality & Standards

### ESLint Configuration

- Flat config format (`eslint.config.mjs`) with modern setup
- Plugins: React Compiler, autofix, react-hooks, sort-keys-fix
- Prettier integration with Tailwind class sorting
- TypeScript strict mode enabled

### Prettier Formatting

- Configured in `.prettierrc` with Tailwind CSS plugin for class sorting
- VS Code setup: Prettier as default formatter with ESLint auto-fix on save
- Settings in `.vscode/settings.json` ensure consistent formatting across the team

### TypeScript Setup

- Strict TypeScript configuration
- Next.js plugin for enhanced type safety
- Path mapping configured for `@/*` imports

## Important Notes

- **Turbopack**: All build commands use `--turbopack` flag for faster compilation
- **React Compiler**: Enabled via ESLint plugin for optimization
- **No Tailwind Config**: Uses CSS-first approach with `@theme inline`
- **Font Optimization**: Geist fonts loaded via `next/font/google`
- **Project Name**: "openbook" - consider this when adding features or documentation

## Component Patterns

- Use Server Components by default (App Router)
- Client Components when interactivity is needed (`"use client"`)
- Font variables applied via CSS custom properties in layout
- Responsive design with Tailwind's mobile-first approach

When adding new features, follow the established patterns for file organization, styling, and TypeScript usage. Always run `pnpm lint` before committing to maintain code quality.
