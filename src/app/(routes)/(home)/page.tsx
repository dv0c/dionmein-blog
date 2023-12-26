import { SearchBar } from "@/components/SearchBar";
import { Heading } from "./_components/heading";
import { PopularTags } from "./_components/popular-tags";
import { WhatsNew } from "./_components/whats-new";
import { FeaturedPosts } from "./_components/featured-posts";
import PreviousPosts from "./_components/previous-posts";

const page = ({}) => {
  return (
    <div>
      <Heading />
      <div className="flex mt-10 justify-center">
        <SearchBar />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <PopularTags />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <WhatsNew />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <FeaturedPosts />
      </div>
      <div className="mt-20 mx-auto max-w-[var(--max-width-2)]">
        <PreviousPosts />
      </div>
    </div>
  );
};

export default page;
