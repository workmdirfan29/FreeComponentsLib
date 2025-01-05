import AeroplaneCss from "../container/CssContainer/fancyBtn/AeroplaneCss";
import AeroplaneHtml from "../container/HtmlContainer/fancyBtn/AeroplaneHtml";
import AeroplaneJSX from "../container/ReactContainer/fancyBtn/AeroplaneJSX";

import AeroplaneBtn from "../Design/facnyBtn/AeroplaneBtn";

const fancyBtnSection = [
  {
    title: "",
    copyCode: `import React from "react";
    
    const AeroplaneBtn: React.FC = () => {
      return (
        <button className="relative flex items-center justify-center w-24 h-24 text-xs font-extrabold text-white uppercase transition duration-200 rounded-full bg-zinc-800 hover:bg-white hover:text-black group">
          <svg
            className="absolute w-12 h-12 transition duration-200 group-hover:fill-black fill-white"
            viewBox="0 0 241.016 241.016"
          >
            <path
              d="M210.818,96.393l-49.202,1.644L108.753,0H83.279c-2.791,0-5.052,2.259-5.052,5.055l27.504,94.843l-50.097,2.037
              c-4.312,0.004-8.372,0.732-11.97,1.997l-18.925-32.14L8.857,71.788c-2.105,0.004-3.811,1.708-3.811,3.814l13.848,42.361v5.09
              L5.047,165.414c-0.002,2.105,1.704,3.814,3.809,3.814l15.885,0.004l19.257-32.713c3.514,1.197,7.455,1.885,11.637,1.885
              l50.288,2.046l-27.698,95.516c0,2.795,2.259,5.05,5.052,5.05h25.474l53.227-98.696l48.84,1.631
              c13.894,0,25.152-10.652,25.152-23.779C235.971,107.041,224.713,96.393,210.818,96.393z"
            ></path>
          </svg>
          <span className="absolute inset-0 transition duration-200 transform scale-50 border-4 border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100"></span>
        </button>
      );
    };
    
    export default AeroplaneBtn;
    `,
    PreviewComponent: AeroplaneBtn,
    codeComponents: [<AeroplaneHtml />, <AeroplaneCss />, <AeroplaneJSX />],
  },
];

export default fancyBtnSection;
