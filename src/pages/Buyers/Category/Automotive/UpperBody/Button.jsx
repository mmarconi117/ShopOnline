function Button() {
  return (
    <div
      className="w-[461px] h-[131px] bg-[#F6FAFC] rounded-lg border-solid border border-[#E6E0E9] px-10 py-5 flex justify-between">
      <div className="flex flex-col justify-between gap-1">
        <div>
          <h1 className="  text-[25px] font-bold  text-[#55A0C7]">
            Tour $5 off
          </h1>
          <p className="text-[16px] font-normal leading-[14px]  text-[#79767D]">
            Orders over $180
          </p>
        </div>
        <p className="text-[16px]  text-[#48464C]">
          valid till 02/24
        </p>
      </div>
      <div className="flex flex-col justify-between items-end top-0">
        <div className="">
          <p className="text-[#48464C] text-[16px] ">
            **978
          </p>
        </div>
        <div className="bg-[#55A0C7] text-[#F5F5F9] rounded-[400px] py-[6px] px-3 text-xs ">
          Copy
        </div>
      </div>
    </div>
  );
}

export default Button;
