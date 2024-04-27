import banner from "../../../assets/IMAGES/Footer/Help-center/Rectangle-1.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="buyers-help-center-banner" className="relative">
      <img src={banner} className=" w-full" alt="Banner" />
      <div className="w-full h-36 sm:h-24 flex justify-center items-center p-7 text-white font-bold banner-container">
        <p className="text-center text-7xl sm:text-3xl">
          Help Center: Support That Never Sleeps
        </p>
      </div>
    </div>
  );
};

export default Banner;