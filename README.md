# Sujan Bhattarai - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion with a Node.js backend for contact form functionality.

## Features

✨ **Modern Design** - Clean, professional UI with beautiful color gradients
🌓 **Dark/Light Mode** - Toggle between themes with smooth transitions
📱 **Fully Responsive** - Works perfectly on all devices
🎨 **Vibrant Colors** - Eye-catching color scheme (Indigo, Pink, Teal)
🚀 **Smooth Animations** - Powered by Framer Motion
🧭 **Multi-Page Navigation** - Separate pages instead of single-page scrolling
📧 **Working Contact Form** - Backend server with email functionality
⚡ **Fast Performance** - Built with Vite for lightning-fast development

## Pages

- **Home** - Hero section with animated 3D card and stats
- **About** - Personal introduction and background
- **Education** - Academic qualifications
- **Experience** - Work experience and freelance projects
- **Skills** - Technical skills with interactive cards
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form with email integration

## Color Scheme

- **Primary**: Indigo (#6366F1)
- **Secondary**: Pink (#EC4899)
- **Accent**: Teal (#14B8A6)
- **Light Background**: #F8FAFC
- **Dark Background**: #0F172A

## Installation

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Setup (Contact Form)

```bash
# Navigate to server folder
cd server

# Install server dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env and add your email credentials:
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
# PORT=5000

# Start the server
npm start
```

### Getting Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Use this password in your .env file

## Project Structure

```
portfolio-redesign/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── public/
│   └── (your resume and other static files)
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- Vite

### Backend
- Node.js
- Express
- Nodemailer
- CORS
- dotenv

## Customization

1. **Update personal information** in the page components
2. **Add your own projects** in `src/pages/Projects.jsx`
3. **Modify colors** in `tailwind.config.js`
4. **Add your resume** PDF to the `public` folder
5. **Update social media links** in components
6. **Configure email** in `server/.env`

## Running in Production

### Frontend
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

### Backend
```bash
cd server
# Use a process manager like PM2
pm2 start server.js
```

## Deployment Options

- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, Render, DigitalOcean

## License

MIT License - Feel free to use this template for your own portfolio!
