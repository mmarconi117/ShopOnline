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
      <div className="w-full flex justify-between 2xl:justify-center items-center">
        <div className="font-Roboto text-[#313133] text-base font-medium min-[391px]:text-xl min-[391px]:font-bold min-[391px]:leading-normal whitespace-nowrap 2xl:text-6xl 2xl:pb-4">Explore our Top Categories</div>
        <button className="w-6 h-6 min-[391px]:hidden">
          <img src={rightArrow} alt="right-arrow"/>
        </button>
      </div>
      <div className='w-full max-md:overflow-auto'>
        <div className="max-md:min-w-max grid md:flex flex-wrap grid-cols-7 gap-5 pr-4 max-md:pr-5 md:justify-items-center  min-[1360px]:justify-items-start overflow-hidden justify-center">
          {exploreItems}
        </div>
      </div>
    
    </section>
    );
};

export default Explore;
