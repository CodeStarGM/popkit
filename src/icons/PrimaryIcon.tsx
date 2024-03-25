import React from "react";

export const PrimaryIcon = () => {
  return (
    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#edf8ff]">
      <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#d4eefd]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7 text-[#0582d0]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </div>
    </div>
  );
};
