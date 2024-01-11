import { formatTimeToNow } from "@/lib/utils";
import { PrimaryAuthor } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CreatorProps {
  author: PrimaryAuthor;
  date: {
    createdAt: string;
    read: number;
  };
}

const Creator: FC<CreatorProps> = ({ author, date }) => {
  return (
    <Link
      href={"/author/" + author.slug}
      className="flex items-center gap-x-2 group max-w-fit"
    >
      <Image
        src={author.profile_image}
        alt={author.name}
        width={45}
        height={45}
        className="object-cover group-hover:-translate-y-[1px] relative transition rounded-full min-w-[45px] min-h-[45px] w-[45px] h-[45px]"
      />
      <h6 className="text-sm text-muted-foreground">
        <span className="flex gap-x-1 items-center">
          <span className="text-xs">by</span>
          <div className="group-hover:text-semibold group-hover:underline cursor-pointer">
            {author.name}
          </div>
        </span>
        <p className="text-xs">
          {formatTimeToNow(new Date(date.createdAt))} ∙ {date.read} mins read
        </p>
      </h6>
    </Link>
  );
};

export default Creator;
