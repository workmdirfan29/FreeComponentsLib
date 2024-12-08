import React, { useState } from "react";
import { GrClear } from "react-icons/gr";

const PasteContainer: React.FC = () => {
  // Function to calculate the time difference in days
  const isExpired = (timestamp: string) => {
    const savedTime = new Date(timestamp);
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - savedTime.getTime();
    const dayInMillis = 1000 * 60 * 60 * 24; // 1 day in milliseconds
    return timeDiff > dayInMillis * 3; // Return true if more than 3 days have passed
  };

  // Initialize state with code from localStorage if valid
  const [code, setCode] = useState(() => {
    const savedCode = localStorage.getItem("code");
    const savedTimestamp = localStorage.getItem("timestamp");

    if (savedCode && savedTimestamp && !isExpired(savedTimestamp)) {
      return savedCode;
    } else {
      localStorage.removeItem("code");
      localStorage.removeItem("timestamp");
      return "";
    }
  });

  // Handle change in textarea and save to localStorage with timestamp
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);

    const timestamp = new Date().toISOString();
    localStorage.setItem("code", newCode);
    localStorage.setItem("timestamp", timestamp); // Store the current timestamp
  };

  // Handle clearing the content and removing from localStorage
  const handleClear = () => {
    setCode("");
    localStorage.removeItem("code");
    localStorage.removeItem("timestamp");
  };

  return (
    <div className="relative w-full mt-5">
      <div id="noted-data" className="flex items-center justify-between px-2">
        <h1 className="mb-3 text-xl font-semibold text-white">
          Paste to Check
        </h1>
        <p className="text-xs font-medium">3 Days Store Code</p>
      </div>
      <textarea
        onChange={handleChange}
        value={code}
        placeholder="Paste to check..."
        name="paste"
        id="paste"
        className="w-full relative h-[50vh] p-3 border-[1px] border-zinc-900 rounded-lg bg-transparent text-white placeholder-zinc-500 focus:outline-none resize-none overflow-auto caret-white"
      ></textarea>
      <h2
        onClick={handleClear}
        className="absolute flex border-[1px] py-0.5 cursor-pointer border-zinc-900 px-1 rounded text-sm hover:bg-zinc-900 hover:border-zinc-800 items-center gap-2 top-14 right-4"
      >
        clean <GrClear />
      </h2>
    </div>
  );
};

export default PasteContainer;
