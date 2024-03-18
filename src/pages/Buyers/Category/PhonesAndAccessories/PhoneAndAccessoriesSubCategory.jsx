import UpperBody from './UpperBody/UpperBody.jsx'
import BluetoothSpeakersRow from './BluetoothSpeakers/BluetoothSpeakers.jsx'
import ChargersAndCablesRow from './ChargersAndCables/ChargersAndCables.jsx'
import EarphonesRow from './Earphones/Earphones.jsx'
import PhonecasesRow from './PhoneCases/PhoneCases.jsx'
import SmartPhonesRow from './SmartPhones/SmartPhones.jsx'
import SmartWatchesRow from './SmartWatches/SmartWatches.jsx'

function PhoneAndAccessoriesSubCategory() {
  return (
    <div className="bg-[#f5f5f9]">
      <UpperBody></UpperBody>
      <BluetoothSpeakersRow></BluetoothSpeakersRow>
      <ChargersAndCablesRow></ChargersAndCablesRow>
      <EarphonesRow></EarphonesRow>
      <PhonecasesRow></PhonecasesRow>
      <SmartPhonesRow></SmartPhonesRow>
      <SmartWatchesRow></SmartWatchesRow>
    </div>
  )
}

export default PhoneAndAccessoriesSubCategory
