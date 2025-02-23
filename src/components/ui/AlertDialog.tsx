import React from "react";
import BaseTabLayout from "../shared/BaseTabLayout";
import { MdSlideshow } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import AltDialog from "../Design/AltDialog";
import HtmlAlert from "../container/HtmlContainer/HtmlAlert";
import CssAlert from "../container/CssContainer/CssAlert";
import ReactAlert from "../container/ReactContainer/ReactAlert";
import { alertReactCode } from "../data/React/alertReactCode";

const AlertDialog: React.FC = () => {
  return (
    <BaseTabLayout
      title="Alert Dialog"
      description="A modal that grabs the user's attention with important content requiring a response."
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
            className="h-[55vh]"
            copyCode={alertReactCode}
            btnZidx="z-20 bg-zinc-900 top-5"
          >
            <AltDialog />
          </PreviewContainer>
        ),
        code: (
          <CodeContainer
            tabs={["html", "css", "reactjs"]}
            components={[<HtmlAlert />, <CssAlert />, <ReactAlert />]}
          />
        ),
      }}
    />
  );
};

export default AlertDialog;
