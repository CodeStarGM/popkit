import React from "react";

interface Props {
  title: string;
  description: string;
  buttonColor: string;
  iconImage: string;
  isDark: boolean;
  buttonsText: [string, string];
  open: boolean;
  setOpen: () => void;
  onSubmit: () => void;
}

export const NewsletterPopup = ({
  title,
  description,
  iconImage,
  buttonColor,
  open = true,
  isDark,
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
          className={`popup flex flex-col items-center justify-around p-4 md:p-8 relative ${isDark ? "bg-[#10182F]" : "bg-white"} shadow-2xl rounded-[20px] w-full md:w-[550px] min-h-[400px] h-auto `}
        >
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
              className={`${isDark ? "text-white " : "text-[#170F49]"}  font-semibold text-2xl `}
            >
              {title}
            </h2>
            <p
              className={`${isDark ? "text-zinc-300" : "text-[#6F6C90]"} lg:text-sm text-xs   `}
            >
              {description}
            </p>
          </div>
          <div
            className={`${isDark ? "bg-zinc-200" : "md:border border-gray-300"} h-auto rounded-full  shadow-sm  w-full`}
          >
            <form
              onSubmit={onSubmit}
              className="space-y-4 md:space-y-0 p-2 w-full flex flex-col md:flex-row items-center justify-between"
            >
              <input
                className="bg-transparent md:border-none rounded-full md:text-base text-sm  border border-gray-300 px-4 w-full p-2 outline-none text-gray-900 placeholder:text-gray-500"
                type="text"
                placeholder="Enter your email"
                id="newsletter"
                name="newsletter"
              />
              <button
                type="submit"
                style={{
                  backgroundColor: `#${buttonColor}`,
                  boxShadow: `0px 0px 10px #${buttonColor}`,
                }}
                className={`font-semibold rounded-full text-white py-2 px-10 md:px-6 `}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* popup end */}
      </div>
    </>
  );
};
