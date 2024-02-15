// Application.js

import React, { useState } from "react";
import VisaSelectorII from "../Files/Visa";
import serveIcon from "../../assets/images/serve.svg";
import applyIcon from "../../assets/images/apply.svg";

const Application = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <div className="w-full h-[777px] relative bg-orange-500">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row justify-center space-x-10">
          <div className="flex flex-col justify-center font-medium capitalize max-w-[398px] text-sky-950">
            <form className="flex flex-col items-center px-10 py-10 w-full bg-white rounded-md">
              <img
                loading="lazy"
                src={serveIcon}
                className="aspect-square w-[99px]"
                alt="Form logo"
              />
              <h1 className="mt-8 text-2xl font-bold leading-10 text-center">
                التقديم باليد
              </h1>
              <p className="self-stretch mt-4 text-lg leading-9 text-center">
                تفضل بزيارة أحد وكالات السياحة المعتمدة لدينا والمنتشرة ضمن
                أنحاء الجمهورية لتقديم أوراقك
              </p>
              <button
                onClick={toggleModal}
                className="justify-center items-center px-16 mt-7 max-w-full text-base leading-10 text-white whitespace-nowrap bg-orange-500 rounded-lg w-[153px]"
              >
                ابدأ
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center font-medium capitalize max-w-[398px] text-sky-950">
            <form className="flex flex-col items-center px-10 py-10 w-full bg-white rounded-md">
              <img
                loading="lazy"
                src={applyIcon}
                className="aspect-square w-[99px]"
                alt="Form logo"
              />
              <h1 className="mt-8 text-2xl font-bold leading-10 text-center">
                التقديم باليد
              </h1>
              <p className="self-stretch mt-4 text-lg leading-9 text-center">
                قم بإرسال مستنداتك عبر بوابتنا الالكترونية وستصلك الفيزا عن طريق
                الواتساب
              </p>
              <button
                onClick={toggleModal}
                className="justify-center items-center px-16 mt-7 max-w-full text-base leading-10 text-white whitespace-nowrap bg-orange-500 rounded-lg w-[153px]"
              >
                ابدأ
              </button>
            </form>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white p-8 rounded-md">
            <VisaSelectorII closeModal={toggleModal} />
          </div>
        </div>
      )}
      <div className="w-[99px] h-[99px] left-[916px] top-[263px] absolute justify-center items-center inline-flex">
        <div className="w-[99px] h-[99px] relative"></div>
      </div>
    </div>
  );
};

export default Application;
