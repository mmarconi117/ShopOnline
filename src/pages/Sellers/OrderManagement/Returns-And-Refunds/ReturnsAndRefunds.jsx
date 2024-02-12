// Libs
import { useEffect, useState } from "react";
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

// redux
import {
    searchDisputes,
    toggleFilterDisputes
} from "../../../../reducersAndActions/actions/disputeAction";

const mapStateToProps = (state) => {
    return {
        disputes: state.disputeReducer.disputes,
        filtered: state.disputeReducer.filtered
    };
};

const mapDispatchToProps = (dispatch) => ({
    searchDisputes: (data) => dispatch(searchDisputes(data)),
    toggleFilterDisputes: (data) => dispatch(toggleFilterDisputes(data))
});

function ReturnsAndRefunds({ disputes, searchDisputes, filtered, toggleFilterDisputes }) {
    const [disputesCopy, setDisputesCopy] = useState([]);
    const [itemIndex, setItemIndex] = useState(undefined); // selected item index, one single item
    const [isResetPagination, setResetPagination] = useState(false);

    useEffect(() => {
        disputes.forEach((item) => (item.selected = false));
    }, []);

    const updateCopy = (update) => {
        setDisputesCopy(update);
    };

    const resetFilter = (update) => {
        setDisputesCopy(update);
    };
    // function to update download component
    const getItemSelected = (itemIndex) => {
        setItemIndex(itemIndex);
    };

    const resetPagination = () => {
        setResetPagination(!isResetPagination);
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
                    disputes={disputes}
                    searchDisputes={searchDisputes}
                    disputesCopy={disputesCopy}
                    updateCopy={updateCopy}
                    filtered={filtered}
                    resetPagination={resetPagination}
                />
            </div>
            <div className="flex justify-center my-5">
                <Initiated />
                <Received />
                <Completed />
            </div>
            <div>
                <FiltersComponent
                    disputes={disputes}
                    disputesFiltered={filtered}
                    disputesCopy={disputesCopy}
                    resetFilter={resetFilter}
                    updateCopy={updateCopy}
                    resetPagination={resetPagination}
                    toggleFilterDisputes={toggleFilterDisputes}
                />
                <Download
                    disputes={disputes}
                    itemIndex={itemIndex}
                />
            </div>
            <div>
                <Table
                    disputes={disputes}
                    disputesCopy={disputesCopy}
                    updateCopy={updateCopy}
                    getItemSelected={getItemSelected}
                    resetPagination={resetPagination}
                    isResetPagination={isResetPagination}
                />
            </div>
            <div className="my-5">
                <Feedback />
            </div>
        </div>
    );
}

ReturnsAndRefunds.propTypes = {
    disputes: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ReturnsAndRefunds);
