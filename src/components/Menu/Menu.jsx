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
      url: '/womensFashion',
      title: "Women",
    },
    {
      id: 'mens',
      url: '/mensFashion',
      title: "Men",
    },
    {
      id: 'phone',
      url: '/phonesAndAccessories',
      title: 'Phones & Accessories',
    },
    {
      id: 'office',
      url: '/computersAndOffice',
      title: 'Computer, Office & Security',
    },
    {
      id: 'electronics',
      url: '/electronics',
      title: 'Electronics',
    },
    {
      id: 'jewelry',
      url: '/jewelryAndWatches',
      title: 'Jewelry',
    },
    {
      id: 'furniture',
      url: '/furniture',
      title: 'Furniture',
    },
    {
      id: 'bagsAndShoes',
      url: '/bagsAndShoes',
      title: 'Bags & Shoes',
    },
    {
      id: 'kids',
      url: '/kidsAndToys',
      title: 'Kids & Toys',
    },
    {
      id: 'toolsAndHomeImprovement',
      url: '/toolsAndHomeImprovement',
      title: 'Tools & Home Improvement',
    },
    {
      id: 'automotive',
      url: '/automotive',
      title: 'Automotive',
    },
    {
      id: 'digitalMedia',
      url: '/digitalMedia',
      title: 'Digital Media',
    },
    {
      id: 'outdoor',
      url: '/outdoorsAndSports',
      title: 'Outdoor Fun & Sports',
    },
    {
      id: 'homePetsAndAppliances',
      url: '/homePetsAndAppliances',
      title: 'Home, Pets & Appliances',
    },
  ];
  const [isOpen, setIsOpen] = useState(false)
  const menuHandler = () => {
    setIsOpen(prev => !prev)
  }
  return (
      <div className="relative w-full px-3 py-2 min-w-max bg-[#ccefff] gap-6 flex justify-start items-center font-Roboto">
        <button className='flex flex-col gap-1 w-6 active:px-0.5' onClick={menuHandler}>
          <div className='w-full h-1 rounded-md bg-black'/>
          <div className='w-full h-1 rounded-md bg-black'/>
          <div className='w-full h-1 rounded-md bg-black'/>
        </button>
        <p className="text-xl font-bold whitespace-nowrap"> All Categories</p>
        <div className={`duration-300 absolute ${isOpen ? "ease-in flex bg-gray-100 opacity-95 z-10 ml-0" : "ml-[-100px]"} left-0 flex-col rounded-br-md rounded-none p-4 top-11 w-full justify-between gap-16 text-left items-center`}>
          {categories.map((item, index) => (
            <Link key={index} to={item.url} className={`${!isOpen && "hidden"} text-base leading-[19.2px]`} onClick={menuHandler}>{item.title}</Link>
          ))}
        </div>
      </div>
  );
};

export default Menu;