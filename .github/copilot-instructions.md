# Shree Balaji Enterprise - AI Coding Guidelines

## Architecture Overview
- **React SPA** with Vite build system, using React Router for client-side navigation
- **Component Structure**: Reusable components in `/components`, page components in `/pages`
- **Layout Pattern**: App.jsx wraps all routes with Navbar, animated main content, and Footer
- **Styling**: Tailwind CSS v4 with custom primary color (`#8b5a2b`) defined in `src/index.css`

## Animation Patterns
- **Framer Motion** used extensively for all animations
- **Page Transitions**: Use `AnimatePresence` with `mode="wait"` in App.jsx for route changes
- **Component Animations**: Define `containerVariants` and `itemVariants` for staggered children animations
- **Hover Effects**: Apply `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}` consistently
- **Example**: See Hero.jsx for complex staggered animations with `staggerChildren: 0.2`

## Navigation & Routing
- **Routes**: `/`, `/services`, `/about`, `/contact` defined in App.jsx
- **Active States**: Use `useLocation().pathname` for conditional styling in Navbar.jsx
- **Mobile Menu**: Hamburger icon with `AnimatePresence` for smooth open/close

## Styling Conventions
- **Color Scheme**: Primary brown (`#8b5a2b`), gradients from amber/orange tones
- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Glass Effects**: Use `.glass-effect` class for backdrop-blur elements
- **Shadows**: Consistent shadow hierarchy (`shadow-lg`, `shadow-xl`, `shadow-2xl`)

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Linting**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview**: `npm run preview` for production build testing

## Code Patterns
- **Unused Variables**: ESLint ignores vars starting with uppercase or underscore (`^[A-Z_]$`)
- **Imports**: Group React imports first, then third-party, then local components
- **Contact Integration**: Hardcoded phone (`+919427378493`) and email (`s.d.malviya3820@gmail.com`) in multiple places
- **Image Paths**: Public images in `/images/` directory (e.g., `/images/hero-1.jpg`)

## Key Files to Reference
- `src/App.jsx`: Main routing and layout structure
- `components/Navbar.jsx`: Navigation with mobile menu animations
- `components/Hero.jsx`: Complex animation example with services display
- `src/index.css`: Custom CSS variables and Tailwind utilities</content>
<parameter name="filePath">c:\Users\Pratham\Desktop\shree-balaji-enterprise\.github\copilot-instructions.md