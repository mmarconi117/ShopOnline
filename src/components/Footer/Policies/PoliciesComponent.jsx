import SideBar from './SideBar';
import Banner from './Banner';
import Policies from './Policies';

const PoliciesComponent = () => {
    return (
        <div id="orders-policies-component">
            <Banner />
            <div className="flex">
                <SideBar />
                <Policies />
            </div>
        </div>
    );
};

export default PoliciesComponent;
