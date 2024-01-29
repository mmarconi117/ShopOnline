import womensIcon from './assets/Icons/womens-dress.svg';
import mensIcon from './assets/Icons/Mens-Fashion.svg';
import phoneIcon from './assets/Icons/Phones-and-Telecommunication.svg';
import autoIcon from './assets/Icons/Automobiles-and-Motorcycle.svg';
import bagsIcon from './assets/Icons/Bag-and-Shoes.svg';
import computerIcon from './assets/Icons/Computer-Office-and-Security.svg';
import homeIcon from './assets/Icons/Home-Pet-and-Appliances.svg';
import jewelryIcon from './assets/Icons/Jewelry-and-Watches.svg';
import outdoorsIcon from './assets/Icons/Outdoor-fun-and-sport.svg';
import toolIcon from './assets/Icons/Tools-and-Home-Improvement.svg';
import toysIcon from './assets/Icons/Toys-Kids-and-Babies.svg';
import consumerIcon from './assets/Icons/Consumer-Electronics.svg'
import { Link } from 'react-router-dom'


const Menu = () => {
  const categories = [
    {
      id: 'Womens fashion',
      img: womensIcon,
      title: "Women's Fashion",
    },
    {
      id: 'mens',
      img: mensIcon,
      title: "Men's Fashion",
    },
    {
      id: 'phone',
      img: phoneIcon,
      title: 'Phones & Accessories',
    },
    {
      id: 'office',
      img: computerIcon,
      title: 'Computer, Office & Security',
    },
    {
      id: 'electronics',
      img: consumerIcon,
      title: 'Consumer Electronics',
    },
    {
      id: 'jewelry',
      img: jewelryIcon,
      title: 'Jewelry & Watches',
    },
    {
      id: 'furniture',
      img: homeIcon,
      title: 'Home & Appliances',
    },
    {
      id: 'bagsAndShoes',
      img: bagsIcon,
      title: 'Bags & Shoes',
    },
    {
      id: 'kids',
      img: toysIcon,
      title: 'Toys, Kids & Babies',
    },
    {
      id: 'outdoor',
      img: outdoorsIcon,
      title: 'Outdoor, Fun & Sports',
    },
    {
      id: 'automotive',
      img: autoIcon,
      title: 'Automotive',
    },
    {
      id: 'tools',
      img: toolIcon,
      title: 'Tools & Home Improvement',
    },
  ];

  return (
    <div className="hidden py-3 flex-col min-w-max rounded-[10px] bg-[#ccefff] gap-3 lg:flex font-Roboto">
      <p className="py-[6px] px-4 text-xl font-bold leading-6 w-[280px] xl:w-[316px]">All Categories</p>
      {categories.map((item, index) => (
        <div key={index} className="flex items-center py-[6px] px-4 gap-5">
          <img src={item.img} alt={item.title} className="w-6 h-6" />
        <Link to="/subcategories">  <div className="text-base leading-[19.2px]">{item.title}</div></Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;