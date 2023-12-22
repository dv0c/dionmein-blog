import { FrauncesFont } from "@/lib/fonts";
import getBase64, { cn, formatTimeToNow } from "@/lib/utils";
import { Post, Tag } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  description?: boolean;
  post: Post & {
    tags: Tag[];
    authors: any;
  };
}

const Post = {
  Big: async ({ post }: PostProps) => {
    const blurImage = await getBase64(post.feature_image);

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
              priority
              placeholder="blur"
              blurDataURL={blurImage}
            />
          </Link>
        </div>
        <div>
          <Tags tags={post.tags} />
        </div>
        <h1
          className={cn(
            "max-w-[95%] line-clamp-3 mt-5 text-[2rem] md:text-[4rem] font-bold hover:underline underline-offset-[3px] decoration-2",
            FrauncesFont.className
          )}
          style={{ lineHeight: "1.2" }}
        >
          <Link href={"/article/" + post.slug}>{post.title}</Link>
        </h1>
        <p className="text-muted-foreground hidden sm:block sm:text-2xl line-clamp-6 mt-5 max-w-[80%]">
          {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
        </p>
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <Image
              src={post.authors[0].profile_image || ""}
              width={45}
              height={45}
              className="bg-gray-400 object-cover min-w-[45px] min-h-[45px] rounded-full border"
              alt={post.authors[0].slug}
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                by {post.authors[0].name}
              </span>
              <span className="text-xs">
                {formatTimeToNow(new Date(post.created_at))} ∙{" "}
                {post.reading_time} mins read
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  },
  Default: async ({ post, description }: PostProps) => {
    const blurImage = await getBase64(post.feature_image);
    return (
      <article className="w-full h-auto">
        <FlexWrapper>
          <div className="relative hover:-translate-y-2 transition-all duration-200">
            <Link href={"/article/" + post.slug}>
              <Image
                className="object-cover rounded-2xl h-full max-w-[100px] sm:max-w-[100%] max-h-[250px] aspect-square sm:aspect-auto sm:max-h-[300px]"
                src={post.feature_image}
                alt={post.title}
                width={1920}
                height={300}
                priority
                placeholder="blur"
                blurDataURL={blurImage}
              />
            </Link>
          </div>
          <div className="sm:block hidden">
            <Tags tags={post.tags} />
          </div>
          <div className="flex-col">
            <h1
              className={cn(
                "max-w-[95%] flex-1 line-clamp-2 mt-5 text-[1.3rem] md:text-[2rem] font-bold hover:underline underline-offset-[3px] decoration-2",
                FrauncesFont.className
              )}
              style={{ lineHeight: "1.2" }}
            >
              <Link href={"/article/" + post.slug}>{post.title}</Link>
            </h1>
            {description && (
              <p className="text-muted-foreground sm:text-xl line-clamp-3 mt-5 max-w-[80%]">
                {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
              </p>
            )}
            <div className="mt-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Image
                  src={post.authors[0].profile_image || ""}
                  width={25}
                  height={25}
                  className="bg-gray-400 hidden sm:block object-cover min-w-[25px] min-h-[25px] rounded-full border"
                  alt={post.authors[0].slug}
                />
                <div className="flex flex-col">
                  <span className="text-xs">by {post.authors[0].name}</span>
                </div>
              </div>
            </div>
          </div>
        </FlexWrapper>
      </article>
    );
  },
  Featured: async ({ post, description }: PostProps) => {
    const blurImage = await getBase64(post.feature_image);
    return (
      <article className="w-full h-auto bg-[#f9c345] p-5 pb-10 rounded-2xl hover:-translate-y-2 transition-all duration-200">
        <div className="relative">
          <Link href={"/article/" + post.slug}>
            <Image
              className="object-cover rounded-lg h-full max-h-[200px] min-h-[200px] aspect-square sm:aspect-auto"
              src={post.feature_image}
              alt={post.title}
              width={1920}
              height={300}
              priority
              placeholder="blur"
              blurDataURL={blurImage}
            />
          </Link>
        </div>
        <h1
          className={cn(
            "max-w-[95%] line-clamp-2 mt-5 text-[1rem] md:text-[1.5rem] font-bold hover:underline underline-offset-[3px] decoration-2",
            FrauncesFont.className
          )}
          style={{ lineHeight: "1.2" }}
        >
          <Link href={"/article/" + post.slug}>{post.title}</Link>
        </h1>
        {description && (
          <p className="text-muted-foreground sm:text-xl line-clamp-3 mt-5 max-w-[80%]">
            {post.custom_excerpt ? post.custom_excerpt : post.excerpt}
          </p>
        )}
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xs">by {post.authors[0].name}</span>
            </div>
          </div>
        </div>
      </article>
    );
  },
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

const FlexWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3  sm:block">{children}</div>
);
