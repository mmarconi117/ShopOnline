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
    <div className="bg-[#FFFFFF] w-full items-center leading-[30px] ">
      <div className=" flex flex-col md:flex-row justify-evenly p-10 text-[25px] gap-x-10 text-left items-center">
       
        <div className="flex flex-row md:items-center justify-center items-center">
          <img src={Form} className="w-5 h-5" alt="Automobile Logo" />
          <div className="text-[#09618E] font-Roboto text-[31px] font-bold">
            Automotive
          </div>
        </div>
        
      
        <div className="flex flex-row md:flex-row  gap-x-10 px-10 overflow-x-auto w-full mt-5 whitespace-nowrap">
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
    </div>
  );
}

export default Pagerow;
