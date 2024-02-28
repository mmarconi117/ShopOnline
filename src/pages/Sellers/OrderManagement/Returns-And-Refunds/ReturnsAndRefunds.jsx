// Libs
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import Download from "./Components/Download/Download";
import FiltersComponent from "./Components/Filter/FiltersComponent";
import Completed from "./Components/ReturnsOverview/Completed";
import Initiated from "./Components/ReturnsOverview/Initiated";
import Received from "./Components/ReturnsOverview/Received";
import SearchBar from "./Components/Search-bar/SearchBar";
import Table from "./Components/Table/Table";

// icons
import arrowDown from "../../../../assets//ICONS/ArrowDown.svg";

// redux
import {
    searchDisputes,
    toggleFilterDisputes
} from "../../../../reducersAndActions/actions/disputeAction";

import { setDisplayFeedbackModal } from "../../../../reducersAndActions/actions/feedbackAction";
import FeedbackModal from "../../../Buyers/FeedbackModal";

const mapStateToProps = (state) => {
    return {
        disputes: state.disputeReducer.disputes,
        filtered: state.disputeReducer.filtered,
        displayFeedbackModal: state.feedbackReducer.displayFeedbackModal
    };
};

const mapDispatchToProps = (dispatch) => ({
    searchDisputes: (data) => dispatch(searchDisputes(data)),
    toggleFilterDisputes: (data) => dispatch(toggleFilterDisputes(data)),
    setDisplayFeedbackModal: () => dispatch(setDisplayFeedbackModal(true))
});

function ReturnsAndRefunds({
    disputes,
    searchDisputes,
    filtered,
    toggleFilterDisputes,
    setDisplayFeedbackModal,
    displayFeedbackModal
}) {
    const [disputesCopy, setDisputesCopy] = useState([]);
    const [itemIndex, setItemIndex] = useState(undefined); // selected item index, one single item
    const [isResetPagination, setResetPagination] = useState(false);
    const [open, setOpen] = useState(true);

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

    const handleFeedbackModal = () => {
        setDisplayFeedbackModal();
    };
    return (
        <div className="flex flex-col items-stretch py-4 px-7 font-Roboto gap-2">
            <div className="flex gap-4 items-center">
                <p className="font-semibold text-3xl leading-[52px]">Returns and Refunds</p>
                <p className="text-2xl font-normal leading-10 whitespace-nowrap">0 Total</p>
            </div>
            <SearchBar
                disputes={disputes}
                searchDisputes={searchDisputes}
                disputesCopy={disputesCopy}
                updateCopy={updateCopy}
                filtered={filtered}
                resetPagination={resetPagination}
            />
            <div className="flex my-5 gap-5 items-stretch">
                <p className="text-xl">Insights</p>
                <button
                    type="button"
                    className="flex gap-3 items-center text-xl"
                    onClick={() => setOpen(!open)}
                >
                    Hide
                    <img src={arrowDown}/>
                </button>
            </div>
            {open &&
                <div className="flex justify-start lg:justify-center gap-5 items-stretch my-5 flex-col lg:flex-row">
                    <Initiated />
                    <Received />
                    <Completed />
                </div>
            }

            {open &&
                <FiltersComponent
                    disputes={disputes}
                    filtered={filtered}
                    disputesCopy={disputesCopy}
                    resetFilter={resetFilter}
                    updateCopy={updateCopy}
                    resetPagination={resetPagination}
                    toggleFilterDisputes={toggleFilterDisputes}
                />
            }

            <Download
                disputes={disputes}
                itemIndex={itemIndex}
            />
            <Table
                disputes={disputes}
                disputesCopy={disputesCopy}
                updateCopy={updateCopy}
                getItemSelected={getItemSelected}
                resetPagination={resetPagination}
                isResetPagination={isResetPagination}
            />
            <div className="my-5 w-[75%]">
                <div className="text-end">
                    <button
                        onClick={() => handleFeedbackModal()}
                        className="border-2 border-gray-300 p-2 rounded-md "
                        type="button"
                    >
                        Feedback
                    </button>
                    {displayFeedbackModal && <FeedbackModal />}
                </div>
            </div>
        </div>
    );
}

ReturnsAndRefunds.propTypes = {
    disputes: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ReturnsAndRefunds);
