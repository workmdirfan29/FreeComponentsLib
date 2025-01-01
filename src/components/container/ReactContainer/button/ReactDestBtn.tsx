import React from "react";
import ReactCode from "../../../code/ReactCode";
import { destReactCode } from "../../../data/React/button/destReactCode";
import Installation from "../../../shared/Installation";

const ReactDestBtn: React.FC = () => {
  const steps = [
    {
      title: "Create a New React App with Vite",
      code: "npm create vite@latest",
    },
    {
      title: "Navigate to the Project Directory",
      code: "cd my-react-app",
    },
    {
      title: "Install Dependencies",
      code: "npm install",
    },
    {
      title: "Start the Development Server",
      code: "npm run dev",
    },
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
    <div className="min-h-screen">
      <div id="code-container">
        <ReactCode btnReactCode={destReactCode} />
      </div>
      <div id="content-container" className="mt-10">
        <h1 className="text-2xl font-semibold">Installation</h1>
        <hr className="my-3 opacity-50 bg-zinc-800" />

        {steps.map((step, index) => (
          <div key={index} id={`install-${index + 1}`} className="my-3">
            <h1
              className="inline-block my-3 border-b border-sky-500"
              style={{
                borderImageSource:
                  "linear-gradient(to right, #38bdf8, transparent)",
                borderImageSlice: 1,
              }}
            >
              {step.title}
            </h1>
            <Installation codeString={step.code} />
          </div>
        ))}
        <div id="space" className="my-5 text-zinc-950">
          .
        </div>
      </div>
    </div>
  );
};

export default ReactDestBtn;
