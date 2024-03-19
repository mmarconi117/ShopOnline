import React from 'react';
import Card from "@mui/material/Card";
import BathRugsAndMats from './SubCategoriesBath/BathRugsAndMats';
import BathroomCurtains from './SubCategoriesBath/BathroomCurtains';
import BathroomFurniture from './SubCategoriesBath/BathroomFurniture';
import BathroomStorage from './SubCategoriesBath/BathroomStorage';
import BathroomEssentials from './SubCategoriesBath/BathroomEssentials';
import BathroomMirrors from './SubCategoriesBath/BathroomMirrors';
import FragrancesAndCandles from './SubCategoriesBath/FragrancesAndCandles';
import Towels from './SubCategoriesBath/Towels';


const subcategories=[
{
  title:"Bath Rugs and Mats",
  tag:BathRugsAndMats
},{
  title:"Bathroom Curtains",
  tag:BathroomCurtains
},
{
  title:"Bathroom Furniture",
  tag:BathroomFurniture,
},
{
  title:"Bathroom Storage",
  tag:BathroomStorage
},
{
  title:"Bathroom Essentials",
  tag:BathroomEssentials
},
{
  title:"Bathroom Mirrors",
  tag:BathroomMirrors
},
{
  title:"Fragrances and Candles",
  tag:FragrancesAndCandles
},
{
  title:"Towels",
  tag:Towels
},
]


const Bath=() =>{

  return (
    <section>
        <header>
          <h2>Bath</h2>
        </header>
        <main>
          {subcategories.map((subcategory)=>{
            
            const EachSubCategoryTag=subcategory.tag
            // https://legacy.reactjs.org/docs/jsx-in-depth.html/////--->This is my note for sources
            

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



export default Bath
