import { PrimaryAuthor } from "@/types";
import { FC } from "react";

interface CreatorProps {
  author: PrimaryAuthor;
}

const Creator: FC<CreatorProps> = ({ author }) => {
  return <div>{author.name}</div>;
};

export default Creator;
