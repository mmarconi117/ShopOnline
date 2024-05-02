import Banner from "./Banner";
import Search from "./SearchBar";
import TopicsPrompt from "./TopicsPrompt";
import RecentPurchases from "./RecentPurchases";
import HelpTopics from "./HelpTopics";
import CommunicationOptions from "./CommunicationOptions";
import { useEffect } from "react";

const HelpCenter = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
}, []);
  return (
    <div >
      <Banner />
      <Search />
      <TopicsPrompt />
      <RecentPurchases />
      <HelpTopics />
      <CommunicationOptions />
    </div>
  );
};

export default HelpCenter;