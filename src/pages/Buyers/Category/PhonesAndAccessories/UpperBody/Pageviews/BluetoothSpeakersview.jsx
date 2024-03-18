import { useNavigate } from 'react-router-dom'

function BluetoothSpeakersview() {
  //React Router element that helps to navigate between pages
  const navigate = useNavigate()

  const BluetoothSpeakersview = () => {
    // function that navigates to swimwear page
    navigate('/bluetoothspeakerview')
  }

  return (
    <div>
      <button href="#" onClick={BluetoothSpeakersview}>
        Bluetooth Speakers
      </button>
    </div>
  )
}

export default BluetoothSpeakersview
