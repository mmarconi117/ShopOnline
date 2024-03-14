import React from 'react'
import Card from "@mui/material/Card"

const subcategories=[
"Living Room",
"Dining and Kitchen",
"Bedroom",
"Office",
"Outdoor",
"Kids Furniture",
]




function Furniture() {
  return (
    <section>
    <header>
      <h2>Furniture</h2>
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

export default Furniture
