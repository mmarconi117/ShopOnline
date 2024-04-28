import { useNavigate } from 'react-router-dom'

function RollAndExploreview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const RollAndExploreview = () => {
    // function that navigates to tops page
    navigate('/rollandexploreview')
  }

  return (
    <div>
      <button href="#" onClick={RollAndExploreview}>
        Roll And Explore
      </button>
    </div>
  )
}

export default RollAndExploreview
