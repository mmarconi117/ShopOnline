import Form from './Pageviews/JewelleryAndWatchesview'
import Setsview from './Pageviews/Setsview'
import Earringsview from './Pageviews/Earringsview'
import Necklacesview from './Pageviews/Necklacesview'
import PocketWatchesview from './Pageviews/PocketWatchesview'
import Braceletsview from './Pageviews/Braceletsview'
import Ringsview from './Pageviews/Ringsview'
import SmartWatchesview from './Pageviews/SmartWatchesview'
import Trendingview from './Pageviews/Trendingview'
import WristWatchesview from './Pageviews/WristWatchesview'

function Pagerow() {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]">
      <Form></Form>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <Setsview></Setsview>
        <Earringsview></Earringsview>
        <Necklacesview></Necklacesview>
        <PocketWatchesview></PocketWatchesview>
        <Braceletsview></Braceletsview>
        <Ringsview></Ringsview>
        <SmartWatchesview></SmartWatchesview>
        <Trendingview></Trendingview>
        <WristWatchesview></WristWatchesview>
      </div>
    </div>
  )
}

export default Pagerow
