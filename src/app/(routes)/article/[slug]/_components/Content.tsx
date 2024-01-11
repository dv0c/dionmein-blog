import { FC } from "react";

import "@/styles/body.scss";

interface ContentProps {
  body: any;
}

const Content: FC<ContentProps> = ({ body }) => {
  return (
    <div className="post-container ">
      <div
        className={"post-content"}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default Content;
