import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { LuCheck } from "react-icons/lu";
import { FiClipboard } from "react-icons/fi";

interface InstallationProps {
  codeString: string;
}

const Installation: React.FC<InstallationProps> = ({ codeString }) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  return (
    <div
      id="installation"
      className="border-[1px] bg-zinc-800 relative p-1 flex items-center gap-5 border-zinc-800 rounded-md"
    >
      {copy ? (
        <button className="absolute z-10 p-1.5 right-2 top-2 cursor-pointer border-[1px] border-zinc-900 hover:bg-zinc-950 rounded">
          <LuCheck size={15} color="#4CAF50" />
        </button>
      ) : (
        <button
          className="absolute p-1.5 right-2 top-2 cursor-pointer border-[1px] border-zinc-900 hover:bg-zinc-950 rounded"
          onClick={() => copyToClipboard(codeString)}
        >
          <FiClipboard size={16} />
        </button>
      )}
      <SyntaxHighlighter
        language="js"
        style={atomOneDark}
        customStyle={{
          backgroundColor: "transparent",
          borderRadius: "5px",
        }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Installation;
