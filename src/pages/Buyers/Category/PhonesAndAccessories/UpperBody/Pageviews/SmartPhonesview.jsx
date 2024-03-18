import { useNavigate } from 'react-router-dom'

function SmartPhonesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const SmartPhonesview = () => {
    // function that navigates to activewear page
    navigate('/smartphonesview')
  }

  return (
    <div>
      <button href="#" onClick={SmartPhonesview}>
        Smart Phones
      </button>
    </div>
  )
}

export default SmartPhonesview
