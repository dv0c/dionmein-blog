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
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    api("posts", {
      limit: 10,
      include: "tags,authors",
      order: "published_at DESC",
    }).then(({ data }) => {
      setData([...data.posts]);
      setLoading(false);
    });
  }, []);

  const loadMore = async () => {
    try {
      const response = await api("posts", {
        page: meta?.pagination?.next,
        limit: 1,
        include: "tags,authors",
        order: "published_at DESC",
      });

      const { posts: newPosts, meta: newMeta } = response.data;

      // Filter out duplicates based on a unique identifier (e.g., post ID)
      const uniquePosts = newPosts.filter((newPost) => {
        return !data.some((existingPost) => existingPost.id === newPost.id);
      });

      // Update the state with the new posts data, appending to the existing posts
      setData((prevData) => [...prevData, ...uniquePosts]);
      setMeta(newMeta);

      // Refresh the router to reflect the new posts in the URL
      router.refresh();
    } catch (error) {
      console.error("Error fetching more posts:", error);
    }
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
      <div className="flex items-center justify-center">
        <Button
          onClick={loadMore}
          className="rounded-full pt-[2em] border-none h-10 pb-[2em] w-[150px] bg-[#f9c345] text-black hover:bg-[#fcd780fd]"
        >
          Load more
        </Button>
      </div>
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
