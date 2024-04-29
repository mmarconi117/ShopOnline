import { useNavigate } from 'react-router-dom'

function SupriseHavenview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const SupriseHavenview = () => {
    // function that navigates to tops page
    navigate('/suprisehavenview')
  }

  return (
    <div>
      <button href="#" onClick={SupriseHavenview}>
        Suprise Haven
      </button>
    </div>
  )
}

export default SupriseHavenview
