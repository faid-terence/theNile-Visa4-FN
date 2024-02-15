import React from "react";
import visaIcon from "../../assets/images/visa.svg";
import usersIcon from "../../assets/images/users.svg";

export const Achievements = () => {
  return (
    <div className="flex justify-center items-center  px-16 py-11 bg-cyan-800 max-md:px-5">
      <div className="max-w-full w-[664px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src={visaIcon}
                className="self-center w-16 aspect-square"
              />
              <div className="mt-4 text-5xl font-bold tracking-tighter max-md:text-4xl">
                5000+
              </div>
              <div className="text-lg font-semibold leading-7">
                تأشيرة تم إصدارها
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src={usersIcon}
                className="self-center w-16 aspect-square"
              />
              <div className="mt-4 text-5xl font-bold tracking-tighter max-md:text-4xl">
                150+
              </div>
              <div className="text-lg font-semibold leading-7">
                مصري استقرّ في عُمان للعمل
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
