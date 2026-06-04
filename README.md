# Subhradeep Chakraborty - Interactive Portfolio Website

A modern, animation-rich interactive portfolio website built with **React**, **Tailwind CSS**, and **Shadcn/UI**. Features a professional dark theme with dynamic animations, interactive skill visualization, filterable projects, and a beautiful contact form.

## Live Demo

Visit the live portfolio: [https://interactive-canvas-29.preview.emergentagent.com](https://interactive-canvas-29.preview.emergentagent.com)

## Features

### Interactive Animations
- Smooth typing effect for hero title
- Fade-in, slide-up, slide-left, slide-right animations
- Hover effects with scale and glow transformations
- Pulsing gradient background orbs
- Animated progress bars for skills
- Smooth scroll behavior throughout the site

### Sections
- **Hero**: Animated introduction with typing effect, social links, and CTAs
- **About**: Personal description with animated stat cards
- **Skills**: Interactive category tabs with animated progress bars (6 categories, 30+ skills)
- **Projects**: Filterable project showcase by tech stack (8 projects)
- **Experience**: Animated timeline with internship details
- **Education**: Timeline with degree information and CGPA
- **Contact**: Animated form with success states and toast notifications

### Special Features
- **Dark/Light Mode Toggle**: Persistent theme preference saved to localStorage
- **Downloadable Resume**: One-click resume download
- **Project Filtering**: Filter projects by technology stack (React.js, Node.js, AI APIs, etc.)
- **Interactive Skill Visualization**: Animated progress bars with category switching
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Custom Scrollbar**: Gradient-styled custom scrollbar
- **Toast Notifications**: User feedback using Sonner

## Tech Stack

### Frontend
- **React 19.0.0** - Modern UI library
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first styling
- **Shadcn/UI** - High-quality component library
- **Lucide React** - Beautiful icon set
- **Sonner** - Toast notifications

### Backend (Ready for Integration)
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **Motor** - Async MongoDB driver

## Project Structure

```
/app/
├── backend/
│   ├── server.py              # FastAPI backend (ready for contact form API)
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables
├── frontend/
│   ├── public/
│   │   └── resume.pdf         # Downloadable resume
│   ├── src/
│   │   ├── mock.js            # Portfolio data (currently mocked)
│   │   ├── App.js             # Main app component
│   │   ├── App.css            # Custom styles
│   │   ├── index.css          # Tailwind + animations
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
│   ├── package.json           # Node dependencies
│   └── .env                   # Frontend environment variables
└── README.md
```

## Local Setup Instructions

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Yarn** (package manager) - Install with: `npm install -g yarn`
- **Python** (v3.9 or higher) - [Download](https://python.org/)
- **MongoDB** (optional, for backend) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd portfolio
```

### Step 2: Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
yarn install
```

#### Configure Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=3000
```

#### Run the Frontend

```bash
yarn start
```

The frontend will be available at: **http://localhost:3000**

### Step 3: Backend Setup (Optional - for contact form & data)

Open a new terminal and navigate to the backend directory:

```bash
cd backend
```

#### Create Virtual Environment

```bash
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate
```

#### Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### Configure Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=http://localhost:3000
```

#### Start MongoDB

```bash
# macOS (using Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

#### Run the Backend

```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

The backend will be available at: **http://localhost:8001**

API documentation will be at: **http://localhost:8001/docs**

## Customization Guide

### Update Portfolio Data

All portfolio data is currently stored in `/frontend/src/mock.js`. Update the following sections:

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
  // ... other sections
};
```

### Replace Resume

Replace `/frontend/public/resume.pdf` with your own resume file.

### Update Profile Image

Update the `avatar` field in `mock.js` with your image URL, or place your image in `/frontend/public/` and reference it as `/your-image.jpg`.

### Customize Colors

The portfolio uses a cyan-to-blue gradient theme. To change colors, update:

1. **Gradient classes** in component files (search for `from-cyan-` and `to-blue-`)
2. **CSS variables** in `/frontend/src/index.css` (for theme colors)

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

### Frontend Production Build

```bash
cd frontend
yarn build
```

The optimized production build will be in the `frontend/build/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd frontend
netlify deploy --prod --dir=build
```

## Available Scripts

In the `frontend` directory:

- `yarn start` - Runs the app in development mode
- `yarn build` - Builds the app for production
- `yarn test` - Launches the test runner

In the `backend` directory:

- `uvicorn server:app --reload` - Runs the backend in development mode
- `python -m pytest` - Runs backend tests (if available)

## Troubleshooting

### Frontend Issues

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

### Backend Issues

**Port 8001 already in use:**
```bash
# Find and kill the process
lsof -i :8001
kill -9 <PID>
```

**MongoDB connection issues:**
- Ensure MongoDB is running: `sudo systemctl status mongod`
- Check connection string in `.env` file
- Verify MongoDB port (default: 27017)

## Contact

- **Email**: subhradeepchakraborty738@gmail.com
- **GitHub**: [@Subhra-deep-468](https://github.com/Subhra-deep-468)
- **LinkedIn**: [Subhradeep Chakraborty](https://linkedin.com/in/subhradeep-chakraborty-7a6a18394)
- **Location**: Kolkata, West Bengal

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by modern portfolio trends
- Icons by [Lucide React](https://lucide.dev/)
- UI components by [Shadcn/UI](https://ui.shadcn.com/)
- Built with love using React and Tailwind CSS

---

Built with passion by **Subhradeep Chakraborty**
