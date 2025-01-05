import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";

interface PreviewContainerProps {
  children: React.ReactNode;
  className: string;
  copyCode: string;
  btnZidx?: string;
}

const PreviewContainer: React.FC<PreviewContainerProps> = ({
  children,
  className,
  copyCode,
  btnZidx,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(copyCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      id="container"
      className={`relative border-[1px] border-zinc-700/90 mt-2 rounded-lg w-full flex justify-center items-center ${className} bg-black`}
    >
      <div
        id="Preview"
        className={`absolute ${btnZidx} flex items-center border-[1px] border-zinc-900 gap-2 p-1.5 rounded cursor-pointer right-5 top-5"
        id="copy-code`}
        onClick={handleCopy}
      >
        {isCopied ? (
          <span className="text-[10px] font-semibold flex items-center gap-1">
            Copied <IoIosCheckmark size={18} />
          </span>
        ) : (
          <span className="text-[10px] font-semibold flex items-center gap-1">
            JSX CODE <IoCopyOutline size={13} />
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default PreviewContainer;
