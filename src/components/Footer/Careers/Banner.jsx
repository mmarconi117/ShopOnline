import banner from "../../../assets/IMAGES/Footer/Career/banner.jpeg";

const Banner = () => {
  return (
    <div id="banner-component" className="relative">
      <img
        src={banner}
        alt="galaxy picture background"
        className="md:h-[323px] h-[200px] lg:h-[423px] w-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center ">
        <div className="lg:mt-36 px-10 md:mt-20 py-20">
          <p className="font-family-roboto text-white lg:text-[25px] md:text-[25px] text-[12px]">
            JOIN US AND SHAPE YOUR CAREER ON A REMARKABLE JOURNEY AT OUR
            COMPANY.
          </p>
          <p className="font-family-roboto text-white lg:text-[49px] md:text-[35px] text-[26px]">
            EMBRACE ENDLESS OPPORTUNITIES.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
