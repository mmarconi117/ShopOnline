import Form from './Pageviews/ToysKidsAndBabiesview'
import CuddlyCornerview from './Pageviews/CuddlyCornerview'
import CraftyOasisview from './Pageviews/CraftyOasisview'
import SmartLearningview from './Pageviews/SmartLearningview'
import AdventureSpotview from './Pageviews/AdventureSpotview'
import PuzzleParadiseview from './Pageviews/PuzzleParadiseview'
import StemGalaxyview from './Pageviews/StemGalaxyview'
import FunDiscoveriesview from './Pageviews/FunDiscoveriesview'
import ThrillCornerview from './Pageviews/ThrillCornerview'
import ActionFiguresAndPlaySetsview from './Pageviews/ActionFiguresAndPlaySetsview'
import CreateAndPlayview from './Pageviews/CreateAndPlayview'
import DollCornerview from './Pageviews/DollCornerview'
import FantasyFashionview from './Pageviews/FantasyFashionview'
import RollAndExploreview from './Pageviews/RollAndExploreview'
import SurpriseHavenview from './Pageviews/SupriseHavenview'

function Pagerow() {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]">
      <Form></Form>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <RollAndExploreview></RollAndExploreview>
        <ActionFiguresAndPlaySetsview></ActionFiguresAndPlaySetsview>
        <FunDiscoveriesview></FunDiscoveriesview>
        <CreateAndPlayview></CreateAndPlayview>
        <SurpriseHavenview></SurpriseHavenview>
        <DollCornerview></DollCornerview>
        <FantasyFashionview></FantasyFashionview>
        <PuzzleParadiseview></PuzzleParadiseview>
        <CraftyOasisview></CraftyOasisview>
        <SmartLearningview></SmartLearningview>
        <AdventureSpotview></AdventureSpotview>
        <StemGalaxyview></StemGalaxyview>
        <CuddlyCornerview></CuddlyCornerview>
        <ThrillCornerview></ThrillCornerview>
      </div>
    </div>
  )
}

export default Pagerow
