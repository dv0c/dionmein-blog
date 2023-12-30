import { api } from "@/lib/api";
import { PostContainer } from "./PostContainer";

const PreviousPosts = async () => {
  const { data } = await api("posts", {
    limit: 10,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5 mb-[7vh]">
      <h1 className="text-xs font-semibold">PREVIOUS POSTS</h1>
      <PostContainer />
    </section>
  );
};

export default PreviousPosts;
