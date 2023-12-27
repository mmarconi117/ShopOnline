import Menu from '../../components/Menu/Menu';
import FashionSection from '../../components/Menu/FashionSection';
import Explore from '../../components/Explore/Explore';
import Welcome from '../../components/Menu/Welcome';
import EmptySpaceToBeFilledIn from '../../components/Menu/EmptySpaceToBeFilledIn';

const LandingPage = () => {
  return (
    <div className='bg-gray-100'>
      <div className="flex ml-5">
        <Menu />
        <div className="flex ml-4">
          <div>
           <FashionSection /> 
           <EmptySpaceToBeFilledIn/>
          </div>
          <Welcome />
        </div>
      </div>
      <Explore />
    </div>  
  );
};

export default LandingPage;
