import { useNavigate } from 'react-router-dom'

function DigitalAudioPlayersview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const DigitalAudioPlayersview = () => {
    // function that navigates to jumpsuits page
    navigate('/digitalaudioplayersview')
  }

  return (
    <div>
      <button href="#" onClick={DigitalAudioPlayersview}>
        Digital Audio Players
      </button>
    </div>
  )
}

export default DigitalAudioPlayersview
