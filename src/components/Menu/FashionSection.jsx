import fashionWoman from "./assets/fashionWoman.png";
import clothes from "./assets/clothes.png";
export const FashionSection = () => {
  return (
    <div className="flex flex-col min-[1450px]:gap-5">
      <div className="items-start hidden gap-6 min-[1450px]:flex pt-4">
        <div className="text-[#313133] text-base font-bold font-Roboto leading-[19.2px]">
          Plus
        </div>
        <div className="text-[#313133] text-base font-bold font-Roboto leading-[19.2px]">
          Cool Home Gadgets
        </div>
        <div className="text-[#313133] text-base font-bold font-Roboto leading-[19.2px]">
          Super Deals
        </div>
        <div className="text-[#313133] text-base font-bold font-Roboto leading-[19.2px]">
          New users Zone
        </div>
      </div>

      <div className="w-screen h-auto min-[1450px]:w-[752px] min-[1450px]:min-h-[368px] bg-white min-[1450px]:rounded-[10px] items-end flex justify-between ">
        <div className="relative">
          <div className="max-w-max left-[18%] top-[23%] absolute flex-col justify-start items-start gap-2 flex">
            <div className="text-[#55A0C7] tracking-tight text-[19.5px] leading-[23.4px] min-[391px]:text-[39px] min-[391px]:font-bold font-Roboto min-[391px]:leading-[46.8px] max-md:text-[29px] whitespace-nowrap ">
              Style & Fashion
            </div>
            <div className="w-[45px] h-[6px] bg-[#F0CC58] rounded-[1px] min-[391px]:w-[90px] min-[391px]:h-3 min-[391px]:rounded-sm" />
          </div>
          <img src={clothes} />
        </div>
        <div className="relative">
          <div className="w-[40%] h-[50%] left-[37%] top-[5%] absolute opacity-90 bg-amber-200 rounded-full" />
          <img
            className="object-cover mix-blend-hard-light"
            src={fashionWoman}
            alt="Fashion Woman"
          />
        </div>
      </div>
    </div>
  );
};

export default FashionSection;
