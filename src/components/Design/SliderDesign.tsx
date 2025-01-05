import React from "react";

const SliderDesign: React.FC = () => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      className="w-64 border-none rounded-lg cursor-pointer bg-neutral-950 appearance accent-zinc-950"
    />
  );
};

export default SliderDesign;
