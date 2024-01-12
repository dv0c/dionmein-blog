import { FC } from "react";

import "@/styles/body.scss";

interface ContentProps {
  body: any;
}

const Content: FC<ContentProps> = ({ body }) => {
  return (
    <div className="post-container max-w-2xl">
      <section
        className="gh-content gh-canvas is-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default Content;
