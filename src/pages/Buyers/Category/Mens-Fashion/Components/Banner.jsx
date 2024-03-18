import banner from "../../../../../assets/IMAGES/Men's-category/Banner.jpeg";

const Banner = () => {
    return (
        <div id="mens-fashion-banner-component">
            <div>
                <img
                    src={banner}
                    className="h-[500px] w-full"
                />
            </div>
        </div>
    );
};

export default Banner;
