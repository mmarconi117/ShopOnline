import { useNavigate } from 'react-router-dom'

function Earphonesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Earphonesview = () => {
    // function that navigates to tops page
    navigate('/earphonesview')
  }

  return (
    <div>
      <button href="#" onClick={Earphonesview}>
        Earphones
      </button>
    </div>
  )
}

export default Earphonesview
