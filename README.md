#  Nuxt 3 ThreeJS Startpack

This is a starter template for Nuxt 3 with ThreeJS. It includes:
- Smoothscroll
- One RequestAnimation Frame call Renders both smooth scroll and Canvas
- CanvasImage component 
    - adds the loaded image to Scene's Mesh
    - applies the defined shaders
    - hover and appear animation are implemented
- Scroll Speed directive
    - adjusts the scroll speed of element
    - automatically handles scroll difference for Scene's Mesh objects added through CanvasImage component

Next features coming soon:
- Scroll Active Directive
    - adds active class to element when it is in viewport
    - automatically includes appear animation for a Mesh object added through CanvasImage component


## Setup

Install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Features



### CanvasImage component

component - automatically adds your image to Mesh and applies the defined efects

### Scroll Speed directive









