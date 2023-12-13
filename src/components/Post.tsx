import { FrauncesFont } from "@/lib/fonts";
import { cn, formatTimeToNow } from "@/lib/utils";
import { Post, Tag } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PostProps {
  post: Post & {
    tags: Tag[];
    authors: any;
  };
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <article className="w-full h-auto">
      <div className="relative hover:-translate-y-2 transition-all duration-200">
        <Link href={"/article/" + post.slug}>
          <Image
            className="object-cover rounded-2xl h-full max-h-[250px] aspect-square sm:aspect-auto sm:max-h-[679px]"
            src={post.feature_image}
            alt={post.title}
            width={1920}
            height={679}
            loading="lazy"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${post.feature_image}&w=1920&q=1`}
          />
        </Link>
      </div>
      <div>
        <Tags tags={post.tags} />
      </div>
      <h1
        className={cn(
          "max-w-[95%]line-clamp-3 mt-5 text-[2rem] md:text-[4rem] font-bold hover:underline underline-offset-[3px] decoration-2",
          FrauncesFont.className
        )}
        style={{ lineHeight: "1.2" }}
      >
        <Link href={"/article/" + post.slug}>{post.title}</Link>
      </h1>
      <p className="text-gray-700 sm:text-2xl line-clamp-6 mt-5 max-w-[80%]">
        {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
      </p>
      <div className="mt-10">
        <div className="flex items-center gap-3">
          <Image
            src={post.authors[0].profile_image || ""}
            width={45}
            height={45}
            className="bg-gray-400 rounded-full border"
            alt={post.authors[0].slug}
          />
          <div className="flex flex-col">
            by {post.authors[0].name}
            <span className="text-xs">
              {formatTimeToNow(new Date(post.created_at))} ∙ {post.reading_time}{" "}
              mins read
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;

const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className="flex items-center gap-x-2 mt-5">
      {tags.map((item, i) => (
        <button
          className="bg-gray-100 transition-all hover:bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold"
          key={i}
        >
          <Link href={"/tag/" + item.name}>{item.name}</Link>
        </button>
      ))}
    </div>
  );
};
