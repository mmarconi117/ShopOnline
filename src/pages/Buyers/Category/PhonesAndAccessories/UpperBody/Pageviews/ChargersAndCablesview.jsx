import { useNavigate } from 'react-router-dom'

function ChargersAndCablesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const ChargersAndCablesview = () => {
    // function that navigates to tops page
    navigate('/chargersandcablesview')
  }

  return (
      <button className="whitespace-nowrap" href="#" onClick={ChargersAndCablesview}>
        Chargers And Cables
      </button>
  )
}

export default ChargersAndCablesview
