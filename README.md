
# schibelli-com

Welcome to the schibelli-com project! This project is a personal website built with Next.js, Tailwind CSS, and MDX.

## Features
- **Modern Web Technologies**: Built with Next.js and Tailwind CSS.
- **Content Management**: Easy content management with MDX.
- **Reusable Components**: Modular and reusable components.
- **Analytics**: Integrated analytics for tracking site performance.

## Technology Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Package Manager**: pnpm

## Getting Started

### Prerequisites
- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **pnpm**: Install pnpm globally using npm:
  ```sh
  npm install -g pnpm
  ```

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/jschibelli/schibelli-com.git
   cd schibelli-com
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```

### Running the Project Locally
Start the development server:
```sh
pnpm dev
```
Open your browser and navigate to `http://localhost:3000`.

## Project Structure

The project has the following structure:

- `.vscode/`: VSCode specific settings
- `app/`: Main application components and pages
  - `layout.tsx`: Defines the layout component.
  - `page.tsx`: Defines the main page component.
  - `components/`: Reusable UI components.
  - `contact/`: Contact page components.
  - `projects/`: Project-related components.
- `content/`: MDX content files
- `pages/`: API route handlers
- `public/`: Static assets
- `types/`: TypeScript type declarations
- `util/`: Utility functions
- `.env.example`: Example environment configuration
- `.gitignore`: Git ignore file
- `LICENSE`: License information
- `README.md`: Project documentation
- `contentlayer.config.js`: Content layer configuration
- `global.css`: Global CSS styles
- `mdx-components.tsx`: Custom MDX components
- `next.config.mjs`: Next.js configuration
- `package.json`: Project dependencies and scripts
- `pnpm-lock.yaml`: pnpm lockfile
- `postcss.config.js`: PostCSS configuration
- `rome.json`: Rome toolchain configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## Environment Variables

The `.env` file should contain the following environment variables:

- `VARIABLE_NAME_1`: Description of VARIABLE_NAME_1
- `VARIABLE_NAME_2`: Description of VARIABLE_NAME_2
- `VARIABLE_NAME_3`: Description of VARIABLE_NAME_3

Example `.env` file:
```
VARIABLE_NAME_1=value1
VARIABLE_NAME_2=value2
VARIABLE_NAME_3=value3
```

## Scripts and Commands

The following scripts are available in the `package.json`:

- `pnpm dev`: Start the development server
- `pnpm build`: Build the project for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run linting
- `pnpm format`: Format the codebase

## Components

### `app/components`

#### `analytics.tsx`
Component for integrating analytics.

#### `card.tsx`
Component for displaying cards.

#### `container.tsx`
Component for container layout.

#### `footer.tsx`
Footer component.

#### `header.tsx`
Header component.

#### `icons.tsx`
Icon components.

## Content Management

### Adding New Content

Content files are stored in the `content/` directory. Each project or post is represented by an MDX file.

#### Example MDX File
```mdx
---
title: "Project Title"
date: "2024-01-01"
---

# Project Title

Description of the project.
```

### Managing Projects
To add a new project, create a new `.mdx` file in the `content/projects/` directory.

## Deployment

### Building for Production
To build the project for production, run:
```sh
pnpm build
```

### Starting the Production Server
To start the production server, run:
```sh
pnpm start
```

### Deployment to Platforms
- **Vercel**: [Deployment guide for Vercel](https://vercel.com/docs)
- **Netlify**: [Deployment guide for Netlify](https://docs.netlify.com/)

## Contributing

Thank you for considering contributing to this project! Please follow these guidelines to contribute.

### Reporting Issues
Please use the [GitHub Issues](https://github.com/jschibelli/schibelli-com/issues) to report bugs or request features.

### Pull Requests
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

### Code Style
Please follow the existing code style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
