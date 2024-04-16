import Form from './Pageviews/DigitalMediaview.jsx'
import DigitalAudioPlayersview from './Pageviews/DigitalAudioPlayersview.jsx'
import DigitalCameraview from './Pageviews/DigitalCameraview.jsx'
import EReadersAccessoriesview from './Pageviews/EReadersAccessoriesview.jsx'
import EReadersview from './Pageviews/EReadersview.jsx'
import StreamingDevicesview from './Pageviews/StreamingDevicesview.jsx'
function Pagerow() {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]">
      <Form></Form>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <EReadersview></EReadersview>
        <EReadersAccessoriesview></EReadersAccessoriesview>
        <StreamingDevicesview></StreamingDevicesview>
        <DigitalCameraview></DigitalCameraview>
        <DigitalAudioPlayersview></DigitalAudioPlayersview>
      </div>
    </div>
  )
}

export default Pagerow
