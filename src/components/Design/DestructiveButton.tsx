import React from "react";

const DestructiveButton: React.FC = () => {
  return (
    <button className="px-3.5 text-sm font-semibold rounded-md hover:bg-red-800 py-2.5 text-zinc-50 bg-red-900">
      Destructive
    </button>
  );
};

export default DestructiveButton;
