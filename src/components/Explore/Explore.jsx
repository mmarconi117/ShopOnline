import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExploreItem } from './ExploreItem'; 
import rightArrow from '../../assets/ICONS/Fill/arrow-right.svg'; 

const Explore = () => {
    const [exploreItems, setExploreItems] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRes = await axios.get('http://localhost:8000/api/categories');
                console.log(categoriesRes.data); // Check what the API returns
                const items = categoriesRes.data.map((item) => {
                    if (!item.category_url) {
                        console.warn(`Missing categoryUrl for category ID: ${item.id}`);
                        return null; // Skip rendering this item if categoryUrl is missing
                    }
                    return (
                        <ExploreItem key={item.id} src={item.category_banner} category={item.category_name} path={item.category_url} />
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
      <section className="bg-[#BAD9E8] w-full flex flex-col items-start justify-center gap-2 pl-2 py-8 min-[391px]:pl-4 min-[391px]:pt-8 min-[391px]:gap-[18px] min-[391px]:min-h-[651px] min-[1360px]:px-6 min-[1512px]:px-10">
      <div className="w-full flex justify-between items-center">
        <div className="font-Roboto text-[#313133] text-base font-medium min-[391px]:text-xl min-[391px]:font-bold min-[391px]:leading-normal whitespace-nowrap">Explore our Top Categories</div>
        <button className="w-6 h-6 min-[391px]:hidden">
          <img src={rightArrow} alt="right-arrow"/>
        </button>
      </div>
    <div className="w-full overflow-x-auto">
      <div className="min-w-max grid grid-cols-6 gap-x-3 gap-y-6 pr-4 min-[391px]:pr-0 min-[391px]:gap-x-2 md:justify-items-center md:grid-cols-3 md:gap-x-1 min-[960px]:grid-cols-4 min-[960px]:gap-x-2 min-[960px]:gap-y-8 min-[1360px]:grid-cols-6 min-[1360px]:justify-items-start min-[1360px]:gap-x-2 min-[1450px]:gap-x-6 min-[1450px]:gap-y-9 overflow-hidden ">
        {exploreItems}
      </div>
    </div>
    </section>
    );
};

export default Explore;
