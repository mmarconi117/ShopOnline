import Bath from './Bath/Bath'
import Bedding from './Bedding/Bedding'
import Furniture from './Furniture/Furniture'
import HomeAppliance from './HomeAppliance/HomeAppliance'
import HomeDecor from './HomeDecor/HomeDecor'
import KitchenAndDining from './KitchenAndDining/KitchenAndDining'
import PetShop from './PetShop/PetShop';
import Banner from "../../../../assets/IMAGES/HomePetAppliances/banner.png"
import {Link} from 'react-router-dom';
import LOGO from '../../../../assets/ICONS/location-marker.svg'


const Coupons = () => {
  return (
    <div className="font-Roboto min-w-[279px] sm:min-w-[413px] h-[79px] sm:h-[131px] bg-[#F6FAFC] rounded-[8px] p-2 sm:px-6 sm:py-3 flex justify-between border border-[#E6E0E9] border-solid">
    <div className="flex flex-col justify-between gap-1">
      <div>
        <h1 className=" text-xl text-[25px] font-semibold sm:font-bold leading-7 sm:leading-[30px] text-[#55A0C7]">Tour $5 off</h1>
        <p className="text-[9px] font-normal leading-[14px] sm:text-base sm:leading-[19.2px] text-[#79767D]">Orders over $180</p>
      </div>
      <p className="text-xs sm:text-base sm:leading-[19.2px] text-[#48464C]">valid till 02/24</p>
    </div>
    <div className="flex flex-col justify-between items-end self-stretch">
      <div className="p-[10px]">
        <p className="text-[#48464C] text-xs sm:text-base sm:leading-[19.2px]">**978</p>
      </div>
      <div className="bg-[#55A0C7] text-[#F5F5F9] rounded-[400px] py-[6px] px-3 text-xs sm:text-base sm:leading-[19.2px]">Copy</div>
    </div>
  </div>
  );
}

const CouponsCorner = () => {
  return (
      <div className="w-full overflow-x-auto sm:w-[95%] px-4 py-8 sm:p-0 mx-auto h-auto flex gap-6 justify-between 2xl:justify-around sm:mt-8">
          <Coupons />
          <Coupons />
          <Coupons />
      </div>
  );
}

const Nav=()=>{
  return (
    <nav className='bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] max-sm:ml-[5px]'>
      <div className="flex justify-between items-center font-Roboto">
        <img src={LOGO} className="w-5 h-5"></img>
        <div className="text-xl sm:text-[31px] sm:leading-[31.2px] text-[#09618E] whitespace-nowrap font-semibold sm:font-bold">
          Home, pets & appliances
        </div>
      </div>
      <ul className='max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto whitespace-nowrap'>
        <li><Link href="">Bath</Link></li>
        <li><Link href="">Bedding</Link></li>
        <li><Link href="">Furniture</Link></li>
        <li><Link href="">Home Appliance</Link></li>
        <li><Link href="">Home Decor</Link></li>
        <li><Link href="">Kitchen and Dining</Link></li>
        <li><Link href="">Pet Shop</Link></li>
      </ul>
  </nav>
  )

}

function Rectangle() {
  return (
    <img src={Banner} className="object-cover min-h-[184px] w-full"/>
  );
}



const HomePetAndAppliances = () => {
  return (
    <section className="bg-[#f5f5f9]">
        <Rectangle/>
        <CouponsCorner/>
        <Nav/>
        <Bath/>
        <Bedding/>
        <Furniture/>
        <HomeAppliance/>
        <HomeDecor/>
        <KitchenAndDining/>
        <PetShop/>
    </section>
  )
} 

export default HomePetAndAppliances;
