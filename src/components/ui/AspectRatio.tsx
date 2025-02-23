import React from "react";
import BaseTabLayout from "../shared/BaseTabLayout";
import { MdSlideshow } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import AspRatio from "../Design/AspectRatio";
import HtmlAspect from "../container/HtmlContainer/HtmlAspect";
import CssAspect from "../container/CssContainer/CssAspect";
import ReactAspect from "../container/ReactContainer/ReactAspect";
import { aspectReactCode } from "../data/React/aspectReactCode";

const AspectRatio: React.FC = () => {
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
        }
      ]}
      content={{
        preview: (
          <PreviewContainer
            className={"h-[70vh]"}
            copyCode={aspectReactCode}
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
      }}
    />
  );
};

export default AspectRatio;
