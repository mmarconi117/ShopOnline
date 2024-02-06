import Feedback from "./Components/Feedback/Feedback";
import Completed from "./Components/ReturnsOverview/Completed";
import Initiated from "./Components/ReturnsOverview/Initiated";
import Received from "./Components/ReturnsOverview/Received";
import SearchBar from "./Components/Search-bar/SearchBar";
import Table from "./Components/Table/Table";

function ReturnsAndRefunds() {
    return (
        <div className="self-center flex w-full max-w-full flex-col items-stretch p-5">
            <div className="flex">
                <div>
                    <p className="font-bold text-2xl">Returns and Refunds</p>
                </div>
                <div className="ml-5 ">
                    <p className="inline-block align-sub">0 Total</p>
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="flex justify-center my-5">
                <Initiated />
                <Received />
                <Completed />
            </div>
            <div>
                <Table />
            </div>
            <div className="my-5">
                <Feedback />
            </div>
        </div>
    );
}

export default ReturnsAndRefunds;
