import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/utils";
import Image from "next/image";

export const FeaturedPosts = async () => {
  const { data } = await api("posts", {
    limit: 3,
    include: "tags,authors",
    order: "published_at DESC",
  });

  return (
    <section className="mx-5 mb-[7vh]">
      <h1 className="text-xs font-semibold">FEATURED POSTS</h1>
      <div className="m-auto mt-5 relative rounded-xl overflow-hidden pt-[6vh] pb-[7vw] px-[8vh] bg-[#f8f6f8] h-[50vh]">
        <img
          alt="bg-img"
          src={
            "https://reiro.fueko.net/content/images/size/w1600/2022/10/photo-1519923834699-ef0b7cde4712.jpeg"
          }
          className="m-auto w-full absolute top-0 global-cover right-0 left-0 cover-mask-featured max-h-[800px] opacity-[.18]"
        />
      </div>
    </section>
  );
};
