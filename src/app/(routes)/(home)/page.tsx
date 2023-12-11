import { SearchBar } from "@/components/SearchBar";
import { Heading } from "./_components/heading";
import { PopularTags } from "./_components/popular-tags";

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
    </div>
  );
};

export default page;
