import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="z-50 text-gray-300 bg-black">
      {/* Main Footer */}
      <div className="container px-6 py-12 mx-auto md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Branding Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4">
              <img
                src={Logo}
                alt="Logo"
                className="transition-transform transform w-14 h-14 hover:scale-110"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Free Components lib.
                </h1>
                <p className="text-sm font-medium text-gray-400">
                  Modern & Accessible
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your go-to library for free, high-quality templates and components
              to kickstart your projects.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Explore</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://freecomponentslib.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 transition hover:text-sky-500"
                >
                  Components Library
                </a>
              </li>
              <li>
                <a
                  href="https://freetemplatecomp.vercel.app/templates/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 transition hover:text-sky-500"
                >
                  Free Templates
                </a>
              </li>
              <li>
                <a
                  href="https://unlokthmify.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 transition hover:text-sky-500"
                >
                  Unlok Thmify
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Connect With Us
            </h2>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/workmdirfan29/FreeComponentsLib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition bg-gray-800 rounded-full hover:bg-sky-500"
              >
                <FaGithub
                  size={24}
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a
                href="https://x.com/mdirfan_23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition bg-gray-800 rounded-full hover:bg-sky-500"
              >
                <FaTwitter
                  size={24}
                  className="text-gray-300 hover:text-white"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Follow us for updates and exciting new releases!
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 border-t border-gray-800">
        <div className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Free Components Lib. Built with ❤️ by{" "}
          <a
            href="https://x.com/mdirfan_23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            @mdirfan_23
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
