import banner from "../../../../../assets/IMAGES/ToysKidsAndBabiesCategory/banner.png";
import mobilebanner from "../../../../../assets/IMAGES/ToysKidsAndBabiesCategory/mobile-banner.png";

function Rectangle() {
  return (
    <div>
      <img src={mobilebanner} alt="banner image" className="w-full sm:hidden" />
      <img src={banner} alt="banner image" className="w-full hidden sm:block" />
    </div>
  );
}

export default Rectangle;
