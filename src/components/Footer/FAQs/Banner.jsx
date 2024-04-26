const Banner = () => {
    return (
        <div id="banner-component">
            <div className="bg-[url(../../src/assets/IMAGES/Footer/Contact-Us/Rectangle-1.jpeg)]  lg:py-[250px] w-full lg:h-[700px]">
                {/* <img src={banner} alt="galaxy picture background" /> */}
                <div className="p-2 bg-slate-400 w-1/3 h-34 m-auto">
                    <div className="p-2 bg-slate-300 h-30">
                        <div className="p-2 bg-slate-200 h-28">
                            <p className="text-black p-4 bg-white text-center lg:text-6xl md:text-3xl sm:text-lg font-bold h-24 text-md">
                                FAQ'S
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
