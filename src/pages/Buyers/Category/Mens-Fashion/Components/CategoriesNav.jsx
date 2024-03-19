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
                    className="text-xl hover:cursor-pointer"
                >
                    {item.name}
                </a>
            </li>
        );
    });
    return (
        <div
            id="categories-nav"
            className="bg-white py-10 my-5 border-2"
        >
            <nav className="flex justify-center w-full">
                <div
                    id="nav-brand-component"
                    className="flex items-center w-1/6"
                >
                    <div>
                        <img src={locationMarker} />
                    </div>
                    <div>
                        <p className="text-[31px] font-bold text-[#55A0C7]">Men's Fashion</p>
                    </div>
                </div>
                <ul className="flex justify-between items-center  w-1/2">{navItems}</ul>
            </nav>
        </div>
    );
};

export default CategoriesNav;
