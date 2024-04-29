import { useNavigate } from 'react-router-dom'

function ThrillCornerview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const ThrillCornerview = () => {
    // function that navigates to activewear page
    navigate('/thrillcornerview')
  }

  return (
    <div>
      <button href="#" onClick={ThrillCornerview}>
        Thrill Corner
      </button>
    </div>
  )
}

export default ThrillCornerview
