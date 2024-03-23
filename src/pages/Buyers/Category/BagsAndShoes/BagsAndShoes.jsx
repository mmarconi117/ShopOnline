import MensBagsSubCategory from "./MensBags/MensBagsSubCategory";
import MensShoesSubCategory from "./MensShoes/MensShoesSubCategory";
import WomensBagsSubCategory from "./WomensBags/WomensBagsSubCategory";
import WomensShoesSubCategory from "./WomensShoes/WomensShoesSubCategory";
import UpperBody from "./upperBody";
const BagsAndShoes = () => {
    return (
        <div id='bags-and-shoes'>
            <UpperBody />
            <MensBagsSubCategory />
            <MensShoesSubCategory />
            <WomensBagsSubCategory />
            <WomensShoesSubCategory />
        </div>
    )
}

export default BagsAndShoes;