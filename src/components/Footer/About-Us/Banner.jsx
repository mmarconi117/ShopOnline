import rect0 from "../../../assets/IMAGES/Footer/About-Us/rect0.png";
import rect1 from "../../../assets/IMAGES/Footer/About-Us/rect1.png";

const Banner = () => {
  return (
    <div id="banner component">
      <div className="bg-[url(../../src/assets/IMAGES/Footer/Contact-Us/Rectangle-1.jpeg)]  w-full md:h-[325px] h-[240px]">
        <div className="flex flex-col items-center justify-center relative p-0">
          <img src={rect1} className="aspect-video w-full md:h-[142px] h-[96px]"></img>
          <img
            src={rect0}
            className="aspect-video md:w-[516px] md:h-[137px] md:mt-[-30px] w-[350px] h-[154px] mt-[-50px]"
          ></img>
          <p className="absolute text-black text-[61px] font-bold md:mt-24 mt-5">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
