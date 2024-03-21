import Bath from './Bath/Bath'
import Bedding from './Bedding/Bedding'
import Furniture from './Furniture/Furniture'
import HomeAppliance from './HomeAppliance/HomeAppliance'
import HomeDecor from './HomeDecor/HomeDecor'
import KitchenAndDining from './KitchenAndDining/KitchenAndDining'
import PetShop from './PetShop/PetShop';
import {Link} from 'react-router-dom';


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
      <div className="w-full overflow-x-auto sm:w-[95%] px-4 py-8 sm:p-0 mx-auto h-auto flex gap-6 justify-between sm:mt-8">
          <Coupons />
          <Coupons />
          <Coupons />
      </div>
  );
}

const Nav=()=>{
  return (
    <nav className='m-10'>
    <ul className='flex justify-between items-center'>
      <li className='text-center' ><h1>Home, Pet and Appliances</h1></li>
      <li className='text-center'><Link href="">Bath</Link></li>
      <li className='text-center'><Link href="">Bedding</Link></li>
      <li className='text-center'><Link href="">Furniture</Link></li>
      <li className='text-center'><Link href="">Home Appliance</Link></li>
      <li className='text-center'><Link href="">Home Decor</Link></li>
      <li className='text-center'><Link href="">Kitchen and Dining</Link></li>
      <li className='text-center'><Link href="">Pet Shop</Link></li>
    </ul>
  </nav>
  )

}

function Rectangle() {
  return (
    <div
      className="w-full sm:w-[95%] h-[184px] sm:h-[404px] bg-[#E2EFF6] mx-auto my-auto rounded-[12px]"
    >

    </div>
  );
}



const HomePetAndAppliances = () => {
  return (
    <section className="bg-[#f5f5f9] m-auto">
      <Rectangle/>
      <CouponsCorner/>
      <Nav/>
      <main>
        <Bath/>
        <Bedding/>
        <Furniture/>
        <HomeAppliance/>
        <HomeDecor/>
        <KitchenAndDining/>
        <PetShop/>
      </main>
    </section>
  )
}

export default HomePetAndAppliances
