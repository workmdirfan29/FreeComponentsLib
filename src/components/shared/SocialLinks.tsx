import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

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

export default SocialLinks;
