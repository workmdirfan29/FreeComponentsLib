import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const IntroPage: React.FC = () => {
  return (
    <div className="text-white bg-zinc-950">
      {/* Intro Section */}
      <div className="px-4 md:px-8">
        <h1 className="mb-3 text-2xl font-semibold text-white">Introduction</h1>
        <h2 className="mb-2 text-xl font-medium text-white opacity-80">
          Stunning, ready-to-use components.
        </h2>
        <p className="mb-5 text-md text-zinc-400">
          Effortlessly integrate into your apps. Fully accessible, endlessly
          customizable, and built with open-source principles.
        </p>

        {/* Tags */}
        <div className="flex gap-5 text-sm text-sky-500">
          <span className="transition-all hover:text-sky-600">Accessible</span>
          <span className="transition-all hover:text-sky-600">
            Customizable
          </span>
          <span className="transition-all hover:text-sky-600">Open Source</span>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t-2 border-sky-500 opacity-30" />
      </div>

      {/* Purpose and Info Section */}
      <div id="info" className="px-4 py-2 md:px-8">
        <h2 className="mb-4 text-xl font-semibold text-white opacity-90">
          Main Purpose:
        </h2>
        <p className="mb-6 text-md text-zinc-400">
          The primary goal of building this project is to assist beginners who
          may not be familiar with how to install and integrate libraries into
          their projects. That's why we provide ready-to-use, copy-paste
          solutions that don't require any complex setup.
        </p>

        <h2 className="mb-4 text-xl font-semibold text-white opacity-90">
          Components Offered:
        </h2>
        <p className="mb-6 text-md text-zinc-400">
          We offer a collection of components with pure HTML, CSS, and
          JavaScript code that can be directly integrated into your projects.
          Additionally, we provide components styled with React.js and Tailwind
          CSS, allowing you to easily incorporate them into modern web
          development frameworks and workflows.
        </p>

        <p className="text-md text-zinc-400">
          Just copy the code, customize it as needed, and integrate it directly
          into your project. No dependency installation is required!
        </p>
        {/* Divider */}
        <hr className="my-6 border-t-2 border-sky-500 opacity-30" />
      </div>

      <div id="social" className="px-4 py-2 md:px-8">
        <h2 className="mb-5 text-xl font-semibold text-white opacity-90 ">
          Social Media Links:
        </h2>
        <div className="flex items-center gap-5 mb-2">
          <a
            href="https://github.com/workmdirfan29/FreeComponentsLib"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg transition-all hover:underline text-zinc-400 hover:text-sky-500"
          >
            Github
            <FaGithub size={25} />
          </a>
          <a
            href="https://x.com/mdirfan_23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg transition-all hover:underline text-zinc-400 hover:text-sky-500"
          >
            Twitter <FaTwitter size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
