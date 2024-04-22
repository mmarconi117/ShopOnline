import banner from "../../../assets/IMAGES/Footer/Help-center/Rectangle-1.jpeg";
const Banner = () => {
  return (
    <div id="buyers-help-center-banner">
      <img src={banner} className="h-svh w-full" alt="Banner" />
      <div className="w-full h-36 bg-gradient-to-b from-[#001C43] via-[#00224B] to-[#abaaaa] flex justify-center items-center text-white font-bold text-[45px]">
        <p className="">Help Center: Support That Never Sleeps</p>
      </div>
    </div>
  );
};

export default Banner;
