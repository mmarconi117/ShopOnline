import { useNavigate } from 'react-router-dom'

function ExteriorAccessoriesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const ExteriorAccessoriesview = () => {
    // function that navigates to jumpsuits page
    navigate('/exterioraccessoriesview')
  }

  return (
    <div>
      <button href="#" onClick={ExteriorAccessoriesview}>
        Exterior Accessories
      </button>
    </div>
  )
}

export default ExteriorAccessoriesview
