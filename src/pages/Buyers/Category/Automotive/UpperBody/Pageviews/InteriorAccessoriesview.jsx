import { useNavigate } from 'react-router-dom'

function InteriorAccessoriesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const InteriorAccessoriesview = () => {
    // function that navigates to tops page
    navigate('/interioraccessoriesview')
  }

  return (
    <div>
      <button href="#" onClick={InteriorAccessoriesview}>
        Interior Accessories
      </button>
    </div>
  )
}

export default InteriorAccessoriesview
