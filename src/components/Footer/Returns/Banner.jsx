const Banner = () => {
  return (
    <div id="banner-component" className="mb-5">
      <div className=" w-full bg-gradient-to-b from-[#abaaaa]  to-[#021836] h-[300px] flex justify-center items-center">
        {/* <img src={banner} alt="galaxy picture background" /> */}
        <div className="p-2 bg-slate-400 w-fit lg:w-1/6 m-auto">
          <div className="p-2 bg-slate-300">
            <div className="p-2 bg-slate-200">
              <p className="text-black p-2 bg-white text-center">Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
