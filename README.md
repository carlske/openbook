# 📚 OpenBook

OpenBook helps you discover your next favorite read through intelligent search suggestions and a beautiful, responsive interface.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

## ✨ Features

- 🔍 **Smart Search** - AI-powered search suggestions using Google Gemini
- 📱 **Responsive Design** - Beautiful interface across all devices
- 🌙 **Dark Mode** - Full dark/light theme support
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🎯 **Modern UI** - Custom components with shadow effects and animations
- 📖 **Rich Book Data** - Integration with OpenLibrary API
- 🧩 **Modular Architecture** - Clean, maintainable component structure
- 🎨 **Custom Design System** - Consistent styling with Tailwind CSS v4

## 🚀 Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19.1** - Latest React with React Compiler
- **TypeScript** - Type-safe development
- **Turbopack** - Ultra-fast build tool

### Styling & UI

- **Tailwind CSS v4** - Config-less utility-first CSS
- **Lucide React** - Beautiful icons
- **Custom Components** - Reusable UI components with consistent design
- **CSS Custom Properties** - Dynamic theming support

### Data & APIs

- **OpenLibrary API** - Comprehensive book database
- **Google Gemini AI** - Intelligent search suggestions
- **Custom API Routes** - Server-side functionality

### Development Tools

- **ESLint** - Code linting with React Compiler plugin
- **Prettier** - Code formatting with Tailwind class sorting
- **pnpm** - Fast, efficient package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/carlske/openbook.git
   cd openbook
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Configure the following variables:

   ```env
   NEXT_PUBLIC_API_URL=https://openlibrary.org
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development with Turbopack
pnpm dev

# Production build with Turbopack
pnpm build

# Vercel-compatible build
pnpm build:vercel

# Start production server
pnpm start

# Lint and fix code
pnpm lint
pnpm lint --fix
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── page.tsx          # Main application page
├── components/            # React components
│   ├── books/            # Book-related components
│   ├── filter/           # Filter components
│   ├── iu/               # UI components (buttons, inputs, etc.)
│   └── layout/           # Layout components
├── adapters/             # API integration layer
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and types
└── types/                # TypeScript type definitions
```

## 🎨 Design System

OpenBook uses a custom design system with:

- **Consistent Shadows** - `shadow-[4px_4px_0_black]` style
- **Interactive Animations** - Hover effects with translate transforms
- **Dark Mode** - Full theme support with CSS custom properties
- **Responsive Grid** - Mobile-first responsive design
- **Typography** - Geist font family for optimal readability

## 🔧 Key Components

### Search System

- **InputSearch** - Debounced search input with overlay effects
- **SearchSuggChips** - AI-powered search suggestions as interactive chips
- **Pagination** - Clean, accessible pagination component

### Book Display

- **BooksGrid** - Responsive grid layout for book cards
- **BookCard** - Individual book display with cover and metadata
- **Skeleton Components** - Loading states with shimmer animations

### UI Components

- **Button** - Consistent button component with variants
- **Chips** - Interactive chip components for tags/filters
- **Filter** - Responsive filter system

## 🚢 Deployment

The project is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel

# Or use the Vercel GitHub integration
```

The `vercel.json` configuration ensures proper build commands and output directory settings.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [OpenLibrary](https://openlibrary.org/) - Comprehensive book database
- [Google Gemini](https://deepmind.google/technologies/gemini/) - AI-powered search suggestions
- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Seamless deployment platform

## 📞 Support

If you have any questions or need help with the project:

- 📧 Create an issue on GitHub
- 💬 Start a discussion in the repository
- 🐛 Report bugs through GitHub issues

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/carlske">Carlos Diaz</a></p>
  <p>⭐ Star this project if you find it helpful!</p>
</div>
