export const LoadingBtnReact = `import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const LoadingButton: React.FC = () => {
  const spinnerStyle = {
    animation: "spin 3s linear infinite",
  };

  const keyframes = "
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  ";

  return (
    <>
      <style>{keyframes}</style>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-zinc-300">
        <BiLoaderCircle color="#000" size={20} style={spinnerStyle} />
        <span className="font-semibold text-zinc-800">Loading...</span>
      </button>
    </>
  );
};

export default LoadingButton;
`;
