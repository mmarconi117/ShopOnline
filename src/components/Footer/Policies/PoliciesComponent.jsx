import SideBar from './SideBar';
import Banner from './Banner';
import Policies from './Policies';

import { useEffect, useState } from "react";

const PoliciesComponent = () => {
    const [currentHash, setCurrentHash] = useState("");
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="orders-policies-component">
            <Banner />
            <div className="flex items-stretch my-10 ">
                <SideBar setCurrentHash={setCurrentHash} />
                <Policies currentHash={currentHash} />
            </div>
        </div>
    );
};

export default PoliciesComponent;
