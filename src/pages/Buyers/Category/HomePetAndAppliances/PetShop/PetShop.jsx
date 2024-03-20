import Card from "@mui/material/Card"
import PetFood from './SubCategoriesPetShop/PetFood'
import PetSupplies from './SubCategoriesPetShop/PetSupplies'
import PetOutfits from './SubCategoriesPetShop/PetOutfits'
import PetTraining from './SubCategoriesPetShop/PetTraining'
import BirdsAndSmallAnimals from './SubCategoriesPetShop/BirdsAndSmallAnimals'
import AqurariumAndFishSupplies from './SubCategoriesPetShop/AqurariumAndFishSupplies'
import PetCare from './SubCategoriesPetShop/PetCare'
import PetHealthAndWellness from './SubCategoriesPetShop/PetHealthAndWellness'

const subcategories=[
  {
    title:"Pet Food",
    tag: PetFood
  },{
    title:"Pet Supplies",
    tag: PetSupplies
  },
  {
    title:"Pet Outfits",
    tag:PetOutfits,
  },
  {
    title:"Pet Training",
    tag:PetTraining
  },
  {
    title:"Birds and Small Animals",
    tag:BirdsAndSmallAnimals
  },
  {
    title:"Aqurarium and Fish Supplies",
    tag: AqurariumAndFishSupplies
  },
  {
    title:"Pet Care",
    tag:PetCare
  },
  {
    title:"Pet Health and Wellness",
    tag:PetHealthAndWellness
  }
  ]

function PetShop() {
  return (
    <section>
        <header>
          <h2>Pet Shop</h2>
        </header>
        <main>
          {subcategories.map((subcategory)=>{
            
            const EachSubCategoryTag=subcategory.tag
            // https://legacy.reactjs.org/docs/jsx-in-depth.html
            

            return (
              <Card key={subcategory.id}>
                <h3>  
          
                {subcategory.title}
          
                </h3>
                <EachSubCategoryTag/>
              </Card>
            )
          })}
        </main>
    </section>
  )
}

export default PetShop
