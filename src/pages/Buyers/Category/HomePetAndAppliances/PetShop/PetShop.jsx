import React from 'react'
import Card from "@mui/material/Card"

const subcategories=[
"Pet Food",
"Pet supplies",
"Pet Outfits",
"Pet Training",
"Birds and Small Animals",
"Aqurarium and Fish Supplies",
"Pet Care",
"Pet Health and Wellness"
]

function PetShop() {
  return (
    <section>
        <header>
          <h2>Pet Shop</h2>
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

export default PetShop
