import fashionWoman from "./assets/fashionWoman.png";
import clothes from "./assets/clothes.png";
export const FashionSection = () => {
  return (
    <span className="flex flex-col flex-1 gap-6 pt-4">
      <div className="items-start justify-around hidden gap-6 md:flex">
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          Plus
        </div>
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          Cool Home Gadgets
        </div>
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          Super Deals
        </div>
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          New users Zone
        </div>
      </div>


      <div className="max-h-[368px] min-h-[184px] relative bg-white rounded-[10px] items-end flex justify-between ">
        <div className="relative">
          <div className="left-[40%] top-[23%] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex text-blue-400 text-[39px] font-bold font-['Roboto'] leading-[46.80px] max-md:text-[29px] whitespace-nowrap">
              Styles
            </div>

            <div className=" w-[265px] h-3 bg-amber-300 rounded-sm" />
          </div>
          <img src={clothes} />
        </div>


        <div className="text-blue-400 text-[2.7rem] font-bold font-['Roboto'] text-center inline-block">
          <p className="m-0">Welcome</p>
          <p className="">To</p>
          <p className="">Shop Online</p>
          <p className="m-0">New York</p>
        </div>

        <div className="relative">
          <div className="w-[30%] h-[30%] left-[42%] top-[20%] absolute opacity-90 bg-amber-200 rounded-full" />
          <div className="flex text-blue-400 text-[39px] font-bold font-['Roboto'] leading-[46.80px] max-md:text-[29px] whitespace-nowrap">
              Fashions
            </div>

          <img
            className="object-cover mix-blend-hard-light"
            src={fashionWoman}
            alt="Fashion Woman"
          />
        </div>
      </div>
    </span>
  );
};
