
import Menu from '../../components/Menu/Menu';
import FashionSection from '../../components/Menu/FashionSection';
import Explore from '../../components/Explore/Explore';

const LandingPage = () => {
  return (
    <div>
      <div className="flex">
      <Menu />
      <div className="ml-4">
        <FashionSection />
      </div>
    </div>
      <Explore />
    </div>  
    
  );
};

export default LandingPage;
