import Banner from "./Banner";
import Search from "./SearchBar";
import TopicsPrompt from "./TopicsPrompt";
import RecentPurchases from "./RecentPurchases";
import HelpTopics from "./HelpTopics";
import CommunicationOptions from "./CommunicationOptions";

const HelpCenter = () => {
  return (
    <div id="w-full w-[100vw]">
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
