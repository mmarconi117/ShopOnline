import { useNavigate } from 'react-router-dom'

function WheelsAndTiresview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const WheelsAndTiresview = () => {
    // function that navigates to activewear page
    navigate('/wheelsandtiresview')
  }

  return (
    <div>
      <button href="#" onClick={WheelsAndTiresview}>
        Wheels And Tires
      </button>
    </div>
  )
}

export default WheelsAndTiresview
