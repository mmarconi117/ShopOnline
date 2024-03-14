import React from 'react'
import Card from "@mui/material/Card"

const subcategories=[
"Refrigerators",
"Washing Machines",
"Dryers",
"Dishwashers",
"Microwaves",
"Ovens",
"Vacuum Cleaners"
]
function HomeAppliance() {
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

export default HomeAppliance
