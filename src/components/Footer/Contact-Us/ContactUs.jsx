<<<<<<< HEAD
import { useEffect } from 'react';
import Banner from './Banner';
import CommunicationOptions from './CommunicationOptions';
import QuickLinks from './QuickLinks';

const ContactUs = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id="buyers-contact-us">
            <Banner />
            <CommunicationOptions />
            <QuickLinks />
        </div>
    );
=======
import Banner from "./Banner";
import CommunicationOptions from "./CommunicationOptions";
import QuickLinks from "./QuickLinks";
 
const ContactUs = () => {
  return (
    <div id="buyers-contact-us">
      <Banner />
      <CommunicationOptions />
      <QuickLinks />
    </div>
  );
>>>>>>> bcc162946a4691bbd089cbaecc2b4120c61d4d95
};

export default ContactUs;
