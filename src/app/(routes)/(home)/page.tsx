import { SearchBar } from "@/components/SearchBar";
import { Heading } from "./_components/heading";
import { PopularTags } from "./_components/popular-tags";
import { WhatsNew } from "./_components/whats-new";

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
    </div>
  );
};

export default page;
