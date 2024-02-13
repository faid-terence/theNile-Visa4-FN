import React from 'react'

export const Achievements = () => {
  return (
    <div className="flex justify-center items-center px-16 py-11 bg-cyan-800 max-md:px-5">
    <div className="max-w-full w-[664px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59341e592cda7f6ed8b0bf0321ec68431c7bbf8ae083eb2ac557b273fe1586cd?apiKey=adb818a380d442cb937ab642e81f4d54&"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18b7e01587e16bd12d80c65ec6fb11bf6a19026ad0a6f87bc70a9bf93a9cac34?apiKey=adb818a380d442cb937ab642e81f4d54&"
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
  )
}
