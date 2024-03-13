import { useNavigate } from 'react-router-dom'

function Wristwatchesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Wristwatchesview = () => {
    // function that navigates to activewear page
    navigate('/wristwatches')
  }

  return (
    <div>
      <button href="#" onClick={Wristwatchesview}>
        WristWatches
      </button>
    </div>
  )
}

export default Wristwatchesview
