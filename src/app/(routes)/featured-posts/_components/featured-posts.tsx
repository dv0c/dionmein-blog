import Post from "@/components/Post";
import { Post as P } from "@/types";
import { FC } from "react";

interface FeaturedPosts {
  data: P[] & {
    posts: Post[];
  };
}

const FeaturedPosts: FC<FeaturedPosts> = ({ data }) => {
  return (
    <div className="mt-5">
      <PostWrapper>
        {data.posts.map((item: any, i: number) => (
          <Post.Default key={i} post={item} />
        ))}
      </PostWrapper>
    </div>
  );
};

export default FeaturedPosts;

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid col-span-2 grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
