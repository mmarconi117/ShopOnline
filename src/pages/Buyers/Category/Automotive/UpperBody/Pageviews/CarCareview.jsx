import { useNavigate } from 'react-router-dom'

function CarCareview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const CarCareview = () => {
    // function that navigates to bottoms page
    navigate('/carcareview')
  }

  return (
    <div>
      <button href="#" onClick={CarCareview}>
        Car Care
      </button>
    </div>
  )
}

export default CarCareview
