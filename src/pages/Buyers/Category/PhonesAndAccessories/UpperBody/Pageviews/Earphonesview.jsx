import { useNavigate } from 'react-router-dom'

function Earphonesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Earphonesview = () => {
    // function that navigates to tops page
    navigate('/earphonesview')
  }

  return (
      <button className="whitespace-nowrap" href="#" onClick={Earphonesview}>
        Earphones
      </button>
  )
}

export default Earphonesview
