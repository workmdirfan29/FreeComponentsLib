import React from "react";

const SliderDesign: React.FC = () => {
  return (
    <input
      min="0"
      max="100"
      type="range"
      step="1"
      className="w-64 border-none rounded-lg cursor-pointer bg-neutral-950 appearance accent-zinc-950"
    />
  );
};

export default SliderDesign;
