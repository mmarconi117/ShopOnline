import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExploreItem } from './ExploreItem'; 
import rightArrow from '../../assets/ICONS/Fill/arrow-right.svg'; 

const Explore = () => {
    const [exploreItems, setExploreItems] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRes = await axios.get("https://api.shoponlinenewyork.com/api/categories");
                console.log(categoriesRes.data); // Check what the API returns
                const items = categoriesRes.data.map((item) => {
                    if (!item.categoryUrl) {
                        console.warn(`Missing categoryUrl for category ID: ${item.id}`);
                        return null; // Skip rendering this item if categoryUrl is missing
                    }
                    return (
                        <ExploreItem key={item.id} src={item.categoryBanner} category={item.categoryName} path={item.categoryUrl} />
                    );
                });
                setExploreItems(items);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <section className="bg-[#F3F4F6] w-full flex flex-col items-start justify-center gap-4 py-8 px-4">
            <div className="w-full flex justify-between items-center">
                <div className="font-Roboto text-[#313133] text-lg md:text-xl font-bold">Explore our Top Categories</div>
                <button className="w-6 h-6 hidden md:block">
                    <img src={rightArrow} alt="right-arrow" />
                </button>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exploreItems}
                </div>
            </div>
        </section>
    );
};

export default Explore;
