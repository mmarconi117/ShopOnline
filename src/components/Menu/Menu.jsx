// import womensIcon from './assets/Icons/womens-dress.svg';
// import mensIcon from './assets/Icons/Mens-Fashion.svg';
// import phoneIcon from './assets/Icons/Phones-and-Telecommunication.svg';
// import autoIcon from './assets/Icons/Automobiles-and-Motorcycle.svg';
// import bagsIcon from './assets/Icons/Bag-and-Shoes.svg';
// import computerIcon from './assets/Icons/Computer-Office-and-Security.svg';
// import homeIcon from './assets/Icons/Home-Pet-and-Appliances.svg';
// import jewelryIcon from './assets/Icons/Jewelry-and-Watches.svg';
// import outdoorsIcon from './assets/Icons/Outdoor-fun-and-sport.svg';
// import toolIcon from './assets/Icons/Tools-and-Home-Improvement.svg';
// import toysIcon from './assets/Icons/Toys-Kids-and-Babies.svg';
// import consumerIcon from './assets/Icons/Consumer-Electronics.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Menu = () => {
  const categories = [
    {
      id: 'Womens fashion',
      // img: womensIcon,
      title: "Women",
    },
    {
      id: 'mens',
      // img: mensIcon,
      title: "Men",
    },
    {
      id: 'phone',
      // img: phoneIcon,
      title: 'Kids',
    },
    {
      id: 'office',
      // img: computerIcon,
      title: 'Home',
    },
    {
      id: 'electronics',
      // img: consumerIcon,
      title: 'Health',
    },
    {
      id: 'jewelry',
      // img: jewelryIcon,
      title: 'Electronics',
    },
    {
      id: 'furniture',
      // img: homeIcon,
      title: 'Furniture',
    },
    {
      id: 'bagsAndShoes',
      // img: bagsIcon,
      title: 'Jewelry',
    },
    {
      id: 'kids',
      // img: toysIcon,
      title: 'Toys',
    },
  ];
  const [isOpen, setIsOpen] = useState(false)
  const menuHandler = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <>
    {/* Desktop Version */} 
      <div className="hidden w-full px-3 py-1 min-w-max bg-[#ccefff] gap-5 md:flex justify-start font-Roboto">
        <p className="text-xl font-bold whitespace-nowrap"> All Categories</p>
        <div className='grow flex justify-between gap-4 items-center'>
          {categories.map((item, index) => (
            <Link key={index} to="/subcategories" className="text-base leading-[19.2px]">{item.title}</Link>
          ))}
        </div>
      </div>
      {/* Mobile Version */}
      <div className="relative md:hidden w-full px-3 py-2 min-w-max bg-[#ccefff] gap-5 flex justify-start font-Roboto">
        <button className='flex flex-col gap-1 w-6 active:px-0.5' onClick={menuHandler}>
          <div className='w-full h-1 rounded-md bg-black'/>
          <div className='w-full h-1 rounded-md bg-black'/>
          <div className='w-full h-1 rounded-md bg-black'/>
        </button>
        <div className={`absolute ${isOpen ? "flex bg-gray-100 opacity-95 z-50" : "hidden"} rounded-br-md rounded-none p-4 top-9 left-0 w-[250px] flex-wrap justify-between gap-16 text-left items-center`}>
          {categories.map((item, index) => (
            <Link key={index} to="/subcategories" className="text-base leading-[19.2px]" onClick={menuHandler}>{item.title}</Link>
          ))}
        </div>
      </div>
    
    </>
  );
};

export default Menu;