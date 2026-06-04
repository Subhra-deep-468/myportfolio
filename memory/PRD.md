# Interactive Portfolio Website - Product Requirements Document

## Project Overview
An animation-rich, interactive portfolio website for Subhradeep Chakraborty showcasing his skills, projects, and experience as a Full Stack Developer and AI Enthusiast.

## Features Implemented (Frontend with Mock Data)

### 1. **Hero Section**
- Animated typing effect for the title
- Profile avatar with gradient glow effect
- Smooth fade-in animations
- Call-to-action buttons (Get In Touch, Download Resume)
- Social media links (GitHub, LinkedIn, Email)
- Scroll indicator with animation
- Animated background elements (pulsing gradient circles)

### 2. **About Section**
- Professional description
- Highlight cards with checkmark icons
- Animated stat cards (Projects, Performance, CGPA, Certifications)
- Hover effects with scale transformations
- Slide-in animations from left and right

### 3. **Skills Section**
- Interactive category tabs for skill groups:
  - Programming Languages
  - Frontend
  - Backend
  - Databases
  - AI & Generative AI
  - Cloud & DevOps
- Animated progress bars showing skill proficiency levels
- Smooth transitions when switching categories
- Skill summary statistics
- Gradient-styled active tabs

### 4. **Projects Section**
- Filterable project grid by technology stack
- Project cards with:
  - Project images with hover zoom effect
  - Detailed descriptions
  - Feature lists
  - Technology badges
  - GitHub and demo links (on hover)
- Smooth filter transitions
- Responsive grid layout

### 5. **Experience & Education Section**
- Timeline layout with animated dots
- Experience cards showing:
  - Role, company, duration, location
  - Responsibilities with bullet points
  - Technology stack badges
- Education cards with CGPA and highlights
- Gradient timeline connector
- Hover effects with shadows

### 6. **Contact Section**
- Animated contact form with:
  - Name, Email, Message fields
  - Form validation
  - Submit button with loading state
  - Success animation with checkmark
- Contact information cards (Email, LinkedIn, GitHub)
- Toast notifications for form submission (using Sonner)
- Smooth animations for all interactions

### 7. **Header Navigation**
- Fixed header with blur backdrop effect on scroll
- Smooth scroll to sections
- Mobile responsive menu
- Theme toggle button (Dark/Light mode)
- Logo with gradient text
- Underline animation on hover for nav items

### 8. **Footer**
- Brand section with description
- Quick links to all sections
- Social media links
- Copyright information
- Gradient background decorations

### 9. **Theme System**
- Dark/Light mode toggle
- Persistent theme preference (localStorage)
- Smooth theme transitions
- Professional dark theme as default
- Custom color scheme:
  - Cyan to Blue gradients for primary elements
  - Amber accents
  - Dark background with subtle gradients

### 10. **Animations & Interactions**
- **Entrance Animations**: fade-in, slide-up, slide-left, slide-right
- **Hover Effects**: scale, glow, color transitions
- **Scroll Animations**: intersection observer for on-scroll reveals
- **Micro-interactions**: button presses, form focus states
- **Loading States**: spinner animations
- **Success States**: checkmark animations
- **Background Elements**: pulsing gradient orbs
- **Smooth Scrolling**: throughout the site
- **Custom Scrollbar**: gradient-styled

## Technical Stack (Frontend)

### Core Technologies
- **React 19.0.0**: Modern UI library
- **React Router DOM 7.5.1**: Client-side routing
- **Tailwind CSS 3.4.17**: Utility-first styling
- **Lucide React**: Icon library (NO emoji icons)

### UI Components
- **Shadcn/UI Components**: All from `/app/frontend/src/components/ui/`
  - Button, Card, Input, Textarea, Label
  - Progress, Badge, Separator
  - Toast/Sonner for notifications
  - All components properly imported and styled

### State Management
- React Hooks (useState, useEffect, useContext)
- Theme Context for dark/light mode
- Local storage for theme persistence

### Styling Approach
- Custom CSS animations in index.css
- Tailwind utility classes
- Gradient text effects
- Glass-morphism effects
- Smooth transitions for all interactive elements
- Professional dark theme (no purple/pink gradients)
- Cyan-to-blue gradient accents
- Proper color contrast

## Data Structure (Mock Data)
Located in `/app/frontend/src/mock.js`:
- Personal information
- About/highlights
- Skills (categorized with proficiency levels)
- Projects (with images, descriptions, features, tech stack)
- Experience (role, responsibilities, technologies)
- Education (degrees, CGPA, highlights)
- Certifications
- Achievements

## Design Principles Followed
✅ Professional dark theme with cyan/blue gradients
✅ NO purple/pink color combinations
✅ Lucide-react icons (NO emoji icons)
✅ Micro-animations for all interactions
✅ Generous whitespace (2-3x spacing)
✅ Hover states on all interactive elements
✅ Smooth transitions (300-500ms)
✅ Responsive design for all screen sizes
✅ Accessibility considerations (focus states, ARIA labels)
✅ Performance optimized (intersection observer, lazy animations)

## File Structure
```
/app/frontend/src/
├── mock.js (Portfolio data)
├── App.js (Main app with routing)
├── App.css (Custom styles)
├── index.css (Tailwind + custom animations)
├── components/
│   ├── ThemeProvider.jsx (Theme context)
│   ├── Portfolio/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── ui/ (Shadcn components - pre-existing)
└── pages/
    └── Portfolio.jsx (Main portfolio page)
```

## Current Status
✅ Frontend-only implementation with mock data
✅ All animations and interactions working
✅ Theme toggle functional
✅ Responsive design complete
✅ All sections implemented
✅ Professional dark theme applied

## Next Steps (Backend Integration)
1. Create MongoDB schemas for portfolio data
2. Build REST APIs for:
   - Contact form submission
   - Resume download tracking
   - Portfolio data management (optional CMS)
3. Replace mock data with API calls
4. Add email service for contact form
5. Add analytics tracking
6. Deploy to production

## Notes
- Resume PDF should be placed in `/app/frontend/public/resume.pdf` for download feature
- All current data is MOCKED and stored in localStorage/frontend only
- Form submission shows success message but doesn't actually send emails (mock)
- Project images are placeholder images from Unsplash
- No backend integration yet - this is frontend-only with mock data
