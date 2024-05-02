import Banner from './Banner';
import AboutItems from './AboutItems';
import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="about-us-component" className="my-5">
            <Banner />
            <AboutItems />
        </div>
    );
};

export default AboutUs;
