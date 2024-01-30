import { PostContainer } from "@/app/(routes)/(home)/_components/PostContainer";
import Post from "@/components/Post";
import { api } from "@/lib/api";
import { FC } from "react";

interface RelatedPostsProps {
  category: string;
}

const RelatedPosts: FC<RelatedPostsProps> = async ({ category }) => {
  const { data } = await api("posts", {
    limit: 5,
    filter: "tags:" + category,
    include: "tags,authors",
    order: "published_at DESC",
  });
  return (
    <div>
      <PostWrapper>
        {data.posts.map((item: any, i: number) => (
          <Post.Small post={item} key={i} />
        ))}
      </PostWrapper>
    </div>
  );
};

export default RelatedPosts;

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid border-t pt-20 my-10 col-span-2 grid-cols-1 gap-10 md:gap-5 md:grid-cols-2 lg:grid-cols-5">
      {children}
    </div>
  );
};
