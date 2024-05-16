import Banner from "../../../../../assets/IMAGES/DigitalMediaCategory/Rectangle 181-1.jpg";

function Rectangle() {
  return (
    <div className="flex">
      <div className="bg-indigo-800 flex-1 flex justify-center items-center text-white">
        <div className="text-center max-w-md mx-auto"> 
          <h1 className="text-3xl font-bold">
            Immerse Yourself: The Power of Narration in Digital Storytelling
          </h1>
          <p className="text-lg text-pink-200">
            Bonus Content and Extras in Digital Audiobooks
          </p>
          <button className="bg-yellow-400 rounded-md px-8 py-2 mt-8">
            <p className="text-black"> {/* Add text-white to make text color white */}
              Listen Now
            </p>
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img src={Banner} className="object-cover h-[600px] w-full" />
      </div>
    </div>
  );
}

export default Rectangle;
