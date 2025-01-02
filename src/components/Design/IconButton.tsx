import React from "react";

const IconButton: React.FC = () => {
  return (
    <button className="p-2 border rounded-md outline-none hover:bg-zinc-900 border-zinc-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default IconButton;
