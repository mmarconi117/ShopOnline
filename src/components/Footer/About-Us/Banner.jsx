import banner from '../../../assets/IMAGES/Footer/Contact-Us/Rectangle-2.svg';
import banner1 from '../../../assets/IMAGES/Footer/About-Us/banner.png';

const Banner = () => {
  return (
    <div id="banner component">
    
      <div className="bg-[url(../../src/assets/IMAGES/Footer/Contact-Us/Rectangle-1.jpeg)]  w-full md:h-[325px] h-[240px]">
        <div className="flex items-center flex-row justify-center ">
         
          <img src={banner} alt='banner' className='w-full md:max-w-[1890px] h-full'></img>
          
        </div>
      </div>

      {/* <img src={banner1} className='w-full h-full'></img> */}
    </div>
  );
};

export default Banner;
