import React, { useState } from "react";
import { BiPaste } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdSlideshow } from "react-icons/md";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import PasteContainer from "../container/PasteContainer";
import AltDialog from "../Design/AltDialog";
import HtmlAlert from "../container/HtmlContainer/HtmlAlert";
import CssAlert from "../container/CssContainer/CssAlert";
import ReactAlert from "../container/ReactContainer/ReactAlert";

const AlertDialog: React.FC = () => {
  const [activeTab, setActiveTab] = useState("preview");

  const copyCode = `import React, { useState } from "react";

const AltDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAlertDialog = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleContinue = () => {
    console.log("Account deleted");
    closeModal();
  };

  return (
    <div className="relative">
      <button
        onClick={handleAlertDialog}
        className="border-[1px] py-2 px-4 hover:bg-zinc-900 border-zinc-800 rounded"
      >
        Show Alert
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div
            className="py-5 px-8 bg-neutral-950 border-[1px] border-zinc-700 rounded-lg w-2/6 transition-transform duration-300 ease-in-out transform scale-100"
            style={{
              transform: isModalOpen ? "scale(1.1)" : "scale(1)",
              transitionDelay: "0.2s",
            }}
          >
            <h1 className="mb-2 text-xl font-medium">
              Are you absolutely sure?
            </h1>
            <p className="mb-4 text-sm text-zinc-500">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 text-sm py-2.5 border-[1px] border-zinc-800 rounded-md hover:bg-neutral-900"
              >
                Cancel
              </button>
              <button
                onClick={handleContinue}
                className="px-4 text-sm py-2.5 text-zinc-950 bg-zinc-100 border-[1px] border-zinc-800 rounded-md hover:bg-neutral-200"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AltDialog;
`;

  return (
    <div className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-1.5 text-3xl font-bold">Alert Dialog</h1>
        <p className="text-zinc-300">
          A modal that grabs the user's attention with important content
          requiring a response.
        </p>
      </div>

      <div
        id="tabs-container"
        className="flex items-start justify-between gap-5 mt-14"
      >
        <div id="left-tab-container" className="flex gap-2">
          <div
            id="tab-1"
            onClick={() => setActiveTab("preview")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "preview" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            <MdSlideshow size={15} /> Preview
          </div>
          <div
            id="tab-2"
            onClick={() => setActiveTab("code")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "code" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            <HiOutlineCommandLine size={15} /> Code
          </div>
          <div
            id="tab-2"
            onClick={() => setActiveTab("paste")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "paste" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            <BiPaste size={15} /> Paste to check
          </div>
        </div>
        <div id="right-tab-container">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/workmdirfan29/FreeComponentsLib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-all hover:underline text-zinc-100 hover:text-sky-500"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/mdirfan_23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-all hover:underline text-zinc-100 hover:text-sky-500"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div id="container">
        {activeTab === "preview" && (
          <PreviewContainer
            copyCode={copyCode}
            btnZidx={"z-20 bg-zinc-900 top-5"}
            className={"h-[50vh]"}
          >
            <AltDialog />
          </PreviewContainer>
        )}

        {activeTab === "code" && (
          <CodeContainer
            tabs={["html", "css", "reactjs"]}
            components={[<HtmlAlert />, <CssAlert />, <ReactAlert />]}
          />
        )}
        {activeTab === "paste" && <PasteContainer />}
      </div>
    </div>
  );
};

export default AlertDialog;
