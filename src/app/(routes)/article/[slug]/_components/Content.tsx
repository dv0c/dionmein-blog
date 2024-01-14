import { FC } from "react";

import "@/styles/body.scss";

interface ContentProps {
  body: any;
}

const Content: FC<ContentProps> = ({ body }) => {
  return (
    <div className="post-container">
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default Content;
