import { FC } from "react";

interface headingProps {
  title: string;
  description: string;
  tags: any;
}

const Heading: FC<headingProps> = ({ description, tags, title }) => {
  return (
    <div>
      {title}
      {description}
      {JSON.stringify(tags)}
    </div>
  );
};

export default Heading;
