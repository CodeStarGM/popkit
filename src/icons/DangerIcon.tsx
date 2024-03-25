import React from "react";

export const DangerIcon = () => {
  return (
    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#fdecec]">
      <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#fad1d1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7 text-[#d01313]"
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
