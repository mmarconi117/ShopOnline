import CyclingView from "./PageViews/CyclingView.jsx";
import CampingSuppliesView from "./PageViews/CampingSuppliesView.jsx";
import ClimbingView from "./PageViews/ClimbingView.jsx";
import OutdoorAndRecreationView from "./PageViews/OutdoorAndRecreationView.jsx";  
import OutdoorAndSportsView from "./PageViews/OutdoorAndSportsView.jsx"; 
import SurvivalView from "./PageViews/SurvivalView.jsx";
import GymToolsView from "./PageViews/GymToolsView.jsx";
import OutdoorsFunAndSportsView from "./PageViews/OutdoorsFunAndSportsView.jsx";


function Pagerow() {
  return (
    <div
      className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]"
    >
      <OutdoorsFunAndSportsView></OutdoorsFunAndSportsView>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <CyclingView></CyclingView>
        <CampingSuppliesView></CampingSuppliesView>
        <ClimbingView></ClimbingView>
        <OutdoorAndRecreationView></OutdoorAndRecreationView>
        <OutdoorAndSportsView></OutdoorAndSportsView>
        <SurvivalView></SurvivalView>
        <GymToolsView></GymToolsView>
      </div>
    </div>
  );
}

export default Pagerow;
