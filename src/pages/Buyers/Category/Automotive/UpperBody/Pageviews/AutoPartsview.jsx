import { useNavigate } from 'react-router-dom'

function AutoPartsview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const AutoPartsview = () => {
    // function that navigates to activewear page
    navigate('/autopartsview')
  }

  return (
    <div>
      <button href="#" onClick={AutoPartsview}>
        Auto Parts
      </button>
    </div>
  )
}

export default AutoPartsview
