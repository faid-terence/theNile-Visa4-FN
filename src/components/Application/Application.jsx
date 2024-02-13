import React from "react";

export const Application = () => {
  return (
    // <div className="flex justify-end pl-16 bg-orange-500 max-md:pl-5">
    //   <div className="px-16 py-10 max-w-full text-3xl font-bold leading-10 whitespace-nowrap rounded-none bg-sky-950 w-[801px] max-md:px-5">
    //     طلب تأشيرة عُمان سهل ومريح!
    //   </div>
    // </div>

    <div className="flex justify-center items-center pl-16 bg-orange-500 max-md:pl-5">
      <div className="flex overflow-hidden relative flex-col justify-center pb-12 pl-2 w-full max-w-[1170px] min-h-[677px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9804844d7a5f9b3eefff8d109f371eff14f43f3d8a731310363e3f5112a5e13?apiKey=adb818a380d442cb937ab642e81f4d54&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col self-end max-w-full text-right text-white capitalize w-[931px]">
          <div className="justify-center items-center self-end px-16 py-10 max-w-full text-3xl font-bold leading-10 whitespace-nowrap rounded-none bg-sky-950 w-[750px] max-md:px-5">
            طلب تأشيرة عُمان سهل ومريح!
          </div>
          <div className="mt-10 text-2xl font-semibold leading-10 max-md:max-w-full">
            اختر من بين اثنين من الخيارات الخالية من المتاعب
          </div>
        </div>
        <div className="relative mt-12 mb-4 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow justify-center font-medium capitalize text-sky-950 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center px-14 py-10 bg-white rounded-md max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d61c8eb6dedbdd648606e080249d6111d00b4c708a36a822943362fd848f01a0?apiKey=adb818a380d442cb937ab642e81f4d54&"
                    className="aspect-square w-[99px]"
                  />
                  <div className="mt-8 text-2xl font-bold leading-10 text-center">
                    التقديم باليد
                  </div>
                  <div className="self-stretch mt-4 text-lg leading-9 text-center max-md:max-w-full">
                    تفضل بزيارة أحد وكالات السياحة المعتمدة لدينا
                    <br /> والمنتشرة ضمن أنحاء الجمهورية لتقديم أوراقك
                  </div>
                  <div className="justify-center items-center px-16 mt-7 max-w-full text-base leading-10 text-white whitespace-nowrap bg-orange-500 rounded-lg w-[262px] max-md:px-5">
                    ابدأ
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow justify-center font-medium capitalize text-sky-950 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center px-8 py-9 bg-white rounded-md max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a3446c1d3f6fcaabcbfda0a397b3f999892751fa9e112d03f6e3a5f78b83166?apiKey=adb818a380d442cb937ab642e81f4d54&"
                    className="aspect-square w-[99px]"
                  />
                  <div className="mt-8 text-2xl font-bold leading-10 text-center whitespace-nowrap">
                    التقديم أونلاين
                  </div>
                  <div className="self-stretch mt-5 text-lg leading-9 text-center max-md:max-w-full">
                    قم بإرسال مستنداتك عبر بوابتنا الالكترونية وستصلك الفيزا عن
                    طريق الواتساب
                  </div>
                  <div className="justify-center items-center px-16 mt-8 max-w-full text-base leading-10 text-white whitespace-nowrap bg-orange-500 rounded-lg w-[276px] max-md:px-5">
                    ابدأ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
