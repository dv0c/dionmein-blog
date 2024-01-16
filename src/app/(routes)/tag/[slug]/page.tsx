import { api } from "@/lib/api";
import { FC } from "react";

interface pageProps {
  params: {
    slug: string;
  };
}
const page: FC<pageProps> = async ({ params }) => {
  const { data } = await api("tags", {
    filter: "slug:" + params.slug,
    include: "posts,authors",
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
