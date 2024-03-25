import React from "react";
import { SuccessIcon, PrimaryIcon, DangerIcon, InfoIcon } from "../../icons";

interface Props {
  title: string;
  description: string;
  buttonColor: string;
  variant: string;
  crossButton: boolean;
  buttonsText: string[];
  open: boolean;
  setOpen: () => void;
  onConfirm: () => void;
}

export const Popup = ({
  title,
  description,
  crossButton = true,
  variant = "primary",
  buttonsText = ["Cancel", "Done"],
  open = true,
  setOpen = () => {},
  onConfirm = () => {},
}: Props) => {
  return (
    <>
      <div
        className={`${open ? "flex" : "hidden"} p-2 fixed inset-0 bg-[#344054]/50 flex items-center justify-center w-screen h-screen z-50 `}
      >
        {/* popup start */}
        <div
          className={`popup flex flex-col items-center justify-between p-4 md:p-5 relative bg-white shadow-2xl rounded-[20px] w-[400px] min-h-[260px] h-auto `}
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

          <div className="w-full">
            {" "}
            {variant === "primary" && <PrimaryIcon />}
            {variant === "success" && <SuccessIcon />}
            {variant === "danger" && <DangerIcon />}
            {variant === "info" && <InfoIcon />}
          </div>

          <div className="w-full space-y-2">
            {/* symbol */}

            {/* symbol */}

            {/* heading */}
            <h2 className="text-[#101828] font-semibold text-[18px]">
              {title}
            </h2>
            <p className="text-[#475467] md:text-[14px] text-xs">
              {description}
            </p>
          </div>
          <div className="font-semibold w-full flex items-center justify-between">
            <button
              onClick={setOpen}
              className="hover:bg-gray-100 bg-white text-[#475467] w-[48%] py-2 rounded-[8px] border border-[#D0D5DD]"
            >
              {buttonsText[0]}
            </button>
            <button
              onClick={onConfirm}
              className={`text-white w-[48%] py-2 rounded-[8px] ${variant === "primary" && "hover:bg-[#056fb1] bg-[#0582d0] border-2 border-[#056fb1]"} ${variant === "success" && "hover:bg-[#027d46] bg-[#039855] border-2 border-[#027d46]"} ${variant === "danger" && "hover:bg-[#b91010]  bg-[#d01313] border-2 border-[#b91010]"} ${variant === "info" && "hover:bg-[#c35c02]  bg-[#DC6803] border-2 border-[#c35c02]"}  `}
            >
              {buttonsText[1]}
            </button>
          </div>
        </div>
        {/* popup end */}
      </div>
    </>
  );
};
