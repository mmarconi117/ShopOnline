import UpperBody from './UpperBody/UpperBody.jsx'
import LaptopsRow from './Laptops/Laptops.jsx'
import DeskTopRow from './Desktops/Desktops.jsx'
import ComputerAccessoriesRow from './Computer Accessories/ComputerAccessories.jsx'
import StorageRow from './Office Supplies/OfficeSupplies.jsx'
import OfficeSecRow from './Office Security Devices/OfficeSec.jsx'
import SmartLocksRow from './Smart Locks/SmarLocks.jsx'
import OfficeRow from './Office Supplies/OfficeSupplies.jsx'


function ComputerOfficeSubCategory() {
    return (
        <div className="bg-[#f5f5f9]">
            <UpperBody></UpperBody>
            <LaptopsRow></LaptopsRow>
            <DeskTopRow></DeskTopRow>
            <ComputerAccessoriesRow></ComputerAccessoriesRow>
            <StorageRow></StorageRow>
            <OfficeRow></OfficeRow>
            <OfficeSecRow></OfficeSecRow>
            <SmartLocksRow></SmartLocksRow>
        </div>
    );
}

export default ComputerOfficeSubCategory;