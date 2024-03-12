import { useNavigate } from 'react-router-dom'

function Earringsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Earringsview = () => {
    // function that navigates to bottoms page
    navigate('/earringsview')
  }

  return (
    <div>
      <button href="#" onClick={Earringsview}>
        Earrings
      </button>
    </div>
  )
}

export default Earringsview
