import banner from "../../../assets/IMAGES/Footer/Help-center/Rectangle-1.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <img src={banner} className="w-full max-h-[600px] object-cover" alt="Banner" />
      <p className="banner-container p-4 sm:p-8 text-center text-base sm:text-4xl text-white">
        Help Center: Support That Never Sleeps
      </p>
      
    </div>
  );
};

export default Banner;