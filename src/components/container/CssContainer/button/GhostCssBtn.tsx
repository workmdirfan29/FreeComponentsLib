import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { ghostCssCode } from "../../../data/css/button/ghostCssCode";
import Css from "../../../code/Css";

const SocialLinks: React.FC = () => {
  const links = [
    {
      href: "https://github.com/workmdirfan29/FreeComponentsLib",
      icon: <FaGithub size={25} />,
    },
    {
      href: "https://x.com/mdirfan_23",
      icon: <FaTwitter size={25} />,
    },
  ];

  return (
    <div id="social-links" className="flex items-center gap-3">
      {links.map((link, index) => (
        <a
          key={index}
          className="hover:text-sky-500"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

const GhostCssBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={ghostCssCode} />
      </div>

      {/* Content Section */}
      <section id="content-container" className="mt-10">
        <h1 className="text-2xl font-semibold text-sky-500">Installation</h1>
        <hr className="my-3 opacity-50 bg-zinc-800" />

        {/* Copy Instruction */}
        <article id="copy">
          <p>
            No need to install anything. Just copy and paste into your project.
          </p>

          {/* Social Links */}
          <div id="social" className="mt-5">
            <h2 className="my-3">Follow for more:</h2>
            <SocialLinks />
          </div>
        </article>
      </section>
    </div>
  );
};

export default GhostCssBtn;
