import React from "react";
import { Accordian, AccordianItem } from "./Accordian"; // Make sure to adjust the import path based on your project structure

export const FAQ = () => {
  return (
    <div className="flex justify-end p-8">
      <div className="w-1/2">
        <Accordian>
          <AccordianItem
            value={1}
            trigger={
              <>
                <div className="w-[11px] h-12 bg-sky-950 rounded-[3px]" />
                <h2 className="text-xl font-bold right-0">
                  اختبار كتابة اختبار كتابة؟{" "}
                </h2>
              </>
            }
          >
            <p className="text-lg">
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
            </p>
          </AccordianItem>
          <AccordianItem
            value={1}
            trigger={
              <>
                <div className="w-[11px] h-12 bg-sky-950 rounded-[3px]" />
                <h2 className="text-xl font-bold right-0">
                  اختبار كتابة اختبار كتابة؟{" "}
                </h2>
              </>
            }
          >
            <p className="text-lg">
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
            </p>
          </AccordianItem>
          <AccordianItem
            value={1}
            trigger={
              <>
                <div className="w-[11px] h-12 bg-sky-950 rounded-[3px]" />
                <h2 className="text-xl font-bold right-0">
                  اختبار كتابة اختبار كتابة؟{" "}
                </h2>
              </>
            }
          >
            <p className="text-lg">
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
              اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة اختبار كتابة
            </p>
          </AccordianItem>
        </Accordian>
      </div>
    </div>
  );
};
