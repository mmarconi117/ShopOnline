import banner from '../../../assets/IMAGES/Footer/Help-center/Rectangle-1.jpeg';
const Banner = () => {
    return (
        <div id="buyers-help-center-banner">
            <div>
                <img src={banner} className="h-[500px] w-full" />
            </div>
            <div className="bg-[#001C43] p-10">
                <p className="text-2xl text-white ">
                    Help Center: Support That Never Sleeps
                </p>
            </div>
        </div>
    );
};

export default Banner;
