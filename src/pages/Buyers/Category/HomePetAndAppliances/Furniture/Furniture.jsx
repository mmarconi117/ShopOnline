import Card from "@mui/material/Card"


const images=[
  {
    imageLink:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0
  },
  {
    imageLink:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0
  },
  {
    imageLink:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0
  },
  {
    imageLink:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0
  },
  {
    imageLink:'https://media.glamourmagazine.co.uk/photos/65afa106bb74fd272757ef20/16:9/w_1600%2Cc_limit/bath%2520towels%2520230124%25204544H044AA_055_b2_L.jpg',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price:0
  }

]



function Furniture() {
  return (
    <section className='m-10'>
        <header>
          <h2>Furniture</h2>
        </header>
        <main>
        <ul className='flex justify-between items-center'>
            {images.map(image=>{
              return(
                <li  key={image.id}>
                  <Card>
                    <img src={image.imageLink}/>
                    <p>{image.description}</p>
                    <h3>from {image.price}</h3>
                  </Card>
                </li>
                  ) 
                }
              )
            }
        </ul>
        </main>
    </section>
  )
}

export default Furniture
