import BikesRow from './Cycling/Bikes.jsx';
import UpperBody from './UpperBody/UpperBody.jsx'
import ClimbingRow from './ClimbingAndMountaineering/Climbing.jsx';
import OutdoorRecreationRow from './OutdoorsRecreation/OutdoorRec.jsx';
import OutdoorAndSportsRow from './OutdoorSports/Outdoor.jsx';
import SurvivalAndNavigationRow from './SurvivalAndNavigation/Survival.jsx';
import GymToolsRow from './GymTools/GymTools.jsx';


const OutdoorsFunAndSportsSubCategory = () => {
    return (
        <div className="bg-[#f5f5f9]">
            <UpperBody/>
            <BikesRow/>
            <ClimbingRow/>
            <OutdoorRecreationRow/>
            <OutdoorAndSportsRow/>
            <SurvivalAndNavigationRow/>
            <GymToolsRow/>
        </div>
    );
};

export default OutdoorsFunAndSportsSubCategory;