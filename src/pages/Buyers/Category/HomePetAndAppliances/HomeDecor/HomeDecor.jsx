import React from 'react'
import Card from "@mui/material/Card"
import WallDecor from './SubCategoriesHomeDecor/WallDecor'
import IndoorPlants from './SubCategoriesHomeDecor/IndoorPlants'
import Lamps from './SubCategoriesHomeDecor/Lamps'
import DecorativeObjects from './SubCategoriesHomeDecor/DecorativeObjects'
import Rugs from './SubCategoriesHomeDecor/Rugs'
import Curtains from './SubCategoriesHomeDecor/Curtains'



const subcategories=[
  {
    title:"Wall Decor",
    tag: WallDecor
  },{
    title:"Indoor Plants",
    tag:IndoorPlants
  },
  {
    title:"Lamps",
    tag:Lamps,
  },
  {
    title:"Decorative Objects",
    tag:DecorativeObjects
  },
  {
    title:"Rugs",
    tag:Rugs
  },
  {
    title:"Curtains",
    tag:Curtains
  }
  ]

function HomeDecor() {
  return (
    <section>
        <header>
          <h2>Home Decor</h2>
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

export default HomeDecor
