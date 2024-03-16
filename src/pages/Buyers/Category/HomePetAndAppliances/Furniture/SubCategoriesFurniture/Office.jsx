import React from 'react'

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
const Office = () => {
  return (
    <figure>
      {images.map(image=>{
        return(
          <frame key={image.id}>
            <img src={image.imageLink}/>
            <p>{image.description}</p>
            <h3>from {image.price}</h3>
          </frame>
        )
      })}
    </figure>
  )
}


// const mapState = state => {

// }

// const mapDispatch = dispatch => {

// }

export default Office
