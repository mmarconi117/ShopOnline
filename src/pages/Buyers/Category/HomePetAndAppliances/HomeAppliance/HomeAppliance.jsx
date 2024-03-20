import Card from "@mui/material/Card"
import Refrigerators from './SubCategoriesHomeAppliance/Refrigerators'
import WashingMachines from './SubCategoriesHomeAppliance/WashingMachines'
import Dryers from './SubCategoriesHomeAppliance/Dryers'
import Dishwashers from './SubCategoriesHomeAppliance/Dishwashers'
import Microwaves from './SubCategoriesHomeAppliance/Microwaves'
import Ovens from './SubCategoriesHomeAppliance/Ovens'
import VacuumCleaners from './SubCategoriesHomeAppliance/VacuumCleaners'



const subcategories=[
  {
    title:"Refrigerators",
    tag:Refrigerators
  },{
    title:"Washing Machines",
    tag:WashingMachines
  },
  {
    title:"Dryers",
    tag:Dryers,
  },
  {
    title:"Dishwashers",
    tag:Dishwashers
  },
  {
    title:"Microwaves",
    tag:Microwaves
  },
  {
    title:"Ovens",
    tag:Ovens
  },
  {
    title:"Vacuum Cleaners",
    tag:VacuumCleaners
  }
  ]
  

function HomeAppliance() {
  return (
    <section>
        <header>
          <h2>Home Appliance</h2>
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

export default HomeAppliance
