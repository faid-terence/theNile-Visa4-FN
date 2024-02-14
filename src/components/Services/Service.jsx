import React from "react";
import universeImage from "../../assets/images/passport.svg";
import contactIcon from "../../assets/images/Contact.svg";
import userIcon from "../../assets/images/user.svg";
import tickIcon from "../../assets/images/tick.svg";
import cardIcon from "../../assets/images/card.svg";
import timerIcon from "../../assets/images/timer.svg";
import smoothIcon from "../../assets/images/smooth.svg";

export const Service = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <section>
        <div className="flex flex-col justify-center text-right capitalize max-w-[708px] text-sky-950 p-[40px]">
          <div className="flex gap-3 self-end text-2xl font-bold leading-10 whitespace-nowrap">
            <p className="self-end mt-6">انتقال سلس</p>
            <img
              loading="lazy"
              src={smoothIcon}
              className="w-14 aspect-square"
              alt=""
            />
          </div>
          <p className="self-end mt-6">
            نوفر مسارًا خاليًا من المتاعب لاستكشاف جمال عُمان ومن ثم الانتقال
            بسلاسة إلى تأشيرات العمل
          </p>
        </div>
        <div className="flex flex-col justify-center text-right capitalize max-w-[708px] text-sky-950 p-[40px]">
          <div className="flex gap-3 self-end text-2xl font-bold leading-10 whitespace-nowrap">
            <p className="self-end mt-6">حلول مصممة خصيصاً لك</p>
            <img
              loading="lazy"
              src={userIcon}
              className="w-14 aspect-square"
              alt=""
            />
          </div>
          <p className="self-end mt-6">
            سواء كنت تبحث عن مغامرات قصيرة الأمد أو فرص مهنية، فإن خدماتنا
            المتنوعة تلبي احتياجاتك
          </p>
        </div>
        <div className="flex flex-col justify-center text-right capitalize max-w-[708px] text-sky-950 p-[40px]">
          <div className="flex gap-3 self-end text-2xl font-bold leading-10 whitespace-nowrap">
            <p className="self-end mt-6">نحن هنا للمساعدة</p>
            <img
              loading="lazy"
              src={contactIcon}
              className="w-14 aspect-square"
              alt=""
            />
          </div>
          <p className="self-end mt-6">
            يضمن فريقنا المخصص أن نكون لك مرشدًا ومساعدًا في كل خطوة.
          </p>
        </div>
      </section>

      {/* Image div */}
      <div className="mt-[260px]">
        <img loading="lazy" src={universeImage} alt="Your Image Description" />
      </div>

      <section className="mr-9">
        <div className="flex flex-col justify-center text-right capitalize max-w-[708px] text-sky-950 p-[40px]">
          <div className="flex gap-3 self-end text-2xl font-bold leading-10 whitespace-nowrap">
            <p className="self-end mt-6">الخبرة والاعتماد</p>
            <img
              loading="lazy"
              src={tickIcon}
              className="w-14 aspect-square"
              alt=""
            />
          </div>
          <p className="self-end mt-6">
            وكالتنا معتمدة من قبل سفارة عُمان، مما يضمن لك المصداقية والوثوقية
            العالية. 
          </p>
        </div>
        <div className="flex flex-col justify-center text-right capitalize max-w-[708px] text-sky-950 p-[40px]">
          <div className="flex gap-3 self-end text-2xl font-bold leading-10 whitespace-nowrap">
            <p className="self-end mt-6">فيزا ببساطة!</p>
            <img
              loading="lazy"
              src={cardIcon}
              className="w-14 aspect-square"
              alt=""
            />
          </div>
          <p className="self-end mt-6">
            قدم أوراقك عن طريق موقعنا الالكتروني أو تفضل بزيارة أحد فروع وكلائنا
            المعتمدين 
          </p>
        </div>
        <div className="flex flex-col justify-center text-right capitalize max-w-[708px] text-sky-950 p-[40px]">
          <div className="flex gap-3 self-end text-2xl font-bold leading-10 whitespace-nowrap">
            <p className="self-end mt-6">أنجز بسرعة</p>
            <img
              loading="lazy"
              src={timerIcon}
              className="w-14 aspect-square"
              alt=""
            />
          </div>
          <p className="self-end mt-6">
            استلم تأشيرتك في غضون 24 ساعة، مما يتيح لك الانطلاق في رحلتك أو
            البحث عن وظيفة دون تأخير
          </p>
        </div>
      </section>
    </div>
  );
};
