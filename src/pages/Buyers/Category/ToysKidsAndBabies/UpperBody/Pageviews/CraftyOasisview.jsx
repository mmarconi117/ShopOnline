import { useNavigate } from 'react-router-dom'

function CraftyOasisview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const CraftyOasisview = () => {
    // function that navigates to bottoms page
    navigate('/craftyoasisview')
  }

  return (
    <div>
      <button href="#" onClick={CraftyOasisview}>
        Crafty Oasis
      </button>
    </div>
  )
}

export default CraftyOasisview
