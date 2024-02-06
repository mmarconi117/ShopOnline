// Libs
import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Components
import Download from "./Components/Download/Download";
import Feedback from "./Components/Feedback/Feedback";
import FiltersComponent from "./Components/Filter/FiltersComponent";
import Completed from "./Components/ReturnsOverview/Completed";
import Initiated from "./Components/ReturnsOverview/Initiated";
import Received from "./Components/ReturnsOverview/Received";
import SearchBar from "./Components/Search-bar/SearchBar";
import Table from "./Components/Table/Table";

const mapStateToProps = (state) => ({
    returns: state.returnsReducers.returns
});

function ReturnsAndRefunds({ returns }) {
    const [returnsCopy, setReturnsCopy] = useState([]);
    const [itemIndex, setItemIndex] = useState(undefined); // selected item index

    const updateCopy = (update) => {
        setReturnsCopy(update);
    };

    const resetFilter = (returns) => {
        setReturnsCopy(returns);
    };
    // function to update download component
    const getItemSelected = (itemIndex) => {
        setItemIndex(itemIndex);
    };

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
                <SearchBar
                    returns={returns}
                    returnsCopy={returnsCopy}
                />
            </div>
            <div className="flex justify-center my-5">
                <Initiated />
                <Received />
                <Completed />
            </div>
            <div>
                <FiltersComponent
                    returns={returns}
                    returnsCopy={returnsCopy}
                    resetFilter={resetFilter}
                    updateCopy={updateCopy}
                />
                <Download
                    returnsCopy={returnsCopy}
                    itemIndex={itemIndex}
                />
            </div>
            <div>
                <Table
                    returns={returns}
                    returnsCopy={returnsCopy}
                    updateCopy={updateCopy}
                    getItemSelected={getItemSelected}
                />
            </div>
            <div className="my-5">
                <Feedback />
            </div>
        </div>
    );
}

ReturnsAndRefunds.propTypes = {
    returns: PropTypes.array.isRequired
};

export default connect(mapStateToProps, {})(ReturnsAndRefunds);
