import { useNavigate } from 'react-router-dom'

function FluidAndChemicalsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const FluidAndChemicalsview = () => {
    // function that navigates to swimwear page
    navigate('/fluidandchemicalsrview')
  }

  return (
    <div>
      <button href="#" onClick={FluidAndChemicalsview}>
        Fluid And Chemicals
      </button>
    </div>
  )
}

export default FluidAndChemicalsview
