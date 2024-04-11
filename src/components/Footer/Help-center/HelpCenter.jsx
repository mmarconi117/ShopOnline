import Banner from './Banner';
import SearchBar from './SearchBar';
import TopicsPrompt from './TopicsPrompt';
import RecentPurchases from './RecentPurchases';
import HelpTopics from './HelpTopics';
import CommunicationOptions from './CommunicationOptions';

const HelpCenter = () => {
    return (
        <div id="buyer's-help-center-component">
            <Banner />
            <div>
                <SearchBar />
                <TopicsPrompt />
            </div>
            <RecentPurchases />
            <HelpTopics />
            <CommunicationOptions />
        </div>
    );
};

export default HelpCenter;
