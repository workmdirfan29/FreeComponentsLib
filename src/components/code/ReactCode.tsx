import React, { useState } from "react";
import { LuCheck } from "react-icons/lu";
import { FiClipboard } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ReactCodeProps {
  btnReactCode: string;
}

const ReactCode: React.FC<ReactCodeProps> = ({ btnReactCode }) => {
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
          onClick={() => copyToClipboard(btnReactCode)}
        >
          <FiClipboard size={16} />
        </button>
      )}
      <SyntaxHighlighter
        language="jsx"
        style={atomOneDark}
        customStyle={{
          backgroundColor: "transparent",
          borderRadius: "5px",
        }}
        wrapLongLines={true}
      >
        {btnReactCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default ReactCode;
