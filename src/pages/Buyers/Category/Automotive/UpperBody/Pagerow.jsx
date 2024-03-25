import Form from './Pageviews/Automotiveview'
import InteriorAccessoriesview from './Pageviews/InteriorAccessoriesview'
import CarCareview from './Pageviews/CarCareview'
import ElectronicsAndGadgetsview from './Pageviews/ElectronicsAndGadgetsview'
import ExteriorAccessoriesview from './Pageviews/ExteriorAccessoriesview'
import AutoPartsview from './Pageviews/AutoPartsview'
import FluidAndChemicalsview from './Pageviews/FluidAndChemicalsview'
import ToolsAndEquipmentview from './Pageviews/ToolsAndEquipmentview'
import WheelsAndTiresview from './Pageviews/WheelsAndTiresview'

function Pagerow() {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]">
      <Form></Form>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <ExteriorAccessoriesview></ExteriorAccessoriesview>
        <InteriorAccessoriesview></InteriorAccessoriesview>
        <CarCareview></CarCareview>
        <WheelsAndTiresview></WheelsAndTiresview>
        <ToolsAndEquipmentview></ToolsAndEquipmentview>
        <ElectronicsAndGadgetsview></ElectronicsAndGadgetsview>
        <FluidAndChemicalsview></FluidAndChemicalsview>
        <AutoPartsview></AutoPartsview>
      </div>
    </div>
  )
}

export default Pagerow
