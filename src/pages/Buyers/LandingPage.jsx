// import { useEffect, useState } from 'react';
// import Confetti from 'react-dom-confetti';
import Explore from '../../components/Explore/Explore';
import PopularItems from '../../components/PopularItems/PopularItems';
import BS_BeautyandPersonal from '../../components/BS_BeautyAndPersonal/BS_BeautyAndPersonal';
import BS_HomeAndOffice from '../../components/BS_HomeAndOffice/PopularItems';
import Hero from '../../assets/IMAGES/Landing page/shopNewYork.png';
// import Category from './Category/FunctionalityTest/Category'

const LandingPage = () => {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const confettiConfig = {
//     angle: 90,
//     spread: 200,
//     startVelocity: 150,
//     elementCount: 5000, // Increase the number of confetti elements
//     dragFriction: 0.10,
//     duration: 3000, // Increase the duration
//     stagger: 3,
//     width: '10px',
//     height: '10px',
//     colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
//   };

//   useEffect(() => {
//     const confettiTimeout = setTimeout(() => {
//       setShowConfetti(true);
//     }, 0); // Adjust the delay (in milliseconds) as needed

//     return () => clearTimeout(confettiTimeout);
//   }, []);

  return (
    <div className="bg-gray-100 relative">
      <div className="w-full overflow-auto relative">
        <img src={Hero} alt="shop online New York" className='w-full object-cover'/>
        {/* <Confetti active={showConfetti} config={confettiConfig} style={{ position: 'absolute', left: 0, top: 0 }} /> */}
      </div>
      <Explore />
      <div className="flex flex-col items-center min-[1512px]:items-center">
        <PopularItems />
        <BS_HomeAndOffice />
        <BS_BeautyandPersonal />
        
      </div>
    </div>
  );
};

export default LandingPage;
