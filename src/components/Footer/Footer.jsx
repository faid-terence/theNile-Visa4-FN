import React from "react";

export const Footer = () => {
  return (
    <section className="flex justify-center items-center px-16 py-10 bg-sky-950 max-md:px-5">
    <div className="flex gap-5 justify-between items-start w-full max-w-[1226px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col self-start">
        <header className="self-end text-2xl font-bold text-right text-white whitespace-nowrap leading-[51.92px]">
          تواصل معنا
        </header>
        <div className="flex gap-2 justify-between mt-7">
          <div className="text-lg font-medium leading-10 text-right text-white underline">
            <br />
            <span className="font-bold">+201070871896</span> <br />
            <a
              href="mailto:info@gleemtours.com"
              className="text-white underline"
              target="_blank"
              aria-label="Email address: info@gleemtours.com"
            >
              info@gleemtours.com
            </a>
            <br />
            مسقط الخوير شارع دوحة الادب
          </div>
          <div className="flex flex-col items-center basis-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f42edf9268ebbd858f3206481ae8a7c5b2b5230cdc18b83fc113440c876c1dec?apiKey=adb818a380d442cb937ab642e81f4d54&"
              className="aspect-square w-[29px]"
              alt="Logo 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e74c459734cea6e732398f61701f06c63c9ebdadf7ea9cc4da5c57f40862126?apiKey=adb818a380d442cb937ab642e81f4d54&"
              className="mt-3.5 aspect-square w-[29px]"
              alt="Logo 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcf5cceab295bd38a9674c932b35fd327571271353a2ba34a818bac50cba847?apiKey=adb818a380d442cb937ab642e81f4d54&"
              className="mt-3.5 aspect-square w-[29px]"
              alt="Logo 3"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end self-end mt-20 max-md:mt-10 max-md:max-w-full">
        <p className="self-stretch text-lg font-medium leading-7 text-right text-white max-md:max-w-full">
          في فيزا4 عمان نتخصص في حصول المصريين علي تأشيرات لمدة 10 أيام او 30 يوم مع إمكانية
          التجديد لأربع اشهر
        </p>
        <div className="flex gap-3 mt-10 w-[92px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2fb49bcb4d2be8e1f80ec354678d2e59c474d8e3a42bbdca50abce9a3625f06?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="flex-1 shrink-0 w-full aspect-square"
            alt="Image 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab0681f48339b7683e40b1cddc4fe239aaa4c69732d29041fdfc0cad35c33ec1?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="flex-1 shrink-0 w-full aspect-[1.04]"
            alt="Image 2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b80e8a1b45114496abc3aaefe2f59a176208a2037c9c1130e2778a8e7fde793?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="flex-1 shrink-0 w-full aspect-square"
            alt="Image 3"
          />
        </div>
        <div className="flex gap-4 mt-4 text-lg font-medium leading-7 text-right text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9f8b06133b26195919750af0258efe8841ff42b6f1d44f431624805b96e646?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="aspect-[5] w-[301px]"
            alt="Image 4"
          />
          <div className="grow self-end mt-7">
            فيزا 4 عُمان هي إحدى شركات
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
