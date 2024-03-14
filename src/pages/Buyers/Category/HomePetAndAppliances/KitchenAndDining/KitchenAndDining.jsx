import React from 'react'
import Card from "@mui/material/Card"

const subcategories=[
"Kitchen Appliances",
"Kitchen Utensils",
"Cookware",
"Dinnerware",
"Kitchen Storage",
"Baking",
]

function KitchenAndDining() {
  return (
    <section>
        <header>
          <h2>Kitchen and Dininig</h2>
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

export default KitchenAndDining
