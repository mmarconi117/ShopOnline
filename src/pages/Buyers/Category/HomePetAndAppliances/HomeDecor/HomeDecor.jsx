import React from 'react'
import Card from "@mui/material/Card"

const subcategories=[
"Wall Decor",
"Indoor Plants",
"Lamps",
"Decorative Objects",
"Rugs",
"Curtains",
]

function HomeDecor() {
  return (
    <section>
        <header>
          <h2>Home Decor</h2>
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

export default HomeDecor
