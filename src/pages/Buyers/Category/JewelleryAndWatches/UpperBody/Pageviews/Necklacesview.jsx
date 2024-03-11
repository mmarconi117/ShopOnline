import { useNavigate } from 'react-router-dom'

function Necklacesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Necklacesview = () => {
    // function that navigates to dresses page
    navigate('/necklacesview')
  }

  return (
    <div>
      <button href="#" onClick={Necklacesview}>
        Necklaces
      </button>
    </div>
  )
}

export default Necklacesview
