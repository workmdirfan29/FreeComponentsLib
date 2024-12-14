import React from "react";
import AspRat from "../../assets/AspRat.jpg";

const AspectRatio: React.FC = () => {
  return (
    <div className="relative w-full h-full p-2 aspect-w-16 aspect-h-9">
      {/* Use url */}
      {/* <img
        className="object-cover w-full h-full rounded-lg"
        src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="A computer in a room"
      /> */}

      {/* Use downloaded Image */}

      <img
        className="object-cover w-full h-full rounded-lg"
        src={AspRat}
        alt="A computer in a room"
      />
    </div>
  );
};

export default AspectRatio;
