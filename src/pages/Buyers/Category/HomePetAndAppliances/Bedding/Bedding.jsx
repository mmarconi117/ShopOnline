import React from 'react'
import Card from "@mui/material/Card"

const subcategories=[
"Bed Sheets",
"Duvet Covers",
"Comforters and Quilts",
"Decorative Objects",
"Rugs",
"Curtains"
]

function Bedding() {
  
  return (
    <section>
        <header>
          <h2>Bedding</h2>
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

export default Bedding
