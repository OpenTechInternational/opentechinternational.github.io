# Open Tech International Website

## Project Overview

Open Tech International is a non-profit organization focused on advancing technology solutions worldwide. This website serves as our digital presence, showcasing our initiatives, actions, and opportunities for involvement.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Content Management**: Markdown-based content system for easy updates
- **Dynamic Pages**: Automatically generated pages for initiatives and actions
- **Interactive Components**: Modern UI components with smooth animations
- **Accessibility**: Built with accessibility best practices in mind
- **Newsletter Integration**: Embedded Google Forms for newsletter signup

## Tech Stack

- [Astro](https://astro.build/) - Modern static site builder
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Markdown](https://www.markdownguide.org/) - Content authoring
- [Google Forms](https://www.google.com/forms/about/) - Newsletter signup and Contact Us integration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ActionCard.astro    # Card component for displaying actions
│   ├── Newsletter.astro    # Newsletter signup form component
│   └── Report.astro        # Report display component
├── content/       # Content collections
│   ├── actions/   # Action and event content
│   ├── initiatives/ # Initiative content
│   ├── pages/     # Static page content
│   └── team.json  # Team member data
├── layouts/       # Page layouts
│   └── Layout.astro # Main layout component
├── pages/         # Route components
│   ├── actions/   # Action-related pages
│   │   ├── [slug].astro # Dynamic action pages
│   │   └── index.astro  # Actions listing page
│   ├── initiatives/ # Initiative pages
│   │   └── [slug].astro # Dynamic initiative pages
│   ├── about.astro  # About page
│   ├── contact.astro # Contact page
│   ├── donate.astro # Donation page
│   ├── index.astro  # Home page
│   └── volunteer.astro # Volunteer page
└── styles/        # Global styles
```

## Content Management

Content is managed through a combination of markdown files and JSON:

- **Actions**: Markdown files in `src/content/actions/` containing:
  - Title, description, and event details
  - Event dates and locations
  - Registration URLs
  - Virtual event status
  - Event types and tags

- **Initiatives**: Markdown files in `src/content/initiatives/` containing:
  - Initiative descriptions and goals
  - Status and progress information
  - Related resources and links

- **Pages**: Markdown files in `src/content/pages/` for static content:
  - About page content
  - Contact information
  - Donation details
  - Volunteer opportunities

- **Team**: JSON file at `src/content/team.json` containing:
  - Team member information
  - Roles and bios
  - Profile images
  - Social media links

## Development

This project was developed using Cursor, an AI-powered IDE that provided:
- Intelligent code suggestions
- Real-time error detection
- Automated refactoring
- Component generation
- Style optimization

The AI agent assisted with:
- Component architecture and implementation
- Responsive design implementation
- Content structure optimization
- Performance improvements
- Accessibility enhancements
- Dynamic routing setup
- Form integration
- Image optimization
- Navigation structure

## License

This project is licensed under the MIT License - see the LICENSE file for details.
