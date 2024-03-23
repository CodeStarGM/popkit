interface Props {
  heading: string;
  description: string;
  open: boolean;
  setOpen: () => void;
  onConfirm: () => void;
}

export const Popup = ({
  heading,
  description,
  open,
  setOpen,
  onConfirm,
}: Props) => {
  return (
    <>
      <div
        onClick={setOpen}
        className={`${open ? "flex" : "hidden"} p-2 fixed inset-0 bg-[#344054]/50 flex items-center justify-center w-screen h-screen z-50 `}
      >
        {/* popup start */}
        <div
          className={`popup flex flex-col items-center justify-around p-5 relative bg-white shadow-2xl rounded-[20px] w-[400px] h-[260px] `}
        >
          <div className="cursor-pointer absolute top-5 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

          <div className="sapce-y-2">
            {/* symbol */}
            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#ECFDF3]">
              <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#D1FADF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
            {/* symbol */}

            {/* heading */}
            <h2 className="text-[#101828] font-semibold text-[18px]">
              {heading}
            </h2>
            <p className="text-[#475467] text-[14px]">{description}</p>
          </div>
          <div className="font-semibold w-full flex items-center justify-evenly">
            <button
              onClick={setOpen}
              className="bg-white text-[#475467] w-[47%] py-2 rounded-[8px] border border-[#D0D5DD]"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-[#7F56D9] text-white w-[47%] py-2 rounded-[8px] "
            >
              Done
            </button>
          </div>
        </div>
        {/* popup end */}
      </div>
    </>
  );
};
