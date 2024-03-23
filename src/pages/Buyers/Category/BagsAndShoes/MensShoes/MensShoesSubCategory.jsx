import BootsRow from "./Boots/Boots.jsx";
import CasualShoesRow from "./CasualShoes/CasualShoes.jsx";
import DressShoesRow from "./DressShoes/DressShoes.jsx";
import LoafersRow from "./Loafers/Loafers.jsx";
import SlippersRow from "./Slippers/Slippers.jsx";
import SportsShoesAndSneakersRow from "./SportsShoesAndSneakers/SportsShoesAndSneakers.jsx";

//this is a comment
function MensShoesSubCategory() {
    return (
        <div className="bg-[#f5f5f9]">
            <BootsRow></BootsRow>
            <CasualShoesRow></CasualShoesRow>
            <DressShoesRow></DressShoesRow>
            <LoafersRow></LoafersRow>
            <SlippersRow></SlippersRow>
            <SportsShoesAndSneakersRow></SportsShoesAndSneakersRow>
        </div>
    );
}

export default MensShoesSubCategory;