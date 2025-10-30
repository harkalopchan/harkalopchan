# Resume Landing Page

A modern, responsive resume landing page built with Next.js and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎨 Beautiful gradient effects

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

Edit `app/page.tsx` to update your resume content:
- Personal information
- Work experience
- Skills
- Education
- Projects
- Contact information

### Adding Your PDF Resume

To enable the PDF download button:
1. Place your resume PDF file in the `/public` directory
2. Name it `resume.pdf`
3. The download button will automatically work - it links to `/resume.pdf`

The file structure should be:
```
/public
  └── resume.pdf
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

