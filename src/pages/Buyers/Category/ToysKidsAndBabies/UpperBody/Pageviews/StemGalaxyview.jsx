import { useNavigate } from 'react-router-dom'

function StemGalaxyview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const StemGalaxyview = () => {
    // function that navigates to swimwear page
    navigate('/stemgalaxyview')
  }

  return (
    <div>
      <button href="#" onClick={StemGalaxyview}>
        Stem Galaxy
      </button>
    </div>
  )
}

export default StemGalaxyview
