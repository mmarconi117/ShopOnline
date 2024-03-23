import BackpacksRow from "./Backpacks/Backpacks.jsx";
import BeltAndFannyPacksRow from "./BeltAndFannyPacks/BeltAndFannyPacks.jsx";
import DuffelBagsRow from "./DuffelBags/DuffelBags.jsx";
import LaptopBagsRow from "./LaptopBags/LaptopBags.jsx";
import WalletsRow from "./Wallets/Wallets.jsx";

//this is a comment
function MensBagsSubCategory() {
    return (
        <div className="bg-[#f5f5f9]">
            <BackpacksRow></BackpacksRow>
            <BeltAndFannyPacksRow></BeltAndFannyPacksRow>
            <DuffelBagsRow></DuffelBagsRow>
            <LaptopBagsRow></LaptopBagsRow>
            <WalletsRow></WalletsRow>
        </div>
    );
}

export default MensBagsSubCategory;