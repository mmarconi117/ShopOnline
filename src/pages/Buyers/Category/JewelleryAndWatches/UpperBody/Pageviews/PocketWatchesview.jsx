import { useNavigate } from 'react-router-dom'

function PocketWatchesview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const PocketWatchesview = () => {
    // function that navigates to jumpsuits page
    navigate('/pocketwatchesview')
  }

  return (
    <div>
      <button href="#" onClick={PocketWatchesview}>
        Pocket Watches
      </button>
    </div>
  )
}

export default PocketWatchesview
