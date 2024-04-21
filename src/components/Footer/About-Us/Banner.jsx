import banner from '../../../assets/IMAGES/Footer/Contact-Us/Rectangle-2.svg';

const Banner = () => {
  return (
    <div id="banner component">
      <div className="bg-[url(../../src/assets/IMAGES/Footer/Contact-Us/Rectangle-1.jpeg)] w-full h-[325px]">
        <div className="flex items-center flex-row justify-center p-24 w-full">
          <img src={banner} className=''></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
