import banner from "../../../assets/IMAGES/Footer/Career/banner.jpeg";
const Banner = () => {
    return (
        <div id="banner-component">
            
             <img src={banner} alt="galaxy picture background" className="md:h-[323px] h-[200px] lg:h-[423px] w-full"/>
               
            
        </div>
    );
};

export default Banner;