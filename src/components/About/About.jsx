import React from "react";
import city from "../../assets/images/city-oman.jpg";

export const About = () => {
  return (
    <div className="flex flex-col justify-center text-2xl font-bold leading-10 text-right text-white capitalize hover:ease-in">
      <div className="flex overflow-hidden relative flex-col justify-center py-px min-h-[811px] max-md:mr-0.5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={city}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eb1194a67a93f1cee4378a449b6b46422efbce1fe20a800dcc70924e12e9710?"
            className="self-center mt-64 w-48 max-w-full aspect-square max-md:mt-10"
          />
          <div className="flex gap-5 justify-between items-start mt-44 mr-6 ml-4 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ad70aa9e65ecc35112277abe182b86ffe43918cb26e816f5854c38daa97195?"
              className="self-end mt-9 max-w-full aspect-[5] w-[263px]"
            />
            <div className="flex-auto self-start max-md:max-w-full">
              <span className="text-3xl text-orange-500">
                استكشف فيزا 4 عُمان!
              </span>
              <br />
              شاهد الفيديو لمعرفة معلومات عن تأشيرة عُمان وكيف يتم استخراجها
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
