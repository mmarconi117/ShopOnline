import { useNavigate } from 'react-router-dom'

function CuddlyCornerview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const CuddlyCornerview = () => {
    // function that navigates to tops page
    navigate('/cuddlycornerview')
  }

  return (
    <div>
      <button href="#" onClick={CuddlyCornerview}>
        Cuddly Corner
      </button>
    </div>
  )
}

export default CuddlyCornerview
