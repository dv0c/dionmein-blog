import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div className="pt-[2.5vh] justify-between flex min-h[60px] items-center gap-7 pr-[5vw] pl-[5vh]">
        <Link href={"/"}>
          <Image src={"/reiro.svg"} alt="logo" width={85} height={34} />
        </Link>
        <div className="flex items-center">
          <Button variant={"ghost"}>
            <Search size={20} />
          </Button>
          <Link href={"/"} className="font-semibold">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
};
