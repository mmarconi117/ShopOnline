import { useNavigate } from 'react-router-dom'

function CreateAndPlayview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const CreateAndPlayview = () => {
    // function that navigates to bottoms page
    navigate('/createandplayview')
  }

  return (
    <div>
      <button href="#" onClick={CreateAndPlayview}>
        Create And Play
      </button>
    </div>
  )
}

export default CreateAndPlayview
