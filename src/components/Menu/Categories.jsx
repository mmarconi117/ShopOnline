
import categories from "./assets/categories.svg";
import Item from "./Item";
export const Categories = () => {
  return (
    <div className="inline-flex flex-col rounded-xl bg-[#FBFDFE] py-3 px-0 items-start max-[1084px]:hidden">
    <div className="flex gap-5 w-[316px] px-2 py-3 items-center">
      <img src={categories} alt="" />
      <span className="font-bold">Categories</span>
    </div>

    <Item>Women’s Fashion</Item>
    <Item>Men&apos;s Fashion</Item>
    <Item>Phones & Telecommunications</Item>
    <Item>Computer, Office & Security</Item>
    <Item>Computer, Office & Security</Item>
    <Item>Consumer Electronics</Item>
    <Item>Jewelry & Watches</Item>
    <Item>Home, Pet & Appliances</Item>
    <Item>Bags & Shoes</Item>
    <Item>Toys, Kids & Babies</Item>


    </div>
  );
};
