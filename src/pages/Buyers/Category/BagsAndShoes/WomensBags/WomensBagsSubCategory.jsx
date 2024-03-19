import WomensBackpacksRow from "./Backpack/Backpack.jsx";
import BeltBagsAndFannyPacksRow from "./BeltBagsAndFannyPacks/BeltBagsAndFannyPacks.jsx";
import ClutchesAndEveningBagsRow from "./ClutchesAndEveningBags/ClutchesAndEveningBags.jsx";
import CrossbodyBagsRow from "./CrossbodyBags/CrossbodyBags.jsx";
import DuffelBagsRow from "./DuffelBags/DuffelBags.jsx";
import SatchelBagsRow from "./SatchelBags/SatchelBags.jsx";
import ToteBagsRow from "./ToteBags/ToteBags.jsx";

//this is a comment
function WomensBagsSubCategory() {
    return (
        <div className="bg-[#f5f5f9]">
            <WomensBackpacksRow></WomensBackpacksRow>
            <BeltBagsAndFannyPacksRow></BeltBagsAndFannyPacksRow>
            <ClutchesAndEveningBagsRow></ClutchesAndEveningBagsRow>
            <CrossbodyBagsRow></CrossbodyBagsRow>
            <DuffelBagsRow></DuffelBagsRow>
            <SatchelBagsRow></SatchelBagsRow>
            <ToteBagsRow></ToteBagsRow>
        </div>
    );
}

export default WomensBagsSubCategory;