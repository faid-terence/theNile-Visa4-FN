import React from "react";
import logo from "../../assets/images/logo.svg";
import phoneIcon from "../../assets/images/phone.svg";
import { BiPhoneIncoming } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import youtubeIcon from "../../assets/images/youtube.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import slogan from "../../assets/images/slogan.svg";

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
            <div className="flex flex-col items-end">
              {" "}
              <BiPhoneIncoming className="mt-[45px]" color="white" size={30} />
              <BiMessage className="mt-[10px]" color="white" size={30} />
              <BiCurrentLocation
                className="mt-[10px]"
                color="white"
                size={30}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end self-end mt-20 max-md:mt-10 max-md:max-w-full">
          <img src={logo} alt="" className="mb-8" />
          <p className="self-stretch text-lg font-medium leading-7 text-right text-white max-md:max-w-full">
            في فيزا4 عمان نتخصص في حصول المصريين علي تأشيرات لمدة 10 أيام او 30
            يوم مع إمكانية التجديد لأربع اشهر
          </p>
          <div className="flex gap-3 mt-10 w-[92px]">
            <img
              loading="lazy"
              src={youtubeIcon}
              className="flex-1 shrink-0 w-full aspect-square"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src={instagramIcon}
              className="flex-1 shrink-0 w-full aspect-[1.04]"
              alt="Image 2"
            />
            <img
              loading="lazy"
              src={facebookIcon}
              className="flex-1 shrink-0 w-full aspect-square"
              alt="Image 3"
            />
          </div>
          <div className="flex gap-4 mt-4 text-lg font-medium leading-7 text-right text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src={slogan}
              className="aspect-[5] w-[301px]"
              alt="Image 4"
            />
            <div className="grow self-end mt-7">فيزا 4 عُمان هي إحدى شركات</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
