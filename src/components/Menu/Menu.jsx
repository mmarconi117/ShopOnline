
import { PiDressLight } from 'react-icons/pi';
import { RiShirtLine } from 'react-icons/ri';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { AiOutlineLaptop } from 'react-icons/ai';
import { FiWatch } from 'react-icons/fi';
import { PiArmchair } from 'react-icons/pi';
import { LuSailboat } from 'react-icons/lu';
import { TfiBasketball } from 'react-icons/tfi';
import { IoCarSportOutline } from 'react-icons/io5';
import { LuHammer } from 'react-icons/lu';
import { FashionSection } from './FashionSection';

// import { WelcomeSection } from './WelcomeSection';

const Menu = () => {
  const categories = [
    {
      id: 'womens',
      img: <PiDressLight />,
      title: "Women's Fashion",
    },
    {
      id: 'mens',
      img: <RiShirtLine />,
      title: "Men's Fashion",
    },
    {
      id: 'phone',
      img: <MdOutlinePhoneAndroid />,
      title: 'Phones & Accessories',
    },
    {
      id: 'office',
      img: <AiOutlineLaptop />,
      title: 'Computer, Office & Security',
    },
    {
      id: 'jewelry',
      img: <FiWatch />,
      title: 'Jewelry & Watches',
    },
    {
      id: 'furniture',
      img: <PiArmchair />,
      title: 'Home & Appliances',
    },
    {
      id: 'kids',
      img: <LuSailboat />,
      title: 'Toys, Kids & Babies',
    },
    {
      id: 'outdoor',
      img: <TfiBasketball />,
      title: 'Outdoor, Fun & Sports',
    },
    {
      id: 'automotive',
      img: <IoCarSportOutline />,
      title: 'Automotive',
    },
    {
      id: 'tools',
      img: <LuHammer />,
      title: 'Tools & Home Improvement',
    },
  ];

  return (
    <div>
     {/* <WelcomeSection></WelcomeSection> */}
      <FashionSection></FashionSection>
     
      <div>
        {categories.map((item, index) => {
          return (
            <div key={index} style={{display: 'flex'}}>
              {item.img} 
              <div>  {item.title}</div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
