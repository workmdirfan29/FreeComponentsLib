import React from "react";

const PasteContainer: React.FC = () => {
  return (
    <div className="w-full mt-5">
      <h1 className="mb-3 text-xl font-semibold text-white">Paste to Check</h1>
      <textarea
        placeholder="Paste to check..."
        name="paste"
        id="paste"
        className="w-full h-[50vh] p-3 border-[1px] border-zinc-900 rounded-lg bg-transparent text-white placeholder-zinc-500 focus:outline-none resize-none overflow-auto caret-white"
      ></textarea>
    </div>
  );
};

export default PasteContainer;
