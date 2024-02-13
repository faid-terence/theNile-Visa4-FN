import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import icon from "../../assets/images/icon.png";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="flex gap-5 justify-between self-stretch ml-[80px] pt-7 max-md:flex-wrap md:max-w-full bg-transparent relative">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f127effb874a6dee09f606f5955cd11d0f59f41ee2f522cc34686eeeb95db3b5?"
        className="aspect-[1.05] w-[83px]"
      />
      {/* <BiMenu
        color="white"
        size={60}
        className="mr-[40px]"
        onClick={toggleNav}
      /> */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2354e09fb85141d13577e77c7e159fe00aa53d8092649bb8c6b5c975cb37228c?"
        className="w-full aspect-square max-w-[45px] pr-7 h-8 object-cover"
        alt="Logo"
      />
      {showNav && (
        <div className="absolute top-0 right-0 bg-orange-500 h-screen p-4 w-1/5">
          <div className="flex flex-col self-stretch mt-9 text-2xl text-white">
            <div className="flex flex-col pr-4 pl-20">
              <div>الرئيسية</div>
              <div className="mt-6">من نحن؟</div>
            </div>
            <div className="flex flex-col px-4 mt-6">
              <div>لماذا فيزا 4 عُمان؟</div>
              <div className="mt-6">الأسئلة الشائعة</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
