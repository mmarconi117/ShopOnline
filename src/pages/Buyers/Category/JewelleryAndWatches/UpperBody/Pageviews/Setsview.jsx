import { useNavigate } from 'react-router-dom'

function Setsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Setsview = () => {
    // function that navigates to tops page
    navigate('/setsview')
  }

  return (
    <div>
      <button href="#" onClick={Setsview}>
        Sets
      </button>
    </div>
  )
}

export default Setsview
