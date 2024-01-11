import { FC } from "react";
import Heading from "./_components/heading";
import { api } from "@/lib/api";
import { Post, PrimaryAuthor, Tag } from "@/types";
import Creator from "./_components/Creator";
import Share from "./_components/Share";
import { notFound } from "next/navigation";
import { env } from "process";

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
    tags: Tag[];
    primary_author: PrimaryAuthor;
  };

  if (body.primary_author === undefined || body.id === undefined)
    return notFound();

  console.log(body.tags);

  return (
    <div className="mt-10">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <Heading
          title={body.title}
          description={body.excerpt}
          tags={body.tags}
        />
        <div className="my-5 flex justify-between flex-wrap items-center">
          <Creator
            author={body.primary_author}
            date={{ createdAt: body.created_at, read: body.reading_time }}
          />
          <Share
            url={env.NEXT_PUBLIC_DOMAIN + "/article/" + body.slug}
            post={body}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
