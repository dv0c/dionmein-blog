import Image from "next/image";
import Link from "next/link";
import { api } from "@/lib/utils";
import { Tag } from "../../../../../types";

export const PopularTags = () => {
  return (
    <section>
      <h3 className="text-xs font-semibold">POPULAR TAGS</h3>
      <div className="mt-3">
        <Tags />
      </div>
    </section>
  );
};

const Tags = async () => {
  const { data } = await api("tags", {
    limit: 7,
    fields: "name,feature_image",
    filter: "feature_image:false",
  });

  return (
    <div className="popular-tags">
      {data.tags.map((item: Tag, i: any) => (
        <Link
          href={"/tag/" + item.name}
          key={i}
          className="relative transition-all hover:-translate-y-1 hover:shadow-xl rounded-3xl"
        >
          <Image
            alt={item.name}
            src={item.feature_image || ""}
            fill
            className="object-cover rounded-3xl"
          />
          <h1 className="absolute bottom-3 left-3">
            <div className="rounded-full font-semibold bg-white text-xs text-center px-3 py-2 shadow">
              {item.name}
            </div>
          </h1>
        </Link>
      ))}
    </div>
  );
};
