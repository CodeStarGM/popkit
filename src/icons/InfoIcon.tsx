import React from "react";

interface Props {
  isDark: boolean;
}

export const InfoIcon = ({ isDark }: Props) => {
  return (
    <div
      className={`${isDark ? "bg-[#4e4c47]" : "bg-[#FFFAEB]"} flex items-center justify-center w-[50px] h-[50px] rounded-full `}
    >
      <div
        className={`flex items-center justify-center w-[38px] h-[38px] rounded-full ${isDark ? "bg-[#6c6348]" : "bg-[#FEF0C7]"}`}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`${isDark ? "text-[#ff7700]" : "text-[#DC6803]"} w-7 h-7 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      </div>
    </div>
  );
};
