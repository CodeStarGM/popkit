import React from "react";

interface Props {
  title: string;
  description: string;
  crossButton: boolean;
  iconImage: string;
  isDark: boolean;
  open: boolean;
  setOpen: () => void;
  onSubmit: () => void;
}

export const CookiesPopup = ({
  title,
  description,
  iconImage,
  isDark = false,
  crossButton = true,
  open = true,
  setOpen = () => {},
  onSubmit = () => {},
}: Props) => {
  return (
    <>
      <div
        id="newsletter-popup"
        className={`${open ? "flex" : "hidden"} p-2 fixed inset-0 bg-[#344054]/50 flex items-center justify-center w-screen h-screen z-50 `}
      >
        {/* popup start */}
        <div
          className={`popup flex flex-col items-center justify-around p-4 md:p-8 relative ${isDark ? " bg-[#10182F]" : "bg-gray-50"}  shadow-2xl rounded-[20px] w-full md:w-[550px] md:space-y-0 space-y-4 md:min-h-[400px] h-auto `}
        >
          {crossButton && (
            <div
              onClick={setOpen}
              className="hover:bg-gray-100 p-1 rounded-full cursor-pointer absolute top-4 right-4"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#667085]"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

          <div className="w-[100px] h-[100px] md:w-[114px] md:h-[114px]">
            <img
              src={iconImage}
              className="w-full h-auto rounded-2xl"
              alt={title}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className=" text-center w-full space-y-2">
            <h2
              className={`${isDark ? "text-white" : "text-[#170F49]"}   font-bold text-lg md:text-3xl `}
            >
              {title}
            </h2>
            <p
              className={`${isDark ? "text-zinc-300" : "text-[#6F6C90]"} lg:text-sm text-xs   `}
            >
              {description}
            </p>
          </div>
          <div className="h-auto rounded-full w-full flex items-center justify-center">
            <button
              onClick={onSubmit}
              className={`${isDark ? "bg-gray-50 text-indigo-600" : " hover:bg-[#1f2e5a] bg-[#10182F] text-white"} font-semibold hover:bg-gray-200 rounded-xl md:text-lg py-2 px-14 `}
            >
              Accept
            </button>
          </div>
        </div>
        {/* popup end */}
      </div>
    </>
  );
};
