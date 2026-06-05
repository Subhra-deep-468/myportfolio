# Subhradeep Chakraborty - Interactive Portfolio Website

A modern, animation-rich interactive portfolio website built with **React**, **Tailwind CSS**, and **Shadcn/UI**. Features a professional dark theme with dynamic animations, twinkling star background, interactive skill visualization, filterable projects, and a beautiful contact form.

## Live Demo

Visit the live portfolio: *(update this once deployed to Cloudflare Pages)*

## Features

### Interactive Animations
- **Twinkling stars background** with sparkles and shooting stars
- Smooth typing effect for hero title
- Fade-in, slide-up, slide-left, slide-right animations
- Hover effects with scale and glow transformations
- Pulsing gradient background orbs
- Animated progress bars for skills
- Smooth scroll behavior throughout the site

### Sections
- **Hero**: Animated introduction with typing effect, profile photo, social links, and CTAs
- **About**: Personal description with animated stat cards
- **Skills**: Interactive category tabs with animated progress bars (6 categories, 30+ skills)
- **Projects**: Filterable project showcase by tech stack (8 projects)
- **Experience**: Animated timeline with internship details
- **Education**: Timeline with degree information and CGPA
- **Contact**: Animated form with success states and toast notifications

### Special Features
- **Dark/Light Mode Toggle**: Persistent theme preference saved to localStorage
- **Downloadable Resume**: One-click resume download
- **Project Filtering**: Filter projects by technology stack
- **Interactive Skill Visualization**: Animated progress bars with category switching
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Custom Scrollbar**: Gradient-styled custom scrollbar
- **Toast Notifications**: User feedback using Sonner

## Tech Stack

- **React 19.0.0** - Modern UI library
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first styling
- **Shadcn/UI** - High-quality component library
- **Lucide React** - Beautiful icon set
- **Sonner** - Toast notifications

**Note**: This is a **frontend-only** application. No backend or database required! All data is stored in `/src/mock.js`.

## Project Structure

```
/
├── frontend/
│   ├── public/
│   │   ├── resume.pdf         # Downloadable resume
│   │   └── profile.jpg        # Profile photo
│   ├── src/
│   │   ├── mock.js            # Portfolio data (all content here)
│   │   ├── App.js             # Main app component
│   │   ├── App.css            # Custom styles
│   │   ├── index.css          # Tailwind + animations (incl. stars)
│   │   ├── components/
│   │   │   ├── ThemeProvider.jsx
│   │   │   ├── Portfolio/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── ui/            # Shadcn UI components
│   │   └── pages/
│   │       └── Portfolio.jsx  # Main portfolio page
│   ├── package.json           # Dependencies
│   └── .env                   # Environment variables
└── README.md
```

## Local Setup Instructions

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Yarn** (package manager) - Install with: `npm install -g yarn`
- **Git** - [Download](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd <repo-name>
```

### Step 2: Install Dependencies

```bash
cd frontend
yarn install
```

### Step 3: Run the Development Server

```bash
yarn start
```

The portfolio will be available at: **http://localhost:3000**

That's it! No backend setup needed.

## Customization Guide

### Update Portfolio Data

All portfolio data is stored in `/frontend/src/mock.js`. Update the following sections:

```javascript
export const portfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other personal details
  },
  skills: [...],     // Your skills
  projects: [...],   // Your projects
  experience: [...], // Your experience
  education: [...],  // Your education
};
```

### Replace Resume

Replace `/frontend/public/resume.pdf` with your own resume file.

### Replace Profile Photo

Replace `/frontend/public/profile.jpg` with your own photo.

### Customize Colors

The portfolio uses a cyan-to-blue gradient theme. To change colors:
1. Update **gradient classes** in component files (search for `from-cyan-` and `to-blue-`)
2. Update **CSS variables** in `/frontend/src/index.css`

### Add More Projects

Edit `/frontend/src/mock.js` and add new project objects to the `projects` array:

```javascript
{
  id: 9,
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["React.js", "Node.js"],
  github: "https://github.com/your-repo",
  features: ["Feature 1", "Feature 2"],
  image: "https://your-image-url.com"
}
```

## Building for Production

```bash
cd frontend
yarn build
```

The optimized production build will be in the `frontend/build/` directory.

## Deployment

### Deploy to Cloudflare Pages (Recommended)

#### Prerequisites
- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)
- Your project pushed to a GitHub or GitLab repository

#### Step 1: Push to GitHub

```bash
git init        # if not already a git repo
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. Click **Connect to Git** and authorize Cloudflare to access your GitHub account
3. Select your repository and click **Begin setup**

#### Step 3: Configure Build Settings

| Setting | Value |
|---|---|
| **Framework preset** | Create React App |
| **Root directory** | `frontend` |
| **Build command** | `yarn build` |
| **Build output directory** | `build` |

#### Step 4: Add Environment Variables

In the same setup screen, scroll to **Environment variables** and add:

| Variable | Value |
|---|---|
| `REACT_APP_WEB3FORMS_ACCESS_KEY` | *(your Web3Forms access key from the client)* |

> **Important:** Cloudflare Pages requires environment variables to be added here — the `.env` file is not used during cloud builds. Any variable starting with `REACT_APP_` is bundled into the frontend at build time.

#### Step 5: Deploy

Click **Save and Deploy**. Cloudflare will build and deploy the site. In ~2 minutes you'll get a URL like:

```
https://your-repo-name.pages.dev
```

#### Step 6: Custom Domain (Optional)

1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain** and enter your domain
3. If the domain is already on Cloudflare DNS, it sets up automatically
4. If not, add a CNAME record pointing to `your-repo-name.pages.dev`

#### Updating the Site

Every `git push` to `main` triggers an automatic redeploy. No manual steps needed.

#### Managing Environment Variables After Deployment

1. Go to Cloudflare Pages → your project → **Settings** → **Environment variables**
2. Add or edit variables under **Production**
3. Trigger a new deployment for changes to take effect: **Deployments** → **Retry deployment**

---

### Deploy to Vercel (Alternative)

```bash
npm install -g vercel
cd frontend
vercel
```

### Deploy to Netlify (Alternative)

```bash
npm install -g netlify-cli
cd frontend
yarn build
netlify deploy --prod --dir=build
```

## Available Scripts

- `yarn start` - Runs the app in development mode
- `yarn build` - Builds the app for production
- `yarn test` - Launches the test runner

## Troubleshooting

**Port 3000 already in use:**
```bash
# Find and kill the process
lsof -i :3000
kill -9 <PID>

# Or use a different port
PORT=3001 yarn start
```

**Dependencies issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

## Contact

- **Email**: subhradeepchakraborty738@gmail.com
- **GitHub**: [@Subhra-deep-468](https://github.com/Subhra-deep-468)
- **LinkedIn**: [Subhradeep Chakraborty](https://linkedin.com/in/subhradeep-chakraborty-7a6a18394)
- **Location**: Kolkata, West Bengal

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI components by [Shadcn/UI](https://ui.shadcn.com/)
- Built with React and Tailwind CSS

---

Built with passion by **Subhradeep Chakraborty**
