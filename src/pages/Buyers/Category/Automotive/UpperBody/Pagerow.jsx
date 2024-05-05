import Form from "./Pageviews/logo.svg";
import InteriorAccessoriesview from "./Pageviews/InteriorAccessoriesview";
import CarCareview from "./Pageviews/CarCareview";
import ElectronicsAndGadgetsview from "./Pageviews/ElectronicsAndGadgetsview";
import ExteriorAccessoriesview from "./Pageviews/ExteriorAccessoriesview";
import AutoPartsview from "./Pageviews/AutoPartsview";
import FluidAndChemicalsview from "./Pageviews/FluidAndChemicalsview";
import ToolsAndEquipmentview from "./Pageviews/ToolsAndEquipmentview";
import WheelsAndTiresview from "./Pageviews/WheelsAndTiresview";

function Pagerow() {
  return (
    <div className="bg-[#FFFFFF] md:w-[100vw] md:h-[99px] h-[99px] overflow-x-auto">
      <div className="flex flex-row justify-evenly  p-10 text-[20px] gap-x-10 text-left">
        <div className="flex flex-row md:items-center justify-center ">
          <img src={Form} className="w-5 h-5"></img>
          <div className=" text-[#09618E] font-Roboto text-[31px] font-bold">
            Automotive
          </div>
        </div>
        
          <ExteriorAccessoriesview />
          <InteriorAccessoriesview />
          <CarCareview />
          <WheelsAndTiresview />
          <ToolsAndEquipmentview />
          <ElectronicsAndGadgetsview />
          <FluidAndChemicalsview />
          <AutoPartsview />
      
      </div>
    </div>
  );
}

export default Pagerow;
