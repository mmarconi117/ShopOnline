import SideBar from './SideBar';
import Banner from './Banner';
import Policies from './Policies';

import { useState } from "react";

const PoliciesComponent = () => {
    const [currentHash, setCurrentHash] = useState("");
    return (
        <div id="orders-policies-component">
            <Banner />
            <div className="flex">
                <SideBar setCurrentHash={setCurrentHash} />
                <Policies currentHash={currentHash} />
            </div>
        </div>
    );
};

export default PoliciesComponent;
