import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const font = Fraunces({ subsets: ["latin"] });

export const Heading = () => {
  return (
    <h1 className={cn("hero-title global-title", font.className)}>
      <span>Hey, we’re Reiro.</span> We promote positive culture through{" "}
      <span>inspiring articles</span> on health, design, and web.
    </h1>
  );
};
