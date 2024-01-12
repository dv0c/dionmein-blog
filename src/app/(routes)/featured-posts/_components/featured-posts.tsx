"use client";
import Post from "@/components/Post";
import { api } from "@/lib/api";
import { PostsWithMeta } from "@/types";
import { FC, useEffect, useState } from "react";
import PaginationSection from "./PaginationSection";
import { Skeleton } from "@/components/ui/skeleton";

interface FeaturedPosts {}

const FeaturedPosts: FC<FeaturedPosts> = () => {
  const [data, setData] = useState<PostsWithMeta>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setClient] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [limit] = useState(10);

  useEffect(() => {
    setClient(true);
    api("posts", {
      limit,
      include: "tags,authors",
      order: "published_at DESC",
      filter: "featured:true",

      page: currentPage,
    }).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [currentPage]);

  return (
    <div className="mt-5">
      {isClient ? (
        <>
          {!isLoading ? (
            <>
              <PostWrapper>
                {data?.posts.map((item: any, i: number) => (
                  <Post.Default key={i} post={item} />
                ))}
              </PostWrapper>
              <div className="mt-10">
                <PaginationSection
                  currentPage={currentPage}
                  postsPerPage={limit}
                  setCurrentPage={setCurrentPage}
                  totalPosts={data?.meta.pagination.total}
                />
              </div>
            </>
          ) : (
            <LoadingSkeleton />
          )}
        </>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
};

export default FeaturedPosts;

const PostWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid col-span-2 grid-cols-1 gap-10 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

const LoadingSkeleton = () => {
  const array = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <PostWrapper>
      {array.map((_, i: number) => (
        <div className="overflow-hidden" key={i}>
          <Skeleton className="rounded-2xl min-w-[120px] h-full w-full max-h-[100%] max-w-[120px] aspect-video sm:max-w-[100%] sm:aspect-auto sm:min-h-[300px] sm:max-h-[300px]" />
          <div className="flex gap-2">
            <Skeleton className="rounded-full h-6 w-20 mt-5" />
            <Skeleton className="rounded-full h-6 w-16 mt-5" />
          </div>
          <Skeleton className="w-[250px] h-4 mt-5" />
          <div className="mt-5 flex gap-2 items-center">
            <Skeleton className="w-[25px] h-[25px] rounded-full" />
            <Skeleton className="w-[100px] h-4" />
          </div>
        </div>
      ))}
    </PostWrapper>
  );
};
