import { FrauncesFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import FeaturedPosts from "./_components/featured-posts";
import { api } from "@/lib/api";
import Pagination from "./_components/Pagination";

const page = async ({}) => {
  const { data } = await api("posts", {
    limit: 3,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <div>
      <h1 className={cn("hero-title global-title", FrauncesFont.className)}>
        <span>Editor's Choice</span>
      </h1>
      <p className="hero-title !mt-1 text-2xl text-muted-foreground">
        A curated list of the most interesting thoughts, stories and ideas
      </p>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <section className="mx-5 mb-[7vh]">
          <h1 className="text-xs font-semibold">10 FEATURED POSTS</h1>
          <FeaturedPosts data={data} />
          <Pagination
            totalPosts={data.meta.pagination.total}
            postsPerPage={3}
            data={data}
          />
        </section>
      </div>
    </div>
  );
};

export default page;
