import React from "react";
import BaseTabLayout from "../shared/BaseTabLayout";
import { MdSlideshow } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { BiPaste } from "react-icons/bi";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import PasteContainer from "../container/PasteContainer";
import AltDialog from "../Design/AltDialog";
import HtmlAlert from "../container/HtmlContainer/HtmlAlert";
import CssAlert from "../container/CssContainer/CssAlert";
import ReactAlert from "../container/ReactContainer/ReactAlert";

const AlertDialog: React.FC = () => {
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
    <BaseTabLayout
      title="Alert Dialog"
      description="A modal that grabs the user's attention with important content requiring a response."
      tabs={[
        { label: "Preview", icon: <MdSlideshow size={15} />, key: "preview" },
        {
          label: "Code",
          icon: <HiOutlineCommandLine size={15} />,
          key: "code",
        },
        { label: "Paste to Check", icon: <BiPaste size={15} />, key: "paste" },
      ]}
      content={{
        preview: (
          <PreviewContainer
            className="h-[55vh]"
            copyCode={copyCode}
            btnZidx="z-20 bg-zinc-900 top-5"
          >
            <AltDialog />
          </PreviewContainer>
        ),
        code: (
          <CodeContainer
            tabs={["html", "css", "reactjs"]}
            components={[<HtmlAlert />, <CssAlert />, <ReactAlert />]}
          />
        ),
        paste: <PasteContainer />,
      }}
    />
  );
};

export default AlertDialog;
