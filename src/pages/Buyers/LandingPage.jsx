
import Menu from '../../components/Menu/Menu';
import FashionSection from '../../components/Menu/FashionSection';
import Explore from '../../components/Explore/Explore';
import Welcome from '../../components/Menu/Welcome';
import EmptySpaceToBeFilledIn from '../../components/Menu/EmptySpaceToBeFilledIn';
import PopularItems from '../../components/PopularItems/PopularItems'; // Added PopularItems module
import BS_BeautyandPersonal from '../../components/BS_BeautyAndPersonal/BS_BeautyAndPersonal'
import BS_HomeAndOffice from '../../components/BS_HomeAndOffice/PopularItems';


export default function LandingPage() {
  return (
    <div className='bg-gray-100'>
      <div className="flex w-full justify-center gap-6 min-[1512px]:px-10 min-[1450px]:pt-4 min-[1450px]:pb-[93px] overflow-auto">
        <Menu />
        <div>
          <FashionSection /> 
          <EmptySpaceToBeFilledIn />
        </div>
        <Welcome />
      </div>
      <Explore />
      <div className='flex flex-col items-center min-[1512px]:items-center'>
        <PopularItems />
        <BS_HomeAndOffice />
        <BS_BeautyandPersonal />
      </div>
    </div>  
  );
}