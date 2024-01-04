import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="pt-[2.5vh] flex min-h[60px] items-center gap-7 pr-[5vw] pl-[5vh]">
        <Link href={"/"}>
          <Image src={"/reiro.svg"} alt="logo" width={85} height={34} />
        </Link>
        <div className="font-semibold">Home</div>
      </div>
    </header>
  );
};
