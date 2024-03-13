import Cameras from "./Cameras";
import Computers from "./Computers";
import EBookReaders from "./EBookReaders";
import GamingAccessories from "./GamingAccessories";
import Laptops from "./Laptops";
import Networking from "./Networking";
import OfficeElectronics from "./OfficeElectronics";
import Tablets from "./Tablets";
import UpperBody from "./upperBody";

const Electronics = () => {
    return (
        <div className="bg-[#f5f5f9]">
            <UpperBody />
            <Cameras />
            <Computers />
            <EBookReaders />
            <GamingAccessories />
            <Laptops />
            <Networking />
            <OfficeElectronics />
            <Tablets />
        </div>
    );
};

export default Electronics;