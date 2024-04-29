import { useNavigate } from 'react-router-dom'

function AdventureSpotview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const AdventureSpotview = () => {
    // function that navigates to jumpsuits page
    navigate('/adventurespotview')
  }

  return (
    <div>
      <button href="#" onClick={AdventureSpotview}>
        Adventure Spot
      </button>
    </div>
  )
}

export default AdventureSpotview
