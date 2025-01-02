import React from "react";
import SocialLinks from "./SocialLinks";

const ContentSection: React.FC = () => {
  return (
    <section id="content-container" className="mt-10">
      <h1 className="text-2xl font-semibold text-sky-500">Installation</h1>
      <hr className="my-3 opacity-50 bg-zinc-800" />

      <article id="copy">
        <p>
          No need to install anything. Just copy and paste into your project.
        </p>

        <div id="social" className="mt-5">
          <h2 className="my-3">Follow for more:</h2>
          <SocialLinks />
        </div>
      </article>
    </section>
  );
};

export default ContentSection;
