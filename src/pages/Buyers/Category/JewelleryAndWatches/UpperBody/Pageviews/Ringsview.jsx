import { useNavigate } from 'react-router-dom'

function Ringsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const Ringsview = () => {
    // function that navigates to swimwear page
    navigate('/ringsrview')
  }

  return (
    <div>
      <button href="#" onClick={Ringsview}>
        Rings
      </button>
    </div>
  )
}

export default Ringsview
