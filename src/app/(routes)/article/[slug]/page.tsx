import { FC } from "react";
import Heading from "./_components/heading";
import { api } from "@/lib/api";
import { Post, PrimaryAuthor, Tag } from "@/types";
import Creator from "./_components/Creator";
import Share from "./_components/Share";
import { notFound } from "next/navigation";
import { env } from "process";
import Thumbnail from "./_components/Thumbnail";
import Content from "./_components/Content";
import Sidebar from "./_components/Sidebar";
import RelatedPosts from "./_components/RelatedPosts";
import { PostContainer } from "../../(home)/_components/PostContainer";

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

  if (body?.primary_author == undefined || body?.id == undefined)
    return notFound();

  return (
    <div className="mt-10 px-5 sm:px-10 lg:px-0">
      <div className="max-w-5xl mx-auto overflow-hidden">
        <Heading
          title={body.title}
          description={body.excerpt}
          tags={body.tags}
        />
        <div className="my-5 flex gap-3 flex-wrap justify-between items-center">
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
      <div className="max-w-[90rem] mx-auto overflow-hidden mt-5">
        <Thumbnail
          credits={body.feature_image_caption}
          alt={body.feature_image_alt as string}
          image={body.feature_image}
        />
      </div>
      <div className="max-w-5xl mx-auto mt-10 overflow-hidden">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className=" w-full sm:w-[80%]">
            <Content body={body.html} />
          </div>
          <div className="sm:w-[30%] mt-10 sm:mt-0 w-full">
            <Sidebar data={data.posts[0]} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <RelatedPosts category={body.tags[0].name} />
      </div>
    </div>
  );
};

export default page;
