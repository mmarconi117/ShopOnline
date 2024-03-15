import React from 'react'
import Card from "@mui/material/Card"
import KitchenAppliances from './SubCategoriesKitchenAndDining/KitchenAppliances'
import KitchenUtensils from './SubCategoriesKitchenAndDining/KitchenUtensils'
import Cookware from './SubCategoriesKitchenAndDining/Cookware'
import Dinnerware from './SubCategoriesKitchenAndDining/Dinnerware'
import KitchenStorage from './SubCategoriesKitchenAndDining/KitchenStorage'
import Baking from './SubCategoriesKitchenAndDining/Baking'



const subcategories=[
  {
    title:"Kitchen Appliances",
    tag: KitchenAppliances
  },{
    title:"Kitchen Utensils",
    tag:KitchenUtensils
  },
  {
    title:"Cookware",
    tag:Cookware,
  },
  {
    title:"Dinnerware",
    tag:Dinnerware
  },
  {
    title:"Kitchen Storage",
    tag:KitchenStorage
  },
  {
    title:"Baking",
    tag:Baking
  }
  ]

function KitchenAndDining() {
  return (
    <section>
        <header>
          <h2>Kitchen and Dining</h2>
        </header>
        <main>
          {subcategories.map((subcategory)=>{
            
            const EachSubCategoryTag=subcategory.tag
            // https://legacy.reactjs.org/docs/jsx-in-depth.html
            

            return (
              <Card key={subcategory.id}>
                <h3>  
                  <a>
                {subcategory.title}
                </a>
                </h3>
                <EachSubCategoryTag/>
              </Card>
            )
          })}
        </main>
    </section>
  )
}

export default KitchenAndDining
