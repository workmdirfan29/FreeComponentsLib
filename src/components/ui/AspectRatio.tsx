import React from "react";
import BaseTabLayout from "../shared/BaseTabLayout";
import { MdSlideshow } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { BiPaste } from "react-icons/bi";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import PasteContainer from "../container/PasteContainer";
import AspRatio from "../Design/AspectRatio";
import HtmlAspect from "../container/HtmlContainer/HtmlAspect";
import CssAspect from "../container/CssContainer/CssAspect";
import ReactAspect from "../container/ReactContainer/ReactAspect";

const AspectRatio: React.FC = () => {
  const copyCode = `import React from "react";
import AspRat from "../../assets/AspRat.jpg";

const AspectRatio = () => {
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

export default AspectRatio;`;

  return (
    <BaseTabLayout
      title="Aspect Ratio"
      description="Keeps content in a consistent size ratio."
      tabs={[
        { label: "Preview", icon: <MdSlideshow size={15} />, key: "preview" },
        {
          label: "Code",
          icon: <HiOutlineCommandLine size={15} />,
          key: "code",
        },
        { label: "Paste to Check", icon: <BiPaste size={15} />, key: "paste" },
      ]}
      content={{
        preview: (
          <PreviewContainer
            className={"h-[70vh]"}
            copyCode={copyCode}
            btnZidx="z-20 bg-zinc-900 top-5"
          >
            <AspRatio />
          </PreviewContainer>
        ),
        code: (
          <CodeContainer
            tabs={["html", "css", "reactjs"]}
            components={[<HtmlAspect />, <CssAspect />, <ReactAspect />]}
          />
        ),
        paste: <PasteContainer />,
      }}
    />
  );
};

export default AspectRatio;
