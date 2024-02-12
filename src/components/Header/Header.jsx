import React from "react";
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  return (
    <header className="flex gap-5 justify-between self-stretch ml-[80px] mt-8 max-md:flex-wrap md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f127effb874a6dee09f606f5955cd11d0f59f41ee2f522cc34686eeeb95db3b5?"
        className="aspect-[1.05] w-[83px]"
      />
      <BiMenu color="" size={60} className="mr-[40px]" />
    </header>
  );
};
