# Animated Background Component

This README provides documentation for implementing an animated background component in a React TypeScript project. The component creates a moving square box pattern that can be used in any section of your website, including hero sections.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Component Code](#component-code)
4. [CSS Code](#css-code)
5. [Customization](#customization)

## Installation

1. Create a new file named \`AnimatedBackground.tsx\` in your components directory.
2. Create a new file named \`AnimatedBackground.css\` in your styles directory.
3. Copy the component code and CSS code provided below into these files.

## Usage

To use the AnimatedBackground component in your project, follow these steps:

1. Import the AnimatedBackground component in your desired file:

```tsx
import { AnimatedBackground } from './components/AnimatedBackground';
```

2. Use the component in your JSX:

```tsx
<section className="relative min-h-screen flex items-center justify-center">
  <AnimatedBackground />
  {/* Your content goes here */}
</section>
```

### Example: Hero Section

Here's an example of how to use the AnimatedBackground in a hero section:

```tsx
import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">Discover amazing things with us</p>
      </div>
    </section>
  );
};
```

## Component Code

Here's the full code for the \`AnimatedBackground.tsx\` component:

```tsx
import React from 'react';
import '../styles/AnimatedBackground.css';

interface AnimatedBackgroundProps {
  overlayColor?: string;
  overlayOpacity?: number;
  gridColor?: string;
  animationDuration?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  overlayColor = 'white',
  overlayOpacity = 0.9,
  gridColor = '#f1f1f1',
  animationDuration = 15,
}) => {
  return (
    <div className="animated-background">
      <div 
        className="animated-background__overlay"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      <div
        className="animated-background__grid"
        style={{
          backgroundImage: \`linear-gradient(to right, \${gridColor} 1px, transparent 1px),
                            linear-gradient(to bottom, \${gridColor} 1px, transparent 1px)\`,
          animation: \`move \${animationDuration}s linear infinite\`,
        }}
      />
    </div>
  );
};
```

## CSS Code

Here's the full CSS code for the \`AnimatedBackground.css\` file:

```css
@keyframes move {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-4rem) translateY(-4rem);
  }
}

.animated-background {
  position: absolute;
  inset: 0;
  z-index: -10;
}

.animated-background__overlay {
  position: absolute;
  inset: 0;
}

.animated-background__grid {
  position: absolute;
  inset: 0;
  background-size: 4rem 4rem;
}
```

## Customization

The AnimatedBackground component accepts several props for customization:

- \`overlayColor\`: Sets the color of the overlay (default: 'white')
- \`overlayOpacity\`: Sets the opacity of the overlay (default: 0.9)
- \`gridColor\`: Sets the color of the grid lines (default: '#f1f1f1')
- \`animationDuration\`: Sets the duration of the animation in seconds (default: 15)

Example of a customized usage:

```tsx
<AnimatedBackground 
  overlayColor="#f0f0f0" 
  overlayOpacity={0.8} 
  gridColor="#e0e0e0" 
  animationDuration={20} 
/>
```

Feel free to adjust these props to match your design requirements.

---

This animated background component provides a flexible and reusable solution for adding dynamic visual interest to your React TypeScript project. By following this documentation, you can easily integrate and customize the component to suit your needs.
```

---
---

# Fresh Install Guide: React TypeScript Project with Vite and Animated Background

This guide will walk you through setting up a new React TypeScript project using Vite and implementing the AnimatedBackground component in a hero section.

## Table of Contents

1. [Create a New Vite Project](#1-create-a-new-vite-project)
2. [Install Dependencies](#2-install-dependencies)
3. [Set up Tailwind CSS](#3-set-up-tailwind-css)
4. [Create the AnimatedBackground Component](#4-create-the-animatedbackground-component)
5. [Create the Hero Section](#5-create-the-hero-section)
6. [Update the App Component](#6-update-the-app-component)
7. [Run the Development Server](#7-run-the-development-server)

## 1. Create a New Vite Project

Open your terminal and run the following commands:

```bash
npm create vite@latest my-animated-project -- --template react-ts
cd my-animated-project
```

## 2. Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

## 3. Set up Tailwind CSS

Install Tailwind CSS and its peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update the `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a new file `src/index.css` and add the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update `src/main.tsx` to import the new CSS file:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 4. Create the AnimatedBackground Component

Create a new file \`src/components/AnimatedBackground.tsx\`:

```tsx
import React from 'react';
import '../styles/AnimatedBackground.css';

interface AnimatedBackgroundProps {
  overlayColor?: string;
  overlayOpacity?: number;
  gridColor?: string;
  animationDuration?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  overlayColor = 'white',
  overlayOpacity = 0.9,
  gridColor = '#f1f1f1',
  animationDuration = 15,
}) => {
  return (
    <div className="animated-background">
      <div 
        className="animated-background__overlay"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      <div
        className="animated-background__grid"
        style={{
          backgroundImage: \`linear-gradient(to right, \${gridColor} 1px, transparent 1px),
                            linear-gradient(to bottom, \${gridColor} 1px, transparent 1px)\`,
          animation: \`move \${animationDuration}s linear infinite\`,
        }}
      />
    </div>
  );
};
```

Create a new file \`src/styles/AnimatedBackground.css\`:

```css
@keyframes move {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-4rem) translateY(-4rem);
  }
}

.animated-background {
  position: absolute;
  inset: 0;
  z-index: -10;
}

.animated-background__overlay {
  position: absolute;
  inset: 0;
}

.animated-background__grid {
  position: absolute;
  inset: 0;
  background-size: 4rem 4rem;
}
```

## 5. Create the Hero Section

Create a new file \`src/components/HeroSection.tsx\`:

```tsx
import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">Discover amazing things with us</p>
      </div>
    </section>
  );
};
```

## 6. Update the App Component

Replace the contents of \`src/App.tsx\` with:

```tsx
import React from 'react';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
    </div>
  );
}

export default App;
```

## 7. Run the Development Server

Start the development server:

```bash
npm run dev
```

Visit the URL provided in the terminal (usually \`http://localhost:5173\`) to see your new React TypeScript project with the animated background in the hero section.

---

Congratulations! You've successfully set up a new React TypeScript project with Vite and implemented the AnimatedBackground component in a hero section. Feel free to customize the component and hero section to fit your project's needs.

## Animated Background Customization

You can easily customize the colors of the animated background by modifying the props passed to the AnimatedBackground component and updating the CSS. Here's how:

### 1. Changing the Overlay Color and Opacity

You can change the overlay color and opacity by passing the `overlayColor` and `overlayOpacity` props to the AnimatedBackground component:

```tsx
<AnimatedBackground 
  overlayColor="#f0f0f0"
  overlayOpacity={0.8}
/>
```

### 2. Changing the Grid Color

To change the color of the grid lines, use the `gridColor` prop:

```tsx
<AnimatedBackground gridColor="#e0e0e0" />
```

### 3. Changing the Background Color

If you want to change the background color behind the grid, modify the CSS in `src/styles/AnimatedBackground.css`:

```css
.animated-background {
  position: absolute;
  inset: 0;
  z-index: -10;
  background-color: #ffffff; /* Change this to your desired background color */
}
```

### Example: Customized HeroSection

Here's an example of a HeroSection component with a customized AnimatedBackground:

```tsx
import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground 
        overlayColor="#f0f0f0"
        overlayOpacity={0.8}
        gridColor="#e0e0e0"
      />
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">Discover amazing things with us</p>
      </div>
    </section>
  );
};
```

Remember, you can use any valid CSS color value for these properties, including hex codes, RGB values, or color names. Adjust these values to match your desired color scheme.

