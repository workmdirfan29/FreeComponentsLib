export const btnWithIconReactCode = `import React from "react";

const WithIconButton = () => {
  return (
    <button className="flex items-center px-3 py-2 space-x-3 transition duration-300 ease-in-out transform rounded-lg shadow-md text-black/90 bg-gray-50 hover:bg-gray-300 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>

      <span className="font-semibold">Add Items</span>
    </button>
  );
};

export default WithIconButton;
`;
