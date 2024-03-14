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
} from "../../../../reducersAndActions/actions/returnsAndRefundsAction";

import { setDisplayFeedbackModal } from "../../../../reducersAndActions/actions/feedbackAction";
import FeedbackModal from "../../../Buyers/FeedbackModal";

const mapStateToProps = (state) => {
    return {
        disputes: state.returnsAndRefundsReducer.disputes,
        filtered: state.returnsAndRefundsReducer.filtered,
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
            <div className="flex my-5">
                <div className="mr-5">
                    <p>Insights</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="flex"
                        onClick={() => setOpen(!open)}
                    >
                        Hide
                        <img src={arrowDown} />
                    </button>
                </div>
            </div>
            {open ? (
                <div className="flex justify-center my-5">
                    <Initiated />
                    <Received />
                    <Completed />
                </div>
            ) : (
                <div></div>
            )}

            <div>
                {open ? (
                    <FiltersComponent
                        disputes={disputes}
                        filtered={filtered}
                        disputesCopy={disputesCopy}
                        resetFilter={resetFilter}
                        updateCopy={updateCopy}
                        resetPagination={resetPagination}
                        toggleFilterDisputes={toggleFilterDisputes}
                    />
                ) : (
                    <div></div>
                )}

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
