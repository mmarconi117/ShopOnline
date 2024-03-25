import { useNavigate } from 'react-router-dom'

function ElectronicsAndGadgetsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const ElectronicsAndGadgetsview = () => {
    // function that navigates to dresses page
    navigate('/electronicsandgadgets')
  }

  return (
    <div>
      <button href="#" onClick={ElectronicsAndGadgetsview}>
        Electronics And Gadgets
      </button>
    </div>
  )
}

export default ElectronicsAndGadgetsview
