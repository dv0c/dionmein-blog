import { cn } from "@/lib/utils";
import { Tag } from "@/types";
import Link from "next/link";

const Tags = ({
  tags,
  className,
  gap = "gap-2",
}: {
  tags: Tag[];
  className?: string;
  gap?: string;
}) => {
  return (
    <div className={cn("flex items-center mt-5 flex-wrap", gap)}>
      {tags.map((item, i) => (
        <button
          className={cn(
            "bg-gray-100 transition-all hover:bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold",
            className
          )}
          key={i}
        >
          <Link href={"/tag/" + item.name}>
            <span className="truncate">{item.name}</span>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default Tags;
