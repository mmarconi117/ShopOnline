import UpperBody from './UpperBody/UpperBody.jsx'
import AutoPartsRow from './AutoParts/AutoParts.jsx'
import CarCareRow from './CarCare/CarCare.jsx'
import ElectronicsAndGadgetsRow from './ElectronicsAndGadgets/ElectronicsAndGadgets.jsx'
import ExteriorAccessoriesRow from './ExteriorAccessories/ExteriorAccessories.jsx'
import FluidAndChemicalsRow from './FluidAndChemicals/FluidAndChemicals.jsx'
import InteriorAccessoriesRow from './InteriorAccessories/InteriorAccessories.jsx'
import ToolsAndEquipmentRow from './ToolsAndEquipment/ToolsAndEquipment.jsx'
import WheelsAndTiresRow from './WheelsAndTires/WheelsAndTires.jsx'
 
function AutomotiveSubCategory() {
  return (
    <div className="">
      <UpperBody />
      <ExteriorAccessoriesRow />
      <InteriorAccessoriesRow />
      <CarCareRow />
      <WheelsAndTiresRow />
      <ToolsAndEquipmentRow />
      {/* <ElectronicsAndGadgetsRow></ElectronicsAndGadgetsRow> */}
      {/* <FluidAndChemicalsRow></FluidAndChemicalsRow> */}
      {/* <AutoPartsRow></AutoPartsRow> */}
    </div>
  )
}

export default AutomotiveSubCategory
