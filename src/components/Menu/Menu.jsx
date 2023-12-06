import { PiDressLight } from "react-icons/pi";
import { RiShirtLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";
import { FiWatch } from "react-icons/fi";
import { PiArmchair } from "react-icons/pi";
import { LuSailboat } from "react-icons/lu";
import { TfiBasketball } from "react-icons/tfi";
import { IoCarSportOutline } from "react-icons/io5";
import { LuHammer } from "react-icons/lu";






const Menu = () => {

    const category = [
        {
            womens: {
                img: <PiDressLight/>,
                title: "Women's Fashion"
            },
            mens: {
                img: <RiShirtLine />,
                title: "Men's Fashion"
            },
            phone: {
                img: <MdOutlinePhoneAndroid />,
                title: "Phones & Accessories"
            },
            office: {
                img: <AiOutlineLaptop />,
                title: "Computer, Office & Security"
            },
            jewelry: {
                img: <FiWatch />,
                title: "Jewelry & Watches"
            },
            furniture: {
                img: <PiArmchair />,
                title: "Home & Appliances"
            },
            kids: {
                img: <LuSailboat />,
                title: "Toys, Kids & Babies"
            },
            outdoor: {
                img: <TfiBasketball />,
                title: "Outdoor, Fun & Sports"
            },
            automotive: {
                img: <IoCarSportOutline />,
                title: "Automotive"
            },
            tools: {
                img: <LuHammer />,
                title: "Tools & Home Improvement"
            }
    
        }
    ]

    return ( 
        <div>
            {category.map((item) => {
                <div>
                    <div>
                        <img src={item.tools.img}/>
                        <p>{item.title}</p>

                        console.log(category[0].img)
                    </div>
                </div>
            })}
        </div>
     );
}
 
export default Menu;