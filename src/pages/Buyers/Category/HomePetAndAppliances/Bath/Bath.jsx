import React from 'react';
import Card from "@mui/material/Card";
import BathRugAndMats from './SubCategoriesBath/BathRugAndMats';
import BathroomCurtains from './SubCategoriesBath/BathroomCurtains';
import BathroomFurniture from './SubCategoriesBath/BathroomFurniture';
import BathroomStorage from './SubCategoriesBath/BathroomFurniture';
import BathroomEssentials from './SubCategoriesBath/BathroomEssentials';
import BathroomMirrors from './SubCategoriesBath/BathroomMirrors';
import FragrancesAndCandles from './SubCategoriesBath/FragrancesAndCandles';
import Towels from './SubCategoriesBath/Towels';


const subcategories=[
{
  title:"Bath Rugs and Mats",
  tag:BathRugAndMats
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



export default (Bath)
