import Bath from './Bath/Bath'
// import Bedding from './Bedding/Bedding'
import Furniture from './Furniture/Furniture'
import HomeAppliance from './HomeAppliance/HomeAppliance'
import HomeDecor from './HomeDecor/HomeDecor'
import KitchenAndDining from './KitchenAndDining/KitchenAndDining'
import PetShop from './PetShop/PetShop';
import {Link} from 'react-router-dom'



const HomePetAndAppliances = () => {
  return (
    <section className="bg-[#f5f5f9]">
      <nav className='flex...' >
        <ul>
          <li><h2>Home, Pet and Appliances</h2></li>
          <li><Link href="">Bath</Link></li>
          <li><Link href="">Bedding</Link></li>
          <li><Link href="">Furniture</Link></li>
          <li><Link href="">Home Appliance</Link></li>
          <li><Link href="">Home Decor</Link></li>
          <li><Link href="">Kitchen and Dining</Link></li>
          <li><Link href="">Pet Shop</Link></li>
        </ul>
      </nav>
      <main>
        <Bath/>
        {/* <Bedding/> */}
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
