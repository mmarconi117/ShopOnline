import locationMarker from "../../../../../assets/ICONS/location-marker.svg";

const CategoriesNav = () => {
    const links = [
        {
            name: "Men's Clothing",
            url: "#clothing"
        },
        {
            name: "Bags",
            url: "#bags"
        },
        {
            name: "Shoes",
            url: "#shoes"
        },
        {
            name: "Watches",
            url: "#watches"
        },
        {
            name: "Grooming & Perfume",
            url: "#grooming&perfume"
        },
        {
            name: "Jackets & Coats",
            url: "#jackets&coats"
        },
        {
            name: "Accessories",
            url: "#accessories"
        },
        {
            name: "Jewelry",
            url: "#jewelry"
        }
    ];

    const navItems = links.map((item, index) => {
        return (
            <li key={index}>
                <a
                    rel="noreferrer"
                    href={item.url}
                    className="whitespace-nowrap"
                >
                    {item.name}
                </a>
            </li>
        );
    });
    return (
            <nav className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] max-sm:ml-[5px]">
                <div
                    id="nav-brand-component"
                    className="flex justify-between items-center font-Roboto"
                >
                    <img src={locationMarker} className="w-5 h-5"/>
                    <p className="text-xl sm:text-[31px] sm:leading-[31.2px] text-[#09618E] whitespace-nowrap font-semibold sm:font-bold">Men's Fashion</p>
                </div>
                <ul className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">{navItems}</ul>
            </nav>
    );
};

export default CategoriesNav;
