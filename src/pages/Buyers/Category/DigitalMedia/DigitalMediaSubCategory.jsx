import UpperBody from './UpperBody/UpperBody.jsx'
import DigitalAudioPlayersRow from './DigitalAudioPlayers/DigitalAudioPlayers.jsx'
import DigitalCameraRow from './DigitalCamera/DigitalCamera.jsx'
import EReadersRow from './EReaders/EReaders.jsx'
import EReadersAccessoriesRow from './EReadersAccessories/EReadersAccessories.jsx'
import StreamingDevicesRow from './StreamingDevices/StreamingDevices.jsx'

function DigitalMediaSubCategory() {
  return (
    <div className="bg-[#f5f5f9]">
      <UpperBody></UpperBody>
      <EReadersRow></EReadersRow>
      <EReadersAccessoriesRow></EReadersAccessoriesRow>
      <StreamingDevicesRow></StreamingDevicesRow>
      <DigitalCameraRow></DigitalCameraRow>
      <DigitalAudioPlayersRow></DigitalAudioPlayersRow>
    </div>
  )
}

export default DigitalMediaSubCategory
