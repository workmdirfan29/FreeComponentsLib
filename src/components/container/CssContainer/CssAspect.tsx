import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { aspectCssCode } from "../../data/css/aspectCssCode";
import Css from "../../code/Css";

const CssAspect: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={aspectCssCode} />
      </div>

      <div>
        <div id="content-container" className="mt-10">
          <h1 className="text-2xl font-semibold">Installation</h1>
          <hr className="my-3 opacity-50 bg-zinc-800" />
        </div>
        <div id="copy">
          <p>
            No need to install anything. Just copy and paste into your project.
          </p>
          <div id="social">
            <h2 className="my-3">Follow for more: </h2>
            <div id="social-links" className="flex items-center gap-3">
              <a
                className="hover:text-sky-500"
                href="https://github.com/workmdirfan29/FreeComponentsLib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>
              <a
                className="hover:text-sky-500"
                href="https://x.com/mdirfan_23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssAspect;
