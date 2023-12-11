import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="pt-[2.5vh] flex min-h[60px] items-center gap-7 pr-[5vw] pl-[5vh]">
        <Image src={"/reiro.svg"} alt="logo" width={85} height={34} />
        <div className="font-semibold">Home</div>
      </div>
    </header>
  );
};
