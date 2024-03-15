import React from 'react'
import Card from "@mui/material/Card";
import BedSheets from './SubCategoriesBedding/BedSheets';
import DuvetCovers from './SubCategoriesBedding/DuvetCovers';
import ComfortersAndQuilts from './SubCategoriesBedding/ComfortersAndQuilts';
import Blankets from './SubCategoriesBedding/Blankets';
import Pillows from './SubCategoriesBedding/Pillows';
import PillowCovers from './SubCategoriesBedding/PillowCovers';
import BedSkirts from './SubCategoriesBedding/BedSkirts';

const subcategories=[
  {
    title:"Bed Sheets",
    tag:BedSheets
  },{
    title:"Duvet Covers",
    tag:DuvetCovers
  },
  {
    title:"Comforters and Quilts",
    tag:ComfortersAndQuilts,
  },
  {
    title:"Blankets",
    tag:Blankets
  },
  {
    title:"Pillows",
    tag:Pillows
  },
  {
    title:"Pillow Covers",
    tag:PillowCovers
  },
  {
    title:"Bed Skirts",
    tag:BedSkirts
  }
  ]
  

function Bedding() {
  
  return (
    <section>
        <header>
          <h2>Bedding</h2>
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

export default Bedding
