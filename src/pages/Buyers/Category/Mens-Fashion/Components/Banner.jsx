import banner from "../../../../../assets/IMAGES/Men's-category/Banner.jpeg";

const Banner = () => {
    return (
                <img
                    src={banner}
                    className="object-cover max-h-[423px] xl:max-h-[600px] w-full object-top"
                />
    );
};

export default Banner;
