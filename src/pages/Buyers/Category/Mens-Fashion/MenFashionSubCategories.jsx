import Banner from "./Components/Banner";
import Accessories from "./Components/Categories-Section/Accessories";
import Bags from "./Components/Categories-Section/Bags";
import Clothing from "./Components/Categories-Section/Clothing";
import GroomingAndPerfume from "./Components/Categories-Section/Grooming";
import Jackets from "./Components/Categories-Section/Jackets";
import Jewelry from "./Components/Categories-Section/Jewelry";
import Shoes from "./Components/Categories-Section/Shoes";
import Watches from "./Components/Categories-Section/Watches";
import CategoriesNav from "./Components/CategoriesNav";
import Offers from "./Components/Offers";

const MenFashionSubCategories = () => {
    return (
        <div id="men-fashion-sub-categories">
            <Banner />
            <Offers />
            <CategoriesNav />
            <Clothing />
            <Bags />
            <Shoes />
            <Watches />
            <GroomingAndPerfume />
            <Jackets />
            <Accessories />
            <Jewelry />
        </div>
    );
};

export default MenFashionSubCategories;
