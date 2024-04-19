import Banner from './Banner';
import Search from './SearchBar';
import TopicsPrompt from './TopicsPrompt';
import RecentPurchases from './RecentPurchases';
import HelpTopics from './HelpTopics';
// import CommunicationOptions from './CommunicationOptions';

const HelpCenter = () => {
    return (
        <div id="buyer's-help-center-component">
            <Banner />
            <Search />
            <TopicsPrompt />
            <RecentPurchases />
            <HelpTopics />


        </div>
    );
};

export default HelpCenter;