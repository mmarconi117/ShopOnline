
import defaultProfile from "./assets/defaultProfile.svg";
export const WelcomeSection = () => {
  return (
    <div className="flex bg-[#FAFAFA] items-center flex-col basis-[20%] gap-9 py-5 px-0 max-[1447px]:hidden">
      <div className="flex flex-col items-center h-fit">
        <img className="w-16 h-16" src={defaultProfile} alt="" />
        <p className="text-xl font-medium">Welcome to SONNY</p>
      </div>
      <div className="flex items-center justify-center gap-2 px-4 py-2 h-fit">
        <button className="bg-[#09618E] py-2 px-4 rounded-md">Button</button>
        <button className="bg-[#605D64] rounded-md py-2 px-4">Button</button>
      </div>

      <div className="bg-[#D9D9D9] rounded-lg w-[271px] flex-1 "></div>
    </div>
  );
};

