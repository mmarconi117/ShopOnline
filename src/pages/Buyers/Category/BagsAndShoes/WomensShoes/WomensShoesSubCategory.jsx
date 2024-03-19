import BootsAndAnkleBootsRow from "./BootsAndAnkleBoots/BootsAndAnkleBoots.jsx";
import DesignerShoesRow from "./DesignerShoes/DesignerShoes.jsx";
import FlatsAndLoafersRow from "./FlatsAndLoafers/FlatsAndLoafers.jsx";
import HeelsAndPumpsRow from "./HeelsAndPumps/HeelsAndPumps.jsx";
import WomensSandalsRow from "./Sandals/Sandals.jsx";
import WomenSlippersRow from "./Slippers/Slippers.jsx";
import SportsShoesAndSneakersRow from "./SportsShoesAndSneakers/SportsShoesAndSneakers.jsx";
import WeddingAndEveningsRow from "./WeddingAndEvenings/WeddingAndEvenings.jsx";
import WedgesRow from "./Wedges/Wedges.jsx";

//this is a comment
function WomensShoesSubCategory() {
    return (
        <div className="bg-[#f5f5f9]">
            <BootsAndAnkleBootsRow></BootsAndAnkleBootsRow>
            <DesignerShoesRow></DesignerShoesRow>
            <FlatsAndLoafersRow></FlatsAndLoafersRow>
            <HeelsAndPumpsRow></HeelsAndPumpsRow>
            <WomensSandalsRow></WomensSandalsRow>
            <WomenSlippersRow></WomenSlippersRow>
            <SportsShoesAndSneakersRow></SportsShoesAndSneakersRow>
            <WeddingAndEveningsRow></WeddingAndEveningsRow>
            <WedgesRow></WedgesRow>
        </div>
    );
}

export default WomensShoesSubCategory;