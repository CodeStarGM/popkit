import React from "react";

interface Props {
  isDark: boolean;
}

export const DangerIcon = ({ isDark }: Props) => {
  return (
    <div
      className={`${isDark ? "bg-[#524545]" : "bg-[#fdecec]"} flex items-center justify-center w-[50px] h-[50px] rounded-full `}
    >
      <div
        className={`flex items-center justify-center w-[38px] h-[38px] rounded-full ${isDark ? "bg-[#8b5353]" : "bg-[#fad1d1]"}`}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${isDark ? "text-[#ff0000]" : "text-[#d01313]"} w-7 h-7 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
