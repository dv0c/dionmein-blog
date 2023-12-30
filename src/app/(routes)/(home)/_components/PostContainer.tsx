"use client";
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { PostsWithMeta, Post as _Post } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export const PostContainer = () => {
  const [data, setData] = useState<_Post[]>();
  const [meta, setMeta] = useState<any>();
  const [isButtonLoading, setButtonLoading] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    api("posts", {
      limit: 10,
      include: "tags,authors",
      order: "published_at DESC",
    }).then(({ data }) => {
      setData([...data.posts]);
      setMeta(data.meta);
      setLoading(false);
    });
  }, []);

  const loadMore = async () => {
    setButtonLoading(true);
    await api("posts", {
      page: meta?.pagination?.next,
      limit: 10,
      include: "tags,authors",
      order: "published_at DESC",
    }).then(({ data: res }) => {
      setData([...data!, ...res.posts]);
      setMeta(res.meta);
      router.refresh();
      setButtonLoading(false);
      console.log(meta);
    });
  };

  return (
    <div className="mt-5">
      <PostWrapper>
        {!isLoading ? (
          <>
            {data?.map((i: _Post, key: number) => (
              <Post.Default post={i as _Post & any} key={key} description />
            ))}
          </>
        ) : (
          <div>
            <Loader2 className="animate-spin" size="20" />
          </div>
        )}
      </PostWrapper>
      {meta?.pagination?.page !== meta?.pagination?.pages && (
        <div className="flex items-center justify-center mt-10">
          <Button
            disabled={isButtonLoading}
            onClick={loadMore}
            className="rounded-full pt-[2em] border-none h-10 pb-[2em] w-[150px] bg-[#f9c345] text-black hover:bg-[#fcd780fd]"
          >
            {!isButtonLoading ? (
              "Load more"
            ) : (
              <Loader2 className="animate-spin" size={18} />
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid col-span-2 grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
