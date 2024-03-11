import UpperBody from './UpperBody/UpperBody.jsx'
import BraceletsRow from './Bracelets/Bracelets.jsx'
import EarringsRow from './Earrings/Earrings.jsx'
import NecklacesRow from './Necklaces/Necklaces.jsx'
import PocketWatchesRow from './PocketWatches/PocketWatches.jsx'
import RingsRow from './Rings/Rings.jsx'
import SetsRow from './Sets/Sets.jsx'
import SmartWatchesRow from './SmartWatches/SmartWatches.jsx'
import TrendingRow from './Trending/Trending.jsx'
import WristWatchesRow from './WristWatches/WristWatches.jsx'

function JewelleryAndWatchesSubCategory() {
  return (
    <div className="bg-[#f5f5f9]">
      <UpperBody></UpperBody>
      <BraceletsRow></BraceletsRow>
      <EarringsRow></EarringsRow>
      <NecklacesRow></NecklacesRow>
      <PocketWatchesRow></PocketWatchesRow>
      <RingsRow></RingsRow>
      <SetsRow></SetsRow>
      <SmartWatchesRow></SmartWatchesRow>
      <TrendingRow></TrendingRow>
      <WristWatchesRow></WristWatchesRow>
    </div>
  )
}

export default JewelleryAndWatchesSubCategory
