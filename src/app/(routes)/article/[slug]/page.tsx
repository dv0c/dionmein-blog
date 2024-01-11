import { FC } from "react";
import Heading from "./_components/heading";
import { api } from "@/lib/api";
import { Post, PrimaryAuthor, Tag } from "@/types";
import Creator from "./_components/Creator";

interface pageProps {
  params: {
    slug: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const { data } = await api("posts", {
    filter: "slug:" + params.slug,
    include: "tags,authors",
  });
  const body = data.posts[0] as Post & {
    tags: Tag;
    primary_author: PrimaryAuthor;
  };
  console.log(body.primary_author);

  return (
    <div className="mt-10">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <Heading
          title={body.title}
          description={body.excerpt}
          tags={body.tags}
        />
        <Creator author={body.primary_author} />
      </div>
    </div>
  );
};

export default page;
