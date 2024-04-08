const Banner = () => {
    return (
        <div id="banner-component">
            <div className="bg-[url(../../src/assets/IMAGES/Footer/Contact-Us/Rectangle-1.jpeg)] w-full h-[700px]">
                {/* <img src={banner} alt="galaxy picture background" /> */}
                <div className="p-2 bg-slate-400 w-1/6 m-auto">
                    <div className="p-2 bg-slate-300">
                        <div className="p-2 bg-slate-200">
                            <p className="text-black p-2 bg-white text-center">
                                Returns
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
