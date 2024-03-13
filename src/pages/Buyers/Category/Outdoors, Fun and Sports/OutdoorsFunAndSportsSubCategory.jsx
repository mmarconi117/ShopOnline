import BikesRow from './Cycling/Bikes.jsx';
import UpperBody from './UpperBody/UpperBody.jsx'
import ClimbingRow from './Climbing and Mountaineering/Climbing.jsx';
import OutdoorRecreationRow from './Outdoor Recreation/OutdoorRec.jsx';
import OutdoorAndSportsRow from './OutdoorSports/Outdoor.jsx';
import SurvivalAndNavigationRow from './Survival and Navigation/Survival.jsx';
import GymToolsRow from './Gym Tools and Equipment/GymTools.jsx';


function OutdoorsFunAndSportsSubCategory() {
    return (
        <div className="bg-[#f5f5f9]">
            <UpperBody></UpperBody>
            <BikesRow></BikesRow>
            <ClimbingRow></ClimbingRow>
            <OutdoorRecreationRow></OutdoorRecreationRow>
            <OutdoorAndSportsRow></OutdoorAndSportsRow>
            <SurvivalAndNavigationRow></SurvivalAndNavigationRow>
            <GymToolsRow></GymToolsRow>
        </div>
    );
}

export default OutdoorsFunAndSportsSubCategory;