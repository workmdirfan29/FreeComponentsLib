import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiClipboard } from "react-icons/fi";
import { LuCheck } from "react-icons/lu";

interface CssProps {
  btnCss: string;
}

const Css: React.FC<CssProps> = ({ btnCss }) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  return (
    <div className="relative overflow-auto w-full h-[50vh] p-2 mt-2 rounded-lg bg-zinc-900">
      {copy ? (
        <button className="absolute p-1.5 right-2 top-2 cursor-pointer border-[1px] border-zinc-800 hover:bg-zinc-800 rounded">
          <LuCheck size={15} color="#4CAF50" />
        </button>
      ) : (
        <button
          className="absolute p-1.5 right-2 top-2 cursor-pointer border-[1px] border-zinc-800 hover:bg-zinc-800 rounded"
          onClick={() => copyToClipboard(btnCss)}
        >
          <FiClipboard size={16} />
        </button>
      )}
      <SyntaxHighlighter
        language="css"
        style={atomOneDark}
        wrapLongLines={true}
        customStyle={{
          backgroundColor: "transparent",
          borderRadius: "5px",
        }}
      >
        {btnCss}
      </SyntaxHighlighter>
    </div>
  );
};

export default Css;
