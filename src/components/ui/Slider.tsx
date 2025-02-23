import React from "react";
import BaseTabLayout from "../shared/BaseTabLayout";
import { MdSlideshow } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import SliderDesign from "../Design/SliderDesign";
import { sliderJSXCode } from "../data/React/sliderJSXCode";
import HtmlSlider from "../container/HtmlContainer/HtmlSlider";
import CssSlider from "../container/CssContainer/CssSlider";
import ReactSlider from "../container/ReactContainer/ReactSlider";

const Slider: React.FC = () => {
  return (
    <BaseTabLayout
      title="Slider"
      description="A Modern slider lets users choose a value from a set range."
      tabs={[
        { label: "Preview", icon: <MdSlideshow size={15} />, key: "preview" },
        {
          label: "Code",
          icon: <HiOutlineCommandLine size={15} />,
          key: "code",
        },
      ]}
      content={{
        preview: (
          <PreviewContainer
            className={"h-[55vh]"}
            copyCode={sliderJSXCode}
            btnZidx="z-20 bg-zinc-900 top-5"
          >
            <SliderDesign />
          </PreviewContainer>
        ),
        code: (
          <CodeContainer
            tabs={["html", "css", "jsx"]}
            components={[<HtmlSlider />, <CssSlider />, <ReactSlider />]}
          />
        )
      }}
    />
  );
};

export default Slider;
