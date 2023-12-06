
import fashionWoman from "./assets/fashionWoman.png";
import clothes from "./assets/clothes.png"; 
export const Fashion = () => {
  return (
    <div className="flex flex-col flex-1 gap-6 pt-3 border-[5px]  border-red-500">
        <div className="w-[451px] h-[19px] justify-start items-start gap-6 inline-flex">
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

      <div>

      <div className="h-[368px] relative bg-white rounded-[10px] items-center">
        <div className="left-[59px] top-[95px] absolute flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-72 text-blue-400 text-[39px] font-bold font-['Roboto'] leading-[46.80px]">
            Style & Fashion
          </div>
        </div>

        <div className="flex flex-1">
            {/* <img src={clothes} alt="" />
            <img src={fashionWoman} alt="" className="max-w-[405px] w-full"/> */}
            <div className="flex w-full bg-green-400 ">
                  <img src={clothes} alt="" />
                <img src={fashionWoman} alt="" className="w-full"/>
            </div>

        </div>
      </div>

      </div>
    </div>
  )
}

