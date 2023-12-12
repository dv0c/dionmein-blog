import Post from "@/components/Post";
import { api } from "@/lib/utils";

export const WhatsNew = async () => {
  const { data } = await api("posts", {
    limit: 1,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5">
      <h1 className="text-xs font-semibold">WHAT'S NEW?</h1>
      <div className="flex m-auto gap-10 mt-5 flex-wrap sm:flex-nowrap">
        <Post post={data.posts[0]} />
        <div className="w-[423px]">More Articles</div>
      </div>
    </section>
  );
};
