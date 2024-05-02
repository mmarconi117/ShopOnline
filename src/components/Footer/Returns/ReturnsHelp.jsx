<<<<<<< HEAD
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
=======
import Banner from "./Banner";
import ReturnOptions from "./ReturnOptions";
import ReturnPolicy from "./ReturnsPolicy";

const ReturnsHelp = () => {
  return (
    <div id="returns-help-component">
      <Banner />
      <ReturnOptions />
      <hr className=" hidden md:block w-[95%] mx-auto " />
      <ReturnPolicy />
    </div>
  );
>>>>>>> bcc162946a4691bbd089cbaecc2b4120c61d4d95
};

export default ReturnsHelp;
