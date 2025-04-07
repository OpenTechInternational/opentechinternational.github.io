# Open Tech International Website

## Project Overview

Open Tech International is a non-profit organization focused on advancing technology solutions worldwide. This website serves as our digital presence, showcasing our initiatives, actions, and opportunities for involvement.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Content Management**: Markdown-based content system for easy updates
- **Dynamic Pages**: Automatically generated pages for initiatives and actions
- **Interactive Components**: Modern UI components with smooth animations
- **Accessibility**: Built with accessibility best practices in mind
- **Google Forms Integration**: Embedded Google Forms for newsletter signup and contact forms

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
│   ├── TeamMember.astro    # Component for displaying team member information
│   └── Initiative.astro    # Component for displaying initiative information
├── content/       # Content collections
│   ├── actions/   # Action and event content
│   ├── initiatives/ # Initiative content
│   ├── pages/     # Static page content
│   └── sections/  # Reusable content sections
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

- **Actions**: Markdown files in `src/content/actions/` contain details about specific activities the organization undertakes. Activities might include:
  - Events (conferences, workshops, meetings)
  - Contracts and partnerships
  - Internship opportunities
  - Other organizational activities

- **Initiatives**: Markdown files in `src/content/initiatives/` contain details about specific initiatives the organization undertakes. These are strategic goals and programs, which contain long-term objectives and missions. Initiatives guide and inform the actions we undertake

- **Pages**: Markdown files in `src/content/pages/` contain static content for key site sections, such as:
  - About page content
  - Contact information
  - Donation details
  - Volunteer opportunities
These are standalone pages with fixed content

- **Sections**: Markdown files in `src/content/sections/` contain reusable content blocks, which can be reused throughout the website:
  - Mission statements
  - Get involved sections
  - Team member information
  - Other content that may appear in multiple places
These sections can be included in various pages to maintain consistency.

These markdown files are embedded in .astro files, which contain the html. 

### How to Add Content (most common)
#### Actions
To add an action:
- Put a markdown file in `src/content/actions`. You will need to include the proper headers, so one of the existing action md files as a template.
- The action summary will automatically appear on the list of actions, and you will see the md content when you click on the title.

#### Team
To add a team member:
- Add another team member into the array found in the .json file found at `src/content/team/members.json`.
- Add the team members picture into `public/team` and ensure the `image` field in your new team members is set to the name of the image.
- The team member will automatically appear on the team section of the about page.

## Development

This project was initially developed using Cursor, an AI-powered IDE.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
