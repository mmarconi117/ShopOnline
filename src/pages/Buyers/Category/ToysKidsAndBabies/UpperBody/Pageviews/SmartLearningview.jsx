import { useNavigate } from 'react-router-dom'

function SmartLearningview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const SmartLearningview = () => {
    // function that navigates to dresses page
    navigate('/smartlearningview')
  }

  return (
    <div>
      <button href="#" onClick={SmartLearningview}>
        Smart Learning
      </button>
    </div>
  )
}

export default SmartLearningview
