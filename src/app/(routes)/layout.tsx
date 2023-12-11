import { Header } from "@/components/Header";
import Image from "next/image";

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="cover-mask" />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default RouteLayout;
