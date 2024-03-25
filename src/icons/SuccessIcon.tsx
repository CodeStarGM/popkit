import React from "react";

export const SuccessIcon = () => {
  return (
    <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#ECFDF3]">
      <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#D1FADF]">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7 text-[#039855]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
