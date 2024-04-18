import "./Banner.css";
import banner from "../../../assets/IMAGES/Footer/Help-center/Rectangle-1.svg";
const Banner = () => {
  return (
    <div id="buyers-help-center-banner" className="">
      <img src={banner} className="w-[1910px]" alt="Banner" />
      <div className=" flex justify-center items-center text-white font-bold text-[45px] banner-container ">
        <p className="">Help Center: Support That Never Sleeps</p>
      </div>
    </div>
  );
};

export default Banner;
