import { useEffect, useState } from 'react';

import Banner from './Banner';
import SideBar from './SideBar';
import Topics from './Topics';

const FAQComponent = () => {
    const [currentHash, setCurrentHash] = useState('');
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="faq-component">
            <Banner />
            <div className="flex my-10">
                <SideBar setCurrentHash={setCurrentHash} />
                <Topics currentHash={currentHash} />
            </div>
        </div>
    );
};

export default FAQComponent;
