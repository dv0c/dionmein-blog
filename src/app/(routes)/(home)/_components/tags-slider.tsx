"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import { Tag } from "@/types";

export const TagsSlider = ({ data }: { data: Tag | any }) => {
  return (
    <Swiper
      className="w-full"
      spaceBetween={15}
      slidesPerGroupAuto
      slidesPerView={"auto"}
    >
      {data?.tags.map((item: Tag, i: any) => (
        <SwiperSlide key={i} className="pt-1 !w-[170px]">
          <div className="transition-all delay-100 hover:-translate-y-1 rounded-3xl">
            <Link href={"/tag/" + item.name}>
              <Image
                alt={item.name}
                src={item.feature_image || ""}
                width={177}
                height={135}
                className="object-cover min-h-[135px] max-h-[135px] rounded-3xl"
              />
              <h1 className="absolute bottom-3 left-3">
                <div className="rounded-full select-none font-semibold bg-white text-xs text-center px-3 py-2 shadow">
                  {item.name}
                </div>
              </h1>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
