import React from "react";
import { Cards } from "./Cards";

export const Application = () => {
  return (
    <div className="w-full h-[677px] relative bg-orange-500">
      <div className="w-[1171px] pb-56 left-[271px] top-0 absolute opacity-20 justify-center items-center inline-flex">
        <div className="origin-top-left rotate-180 w-[1171px] h-[792px] relative"></div>
      </div>
      <div className="w-[602px] h-[116px] right-0 top-0 absolute">
        <div className="w-[602px] h-[120px] left-0 top-0 absolute bg-sky-950 rounded-bl-[10px]" />
        <div className="left-[118px] top-[34px] absolute text-right text-white text-3xl font-bold font-['IBM Plex Sans Arabic'] capitalize leading-[48px]">
          طلب تأشيرة عُمان سهل ومريح!
        </div>
      </div>
      <div className="w-[448px] h-10 left-[707px] top-[140px] absolute text-right text-white text-2xl font-semibold font-['IBM Plex Sans Arabic'] capitalize leading-[48px]">
        اختر من بين اثنين من الخيارات الخالية من المتاعب
      </div>
     
        {/* Insert card */}
      <div className="w-[99px] h-[99px] left-[916px] top-[263px] absolute justify-center items-center inline-flex">
        <div className="w-[99px] h-[99px] relative"></div>
      </div>
    </div>
  );
};

export default Application;
