import { useEffect } from 'react';
import Banner from './Banner';
import ReturnOptions from './ReturnOptions';
import ReturnPolicy from './ReturnsPolicy';

const ReturnsHelp = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="returns-help-component">
            <Banner />
            <ReturnOptions />
            <ReturnPolicy />
        </div>
    );
};

export default ReturnsHelp;
