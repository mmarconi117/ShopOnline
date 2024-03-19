import UpperBody from './UpperBody/UpperBody.jsx'
import LaptopsRow from './Laptops/Laptops.jsx'
import DeskTopRow from './Desktops/Desktops.jsx'
import ComputerAccessoriesRow from './ComputerAccessories/ComputerAccessories.jsx'
import StorageRow from './OrganisationAndStorage/Storage.jsx'
import OfficeSecRow from './OfficeSecurity/OfficeSec.jsx'
import SmartLocksRow from './SmartLocks/SmarLocks.jsx'
import OfficeRow from './OfficeRow/OfficeSupplies.jsx'


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