import React from "react";

function AccreditedAgents() {
  return (
    <section className="flex flex-col pt-4 pr-4 pb-6 pl-8 bg-white rounded-2xl max-w-[1035px] h-[528px] mx-auto">
      <header className="flex gap-5 justify-between items-start pr-3 w-full text-center capitalize text-sky-950">
        <div className="flex gap-5 justify-between mt-4">
          <p className="my-auto text-base font-medium leading-9">خطوة 2 من 2</p>
          <h1 className="flex-auto text-2xl font-bold leading-9">
            وكلاؤنا المعتمدون
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efb381f53092d14a97a4f0687b486350f4c6bf4a3b2d161d279c324755b2fbca?apiKey=adb818a380d442cb937ab642e81f4d54&"
          className="aspect-square w-[30px]"
          alt="Logo"
        />
      </header>
      <main className="mt-5 flex">
        <aside className="flex flex-col w-[35%] ml-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70da0babab7fb75aca6e7be3131e4cdceee8ede4a144e8557ab40628ac49fce?apiKey=adb818a380d442cb937ab642e81f4d54&"
            className="grow w-full h-full aspect-[0.9]"
            alt="Agent location map"
          />
        </aside>
        <section className="flex flex-col ml-3 w-[65%]">
          <article className="flex flex-col mt-1.5 text-lg font-medium capitalize text-sky-950">
            <p className="leading-8 text-right">
              تفضّل بزيارة الوكيل الأقرب إليك من وكلائنا المعتمدين والمتوزعين
              ضمن جميع أنحاء الجمهورية مع المستندات التالية:
            </p>
            <div className="flex flex-col items-end self-end mt-6 leading-[175%]">
              <p className="self-stretch text-right">
                صورة عن البطاقة الشخصية من الجهتين{" "}
              </p>
              <p className="mt-6 text-right">صورة عن جواز السفر</p>
              <button
                className="justify-center items-center px-10 mt-6 text-lg leading-10 text-white whitespace-nowrap bg-orange-500 rounded-lg w-[150px] max-md:px-5"
                tabindex="0"
              >
                موافق
              </button>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
}

export default AccreditedAgents;
