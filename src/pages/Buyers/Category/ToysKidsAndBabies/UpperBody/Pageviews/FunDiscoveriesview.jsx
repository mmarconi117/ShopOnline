import { useNavigate } from 'react-router-dom'

function FunDiscoveriesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const FunDiscoveriesview = () => {
    // function that navigates to activewear page
    navigate('/fundiscoveriesview')
  }

  return (
    <div>
      <button href="#" onClick={FunDiscoveriesview}>
        Fun Discoveries
      </button>
    </div>
  )
}

export default FunDiscoveriesview
