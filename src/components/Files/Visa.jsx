import React, { useState } from "react";

const VisaOption = ({ duration, price }) => (
  <div className="flex flex-col w-1/2 max-md:w-full">
    <div className="flex flex-col justify-center px-1 py-0.5 w-full text-center capitalize rounded-md border-solid border-[3px] border-[color:var(--Dark-Blue,#103C55)] text-sky-950 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center bg-cyan-800 rounded-md max-md:max-w-full">
        <div className="flex flex-col px-5 py-3 bg-white rounded-md max-md:max-w-full">
          <div className="text-xl font-bold leading-8 whitespace-nowrap max-md:mx-0.5">
            {duration}
          </div>
          <div className="self-center mt-3 text-lg font-medium leading-7">
            {price} جنيه مصري *
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VisaSelectorII = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <section className="flex flex-col pt-4 pb-9 bg-white rounded-2xl w-full max-w-[700px] mx-auto">
      <header className="flex flex-col pr-4 pl-8 w-full text-center capitalize text-sky-950 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
            <p className="my-auto text-base font-medium leading-9">
              {" "}
              خطوة 1 من 3{" "}
            </p>
            <h1 className="text-2xl font-bold leading-9">نوع الفيزا</h1>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a05f3cdf15e542432a2a160077259adf71ccbe49b88e7129f5abf85c86e0c98?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="aspect-square w-[30px]"
            alt="Visa type icon"
          />
        </div>
        <p className="self-end mt-7 mr-8 text-lg font-medium leading-9 whitespace-nowrap max-md:mr-2.5">
          {" "}
          لطفاً اختر نوع التأشيرة التي تود الحصول عليها{" "}
        </p>
      </header>
      <div className="flex flex-col pr-4 pl-8 mt-9 w-full max-md:pl-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <VisaOption duration="تأشيرة سياحية لمدة 10 أيام" price="950" />
            <VisaOption duration="تأشيرة سياحية لمدة 30 يوماً" price="2750" />
          </div>
        </div>
        <div className="flex gap-3 justify-between px-1 mt-5 text-sm font-medium leading-9 text-right text-orange-500 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <p className="grow">
            {" "}
            عند الدفع عن طريق فودافون كاش هنالك زيادة 1% على رسوم الطلب{" "}
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6789fbe146f7d432fbca0f243b0c06ab2fcad82d778bc431a36dd9adf56c1d67?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="w-6 aspect-square"
            alt="Vodafone Cash"
          />
        </div>
      </div>
      <button className="justify-center items-center px-16 mt-12 max-w-full text-lg font-medium leading-10 text-white capitalize whitespace-nowrap bg-orange-500 rounded-lg w-[200px] max-md:px-5 max-md:mt-10 max-md:ml-2">
        {" "}
        التالي{" "}
      </button>
    </section>
  );
};

export default VisaSelectorII;
