import womensIcon from '../../assets/ICONS/categories icon/womens-dress.svg';
import mensIcon from '../../assets/ICONS/categories icon/Mens-Fashion.svg';
import phoneIcon from '../../assets/ICONS/categories icon/Phones-and-Telecommunication.svg';
import autoIcon from '../../assets/ICONS/categories icon/Automobiles-and-Motorcycle.svg';
import bagsIcon from '../../assets/ICONS/categories icon/Bag-and-Shoes.svg';
import computerIcon from '../../assets/ICONS/categories icon/Computer-Office-and-Security.svg';
import homeIcon from '../../assets/ICONS/categories icon/Home-Pet-and-Appliances.svg';
import jewelryIcon from '../../assets/ICONS/categories icon/Jewelry-and-Watches.svg';
import outdoorsIcon from '../../assets/ICONS/categories icon/Outdoor-fun-and-sport.svg';
import toolIcon from '../../assets/ICONS/categories icon/Tools-and-Home-Improvement.svg';
import toysIcon from '../../assets/ICONS/categories icon/Toys-Kids-and-Babies.svg';
import consumerIcon from '../../assets/ICONS/categories icon/Consumer-Electronics.svg'

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
    <div className="flex flex-col">
      <p className="pt-3 pb-6 ml-4 text-lg font-bold">Categories</p>
      {categories.map((item, index) => (
        <div key={index} className="flex items-center ml-4 pb-4">
          <img src={item.img} alt={item.title} className="w-6 h-6 mr-2" />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
