import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-br from-sky-500 via-zinc-950 to-black">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-center bg-cover opacity-70 bg-gradient-to-r from-black to-zinc-950"></div>

      <div className="relative z-10 px-6 py-8 mt-24 text-center sm:px-12 sm:py-16">
        <h1 className="mb-2 text-3xl font-semibold leading-tight md:text-6xl">
          Unlock Creativity with Our <br />
        </h1>
        <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl">
          Premium <span className="text-sky-600">Templates & Components</span>
        </h2>
        <p className="px-10 mb-10 leading-relaxed text-gray-400 md:px-48 text-md sm:text-xl">
          Access free, high-quality templates and components to speed up your
          web development process. Build faster and better, starting today!
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="/components"
            className="px-8 py-3 font-semibold text-sm text-white uppercase transition duration-300 ease-in-out transform border-[1px] rounded-lg border-sky-600 hover:bg-sky-600 hover:text-white"
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            to="https://freetemplatecomp.vercel.app/"
            className="px-6 py-3 text-sm font-semibold uppercase transition duration-300 ease-in-out transform rounded-lg text-zinc-900 bg-sky-600 hover:bg-sky-700 hover:scale-105"
          >
            Explore Templates
          </Link>
        </div>
      </div>
    </main>
  );
};

export default App;
