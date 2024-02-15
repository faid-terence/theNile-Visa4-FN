import React, { useState } from "react";

const VisaOption = ({ duration, price }) => (
  <div className="flex flex-row items-center mb-4 w-/2 pr-4">
    <div className="flex flex-col justify-center px-4 py-2 text-center capitalize rounded-md border-solid border-[3px] border-[color:var(--Dark-Blue,#103C55)] text-sky-950 w-full">
      <div className="flex flex-col justify-center bg-cyan-800 rounded-md">
        <div className="flex flex-col px-6 py-4 bg-white rounded-md">
          <div className="text-xl font-bold leading-8">{duration}</div>
          <div className="self-center mt-3 text-lg font-medium leading-7">
            {price} جنيه مصري *
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VisaSelector = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      {modalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <header className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold leading-8">نوع الفيزا</h2>
                  <button
                    onClick={toggleModal}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </header>
                <div className="flex flex-row">
                  <VisaOption
                    duration="تأشيرة سياحية لمدة 10 أيام"
                    price="950"
                  />
                  <VisaOption
                    duration="تأشيرة سياحية لمدة 30 يوماً"
                    price="2750"
                  />
                </div>
                <div className="mt-5 text-sm font-medium leading-7 text-right text-orange-500">
                  <p>
                    عند الدفع عن طريق فودافون كاش هنالك زيادة 1% على رسوم الطلب
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaSelector;
