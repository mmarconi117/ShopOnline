import Desktop from "../../../assets/IMAGES/FlashSales/Desktop-Sale-Banner.svg";
import SaleBanner from "../../../assets/IMAGES/FlashSales/Sale-Bannerm.svg";

const Banner = () => {
  return (
    <div id="flash-sales-component">
      <div>
        <img src={Desktop} alt="desktop banner" className="hidden sm:block" />
        <img
          src={SaleBanner}
          alt="mobile banner"
          className=" w-full sm:hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
