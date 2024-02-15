import React from "react";
import city from "../../assets/images/city-oman.jpg";
import playIcon from "../../assets/images/play.svg";
import slogan from "../../assets/images/slogan.svg";

export const About = () => {
  return (
    <div
      className="flex flex-col justify-center text-2xl font-bold leading-10 text-right text-white capitalize hover:ease-in"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${city})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 0.3s ease",
        transform: "scale(1)",
        overflowX: "hidden",
      }}
      onMouseOver={() => {
        document.getElementById("about").style.transform = "scale(1.1)";
        document.getElementById("about").style.overflowX = "hidden  ";
      }}
      onMouseOut={() => {
        document.getElementById("about").style.transform = "scale(1)";
      }}
      id="about"
    >
      <div className="overflow-hidden relative flex-col justify-center py-px min-h-[811px] max-md:mr-0.5 max-md:max-w-full">
        <div className="flex relative flex-col px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={playIcon}
            className="self-center mt-64 w-48 max-w-full aspect-square max-md:mt-10"
          />
          <div className="flex gap-5 justify-between items-start mt-44 mr-6 ml-4 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <img
              loading="lazy"
              src={slogan}
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
