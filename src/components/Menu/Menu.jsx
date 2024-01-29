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


const Menu = () => {
  const categories = [
    {
      id: 'Womens fashion',
      // img: womensIcon,
      title: "Womens",
    },
    {
      id: 'mens',
      // img: mensIcon,
      title: "Mens",
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

  return (
    <div className="hdden  mx-2 pl-3 min-w-max bg-[#ccefff] gap-10 flex font-Roboto">
      <p className="py-[6px]  text-xl font-bold "> All Categories</p>
      {categories.map((item, index) => (
        <div key={index} className="flex items-center py-[6px] px-4 gap-5">
          {/* <img src={item.img} alt={item.title} className="w-6 h-6" /> */}
        <Link to="/subcategories">  <div className="text-base leading-[19.2px]">{item.title}</div></Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;