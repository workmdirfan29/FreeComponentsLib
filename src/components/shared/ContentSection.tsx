import React from "react";

import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

interface ContentSectionProps {
  contentText?: string;
  redirectLink?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  contentText,
  redirectLink,
}) => {
  return (
    <section id="content-container" className="mt-10">
      <h1 className="text-2xl font-bold text-sky-600">Installation.</h1>
      <hr className="my-3 opacity-50 bg-zinc-800" />
      <p id="content-para">
        {contentText ||
          "No need to install anything. Just copy and paste into your project."}
        {redirectLink && (
          <span>
            {" "}
            <Link
              to={redirectLink}
              className="underline text-sky-500 hover:text-sky-400"
            >
              Read Steps
            </Link>
          </span>
        )}
      </p>
      <div id="social" className="mt-5">
        <h2 className="my-3 font-medium text-sky-500">Follow for more:</h2>
        <SocialLinks />
      </div>
    </section>
  );
};

export default ContentSection;
