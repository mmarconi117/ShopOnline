import { useNavigate } from 'react-router-dom'

function FantasyFashionview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const FantasyFashionview = () => {
    // function that navigates to tops page
    navigate('/fantasyfashionview')
  }

  return (
    <div>
      <button href="#" onClick={FantasyFashionview}>
        Fantasy Fashion
      </button>
    </div>
  )
}

export default FantasyFashionview
