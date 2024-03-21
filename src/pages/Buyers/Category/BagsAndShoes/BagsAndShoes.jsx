import MensBagsSubCategory from "./MensBags/MensBagsSubCategory";
import MensShoesSubCategory from "./MensShoes/MensShoesSubCategory";
import WomensBagsSubCategory from "./WomensBags/WomensBagsSubCategory";
import WomensShoesSubCategory from "./WomensShoes/WomensShoesSubCategory";

const BagsAndShoes = () => {
    return (
        <div id= 'bags-and-shoes'>
            <MensBagsSubCategory/>
            <MensShoesSubCategory/>
            <WomensBagsSubCategory/>
            <WomensShoesSubCategory/>
        </div>
    )
}

export default BagsAndShoes;