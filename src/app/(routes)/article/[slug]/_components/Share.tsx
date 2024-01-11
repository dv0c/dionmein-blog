import { Twitter } from "lucide-react";
import { FC } from "react";
import { FacebookShareButton, FacebookIcon } from "next-share";
import { Tag } from "@/types";

interface ShareProps {
  url: string;
  tags: Tag[];
}

const Share: FC<ShareProps> = ({ url, tags }) => {
  return (
    <div>
      <FacebookShareButton
        url={url}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={tags.map((i) => i.name).toString()}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <Twitter />
    </div>
  );
};

export default Share;
