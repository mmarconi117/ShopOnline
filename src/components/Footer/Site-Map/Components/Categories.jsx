import { categories } from './categoriesItems';

const Categories = () => {
    const categoryItems = categories.map((item, index) => {
        return (
            <div key={index} className="w-1/3 my-10">
                <div className="mb-5">
                    <p className="text-black font-bold">{item.section.title}</p>
                </div>
                <ul>
                    {item.subSection.map((subItem, subItemIndex) => {
                        return (
                            <li key={subItemIndex} className="my-2">
                                <a href={subItem.link}>{subItem.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    });
    return (
        <div id="categories-components" className="my-5">
            <div className="my-5">
                <div className="">
                    <p>CATEGORIES</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    {categoryItems}
                </div>
            </div>
        </div>
    );
};

export default Categories;
