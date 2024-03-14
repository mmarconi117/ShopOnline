import React from 'react';
import Card from "@mui/material/Card"

const subcategories=[
"Bath Rugs and Mats",
"Bathroom Curtains",
"Bathroom Furniture",
"Bathroom Storage",
"Bathroom Essentrials",
"Bathroom Mirrors",
"Fragrances and Candles",
"Towels"
]

const Bath=() =>{


  return (
    <section>
        <header>
          <h2>Bath</h2>
        </header>
        <main>
          {subcategories.map(subcategory=>{
            return (
              <Card key={subcategory.id}>
                <link>
                {subcategory}
                </link>
              </Card>
            )
          })}
        </main>
    </section>
  )
}



export default (Bath)
