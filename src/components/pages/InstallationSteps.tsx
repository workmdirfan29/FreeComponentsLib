import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { RxCopy } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ToastNotification from "../shared/ToastNotification";

const steps = [
  { title: "Create a New React App with Vite", code: "npm create vite@latest" },
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

const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code).then(() => {
    toast.success("Code copied to clipboard!");
  });
};

const InstallationSteps: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-5 text-white bg-gray-950">
      <div className="flex items-center justify-between mt-14">
        <h1 className="mb-4 text-2xl font-bold text-center text-sky-500">
          Installation Steps:
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-semibold text-sky-50 hover:text-sky-600"
        >
          <CiCircleChevLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      <p className="mb-5 text-lg text-center text-gray-200">
        Follow these steps to set up your React project with Tailwind CSS.
      </p>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative p-6 bg-gray-800 border-l-4 rounded-md shadow-md border-sky-500"
          >
            <h2 className="mb-3 text-xl font-semibold text-gray-100">
              Step {index + 1}: {step.title}
            </h2>

            <div className="relative">
              <pre className="p-4 overflow-x-auto text-sm text-white bg-gray-700 rounded-md">
                {step.code}
              </pre>

              <button
                onClick={() => copyToClipboard(step.code)}
                className="absolute top-3 right-3 text-sky-500 hover:text-sky-400"
              >
                <RxCopy size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastNotification />
    </div>
  );
};

export default InstallationSteps;
