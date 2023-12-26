import Post from "@/components/Post";
import { api } from "@/lib/utils";
import { Post as _Post } from "@/types";

const PreviousPosts = async ({}) => {
  const { data } = await api("posts", {
    limit: 10,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5 mb-[7vh]">
      <h1 className="text-xs font-semibold">PREVIOUS POSTS</h1>
      <div className="mt-5">
        <PostWrapper>
          {data.posts.map((i: _Post, key: number) => (
            <Post.Default post={i as any} key={key} description />
          ))}
        </PostWrapper>
      </div>
    </section>
  );
};

export default PreviousPosts;

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid col-span-2 grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
