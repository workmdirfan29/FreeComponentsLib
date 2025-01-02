import React from "react";
import InstallationGuide from "../../../shared/InstallationGuide";
import { btnReact } from "../../../data/React/button/btnReactCode";

const ReactBtn: React.FC = () => {
  const steps = [
    {
      title: "Create a New React App with Vite",
      code: "npm create vite@latest",
    },
    { title: "Navigate to the Project Directory", code: "cd my-react-app" },
    { title: "Install Dependencies", code: "npm install" },
    { title: "Start the Development Server", code: "npm run dev" },
    {
      title: "Install Tailwind CSS and PostCSS",
      code: "npm install -D tailwindcss postcss autoprefixer",
    },
    {
      title: "Initialize Tailwind CSS Configuration",
      code: "npx tailwindcss init -p",
    },
    {
      title: "Configure Tailwind CSS",
      code: `// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
    },
    {
      title: "Create Tailwind CSS Files",
      code: `/* src/index.css */
              @tailwind base;
              @tailwind components;
              @tailwind utilities;`,
    },
    {
      title: "Setup your App.jsx",
      code: `// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <h1 className="text-4xl font-bold text-white">Hello, World!</h1>
    </div>
  );
}

export default App;`,
    },
  ];

  return (
    <InstallationGuide
      pageTitle="Installation"
      btnReactCode={btnReact}
      steps={steps}
    />
  );
};

export default ReactBtn;
