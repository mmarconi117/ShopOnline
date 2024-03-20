import Card from "@mui/material/Card"
import LivingRoom from './SubCategoriesFurniture/LivingRoom'
import DiningAndKitchen from './SubCategoriesFurniture/DiningAndKitchen'
import Bedroom from './SubCategoriesFurniture/Bedroom'
import Office from './SubCategoriesFurniture/Office'
import Outdoor from './SubCategoriesFurniture/Outdoor'
import KidsFurniture from './SubCategoriesFurniture/KidsFurniture'



const subcategories=[
  {
    title:"Living Room",
    tag:LivingRoom
  },{
    title:"Dining and Kitchen",
    tag:DiningAndKitchen
  },
  {
    title:"Bedroom",
    tag:Bedroom,
  },
  {
    title:"Office",
    tag:Office
  },
  {
    title:"Outdoor",
    tag:Outdoor
  },
  {
    title:"Kid's Furniture",
    tag:KidsFurniture
  }
  ]



function Furniture() {
  return (
    <section>
        <header>
          <h2>Furniture</h2>
        </header>
        <main>
          {subcategories.map((subcategory)=>{

            const EachSubCategoryTag=subcategory.tag

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

export default Furniture
