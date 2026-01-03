# Rodz Velayo - Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- **Modern Stack**: Built with React 19, Vite, and React Router
- **Responsive Design**: Fully responsive and mobile-friendly
- **Multiple Sections**:
  - Home: Hero section with introduction
  - About: Information about you
  - Projects: Showcase your work
  - Skills: Display your technical skills
  - Contact: Contact form and links

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:5173/](http://localhost:5173/)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
rodzvelayo-portfolio/
├── src/
│   ├── components/       # Reusable components (Header)
│   ├── pages/           # Page components (Home, About, Projects, Skills, Contact)
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── index.html           # HTML template
```

## Customization

1. **Personal Information**: Update the content in each page component to reflect your information
2. **Projects**: Edit src/pages/Projects.jsx to add your actual projects
3. **Skills**: Update src/pages/Skills.jsx with your skills
4. **Contact Links**: Replace placeholder links in src/pages/Contact.jsx with your actual contact information
5. **Styling**: Customize colors and styles in the CSS files

## Technologies Used

- React 19
- React Router DOM
- Vite
- CSS3

## License

MIT
