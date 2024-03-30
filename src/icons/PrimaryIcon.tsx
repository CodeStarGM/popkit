import React from "react";

interface Props {
  isDark: boolean;
}

export const PrimaryIcon = ({ isDark }: Props) => {
  return (
    <div
      className={`${isDark ? "bg-[#43474a]" : "bg-[#edf8ff]"} flex items-center justify-center w-[50px] h-[50px] rounded-full `}
    >
      <div
        className={`flex items-center justify-center w-[38px] h-[38px] rounded-full ${isDark ? "bg-[#4c606a]" : "bg-[#d4eefd]"}`}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${isDark ? "text-[#009dff]" : "text-[#0582d0]"} w-7 h-7 `}
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
