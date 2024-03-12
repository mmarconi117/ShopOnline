import { useNavigate } from 'react-router-dom'

function Braceletsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Braceletsview = () => {
    // function that navigates to activewear page
    navigate('/braceletsview')
  }

  return (
    <div>
      <button href="#" onClick={Braceletsview}>
        Bracelets
      </button>
    </div>
  )
}

export default Braceletsview
