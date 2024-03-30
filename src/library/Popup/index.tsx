import React from "react";

interface Props {
  title: string;
  description: string;
  buttonColor: string;
  img: string;
  isDark: boolean;
  buttonsText: [string, string];
  open: boolean;
  setOpen: () => void;
  onConfirm: () => void;
}

export const Popup = ({
  title,
  description,
  img,
  buttonColor = "DC6803",
  buttonsText = ["Cancel", "Done"],
  isDark,
  open = true,
  setOpen = () => {},
  onConfirm = () => {},
}: Props) => {
  return (
    <>
      {open && (
        <div
          id="popkit-popup"
          className={`p-2 fixed inset-0 bg-[#344054]/50 flex items-center justify-center w-screen h-screen z-50 `}
        >
          {/* popup start */}
          <div
            className={`popup flex flex-col items-center justify-between p-4 md:p-6 relative ${isDark ? "bg-[#10182F]" : "bg-white"} shadow-2xl rounded-[20px] w-full md:w-[380px] min-h-[420px] h-auto `}
          >
            <div className="w-full h-[200px]  ">
              <img
                src={img}
                className="w-full h-full object-cover rounded-2xl"
                alt={title}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className=" text-center w-full space-y-2">
              {/* symbol */}

              {/* symbol */}

              {/* heading */}

              <h2
                className={`${isDark ? "text-white " : "text-[#101828]"}  font-semibold text-[18px] `}
              >
                {title}
              </h2>
              <p
                className={`${isDark ? "text-zinc-300" : "text-[#475467]"} lg:text-sm text-xs   `}
              >
                {description}
              </p>
            </div>
            <div className="font-semibold w-full flex items-center justify-between">
              <button
                onClick={setOpen}
                className={`${isDark ? "bg-transparent border-[#3a384b] text-gray-100 hover:bg-gray-900" : "hover:bg-gray-100 bg-white border-[#D0D5DD]  text-[#475467]"}   w-[48%] py-2 rounded-[8px] border  `}
              >
                {buttonsText[0]}
              </button>
              <button
                onClick={onConfirm}
                style={{
                  backgroundColor: `#${buttonColor}`,
                }}
                className={`text-white w-[48%] py-2 rounded-[10px]  `}
              >
                {buttonsText[1]}
              </button>
            </div>
          </div>
          {/* popup end */}
        </div>
      )}
    </>
  );
};
