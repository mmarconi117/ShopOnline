import BikesRow from './Cycling/Bikes.jsx';
import UpperBody from './UpperBody/UpperBody.jsx'
import ClimbingRow from './ClimbingAndMountaineering/Climbing.jsx';
import OutdoorRecreationRow from './OutdoorsRecreation/OutdoorRec.jsx';
import OutdoorAndSportsRow from './OutdoorSports/Outdoor.jsx';
import SurvivalAndNavigationRow from './SurvivalAndNavigation/Survival.jsx';
import GymToolsRow from './GymTools/GymTools.jsx';


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