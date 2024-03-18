import Form from './Pageviews/PhonesAndAccessoriesview'
import BluetoothSpeakersview from './Pageviews/BluetoothSpeakersview'
import ChargersAndCablesview from './Pageviews/ChargersAndCablesview'
import Earphonesview from './Pageviews/Earphonesview'
import Phonecasesview from './Pageviews/Phonecasesview'
import SmartPhonesview from './Pageviews/SmartPhonesview'
import SmartWatchesview from './Pageviews/SmartWatchesview'

function Pagerow() {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]">
      <Form></Form>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <BluetoothSpeakersview></BluetoothSpeakersview>
        <ChargersAndCablesview></ChargersAndCablesview>
        <Earphonesview></Earphonesview>
        <Phonecasesview></Phonecasesview>
        <SmartPhonesview></SmartPhonesview>
        <SmartWatchesview></SmartWatchesview>
      </div>
    </div>
  )
}

export default Pagerow
