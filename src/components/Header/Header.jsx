import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import icon from "../../assets/images/icon.png";
import menuIcon from "../../assets/images/menu.svg";
import logo from "../../assets/logo.svg";

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
        src={menuIcon}
        className="w-full aspect-square max-w-[45px] object-cove"
        alt="Logo"
      />
      {showNav && (
        <header className="flex flex-col items-end py-7 pr-2.5 pl-14 font-medium text-center bg-orange-500 max-w-[280px]">
          <div className="flex gap-3.5 text-base text-white whitespace-nowrap w-[71px]">
            <a href="#" className="self-start mt-2.5">
              رجوع
            </a>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c41f58dcc37e17846f11352c65a5fd96885e0d087381e15d74e3137f1f205b90?apiKey=adb818a380d442cb937ab642e81f4d54&"
              className="flex-1 shrink-0 w-full aspect-square"
              alt=""
            />
          </div>
          <div className="flex flex-col self-stretch mt-9 text-2xl text-white">
            <form>
              <div className="flex flex-col pr-4 pl-20">
                <label>الرئيسية</label>
                <div className="mt-6">من نحن؟</div>
              </div>
              <div className="flex flex-col px-4 mt-6">
                <div>لماذا فيزا 4 عُمان؟</div>
                <div className="mt-6">الأسئلة الشائعة</div>
              </div>
            </form>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12b0b4a93f5aa050b337d86207cc4e11148967a04fea1773e1132fc5e5d89159?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="mt-96 mr-3.5 aspect-[1.05] w-[42px]"
            alt=""
          />
        </header>
      )}
    </header>
  );
};
