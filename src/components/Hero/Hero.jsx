import React from "react";
import { Header } from "../Header/Header";

export const Hero = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="justify-center px-14 py-5 mt-14 max-w-full text-3xl font-bold text-center text-orange-500 rounded-xl bg-sky-950 leading-[60px] w-[470px] max-md:px-5 max-md:mt-10">
          مرحباً بك في فيزا 4 عُمان
          <br />
          بوابتك إلى فرص سلطنة عُمان!
        </div>
        <div className="mt-10 text-2xl font-semibold leading-10 text-center max-md:max-w-full">
          احصل على فيزا عُمان من المصدر بدون أي وسيط خلال 24 ساعة.
        </div>

        <button className="justify-center items-center px-16 mt-8 mb-44 max-w-full text-lg font-medium leading-10 text-white whitespace-nowrap bg-orange-500 rounded-lg w-[470px] max-md:px-5 max-md:mb-10 hover:bg-sky-900">
          قدّم على التأشيرة الآن
        </button>
      </div>
    </>
  );
};
