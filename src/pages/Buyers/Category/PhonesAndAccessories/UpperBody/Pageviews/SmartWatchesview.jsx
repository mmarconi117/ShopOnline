import { useNavigate } from 'react-router-dom'

function SmartWatchesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const SmartWatchesview = () => {
    // function that navigates to activewear page
    navigate('/smartwatchesview')
  }

  return (
      <button className="whitespace-nowrap" href="#" onClick={SmartWatchesview}>
        Smart Watches
      </button>
  )
}

export default SmartWatchesview
