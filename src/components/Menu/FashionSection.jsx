
import fashionWoman from "./assets/fashionWoman.png";
import clothes from "./assets/clothes.png";
export const FashionSection = () => {
  return (
    <div className="flex flex-col flex-1 gap-6 pt-4">
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

      <div className="flex items-start justify-around gap-6 md:hidden">
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          Home
        </div>
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          Special Offers
        </div>
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
          Todays Deals
        </div>
        <div className="text-zinc-800 text-base font-bold font-['Roboto'] leading-tight">
         Trending
        </div>
      </div>





      <div className="max-h-[368px] min-h-[184px] relative bg-white rounded-[10px] items-end flex justify-between">
        <div className="relative">
          <div className="left-[20%] top-[23%] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className=" text-blue-400 text-[39px] font-bold font-['Roboto'] leading-[46.80px] max-md:text-[29px] whitespace-nowrap">
              Style & Fashion
            </div>

            <div className="w-[90px] h-3 bg-amber-300 rounded-sm" />
          </div>
          <img
            // className="h-auto max-w-full "
            src={clothes}
          />
        </div>
        {/* max-xl:w-[83px] max-xl:h-[83px] max-xl:left-[480px] max-xl:top-[120px] */}
        <div className="relative">
          <div className="w-[40%] h-[50%] left-[37%] top-[10%] absolute opacity-90 bg-amber-200 rounded-full" />

          <img
            className="object-cover mix-blend-hard-light"
            src={fashionWoman}
            alt="Fashion Woman"
          />
        </div>
      </div>

      <div className="hidden w-full h-[190px] bg-zinc-300 rounded-[10px] md:block" />
    </div>
  );
};
