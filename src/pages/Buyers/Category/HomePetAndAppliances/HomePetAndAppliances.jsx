import React from 'react'
import Bath from './Bath/Bath'
import Bedding from './Bedding/Bedding'
import Furniture from './Furniture/Furniture'
import HomeAppliance from './HomeAppliance/HomeAppliance'
import HomeDecor from './HomeDecor/HomeDecor'
import KitchenAndDining from './KitchenAndDining/KitchenAndDining'
import PetShop from './PetShop/PetShop'


const HomePetAndAppliances = () => {
  return (
    <section className="bg-[#f5f5f9]">
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

export default HomePetAndAppliances
