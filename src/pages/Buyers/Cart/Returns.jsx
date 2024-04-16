import LinkButton from "../../../components/Cart/LinkButton";

function Returns() {

    return (
        <div className="border-8 border-gray-200 bg-white">
            <div className="bg-white text-left m-3">
                <h2 className="mb-8 text-xl font-bold">Returns are easy</h2>
                <div className="flex flex-row gap-4">
                    <p className="text-sm">Free return within 15 days for Official Store items and 7 days for other eligible items.
                        <LinkButton to="/returns-help">See more...</LinkButton>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Returns;