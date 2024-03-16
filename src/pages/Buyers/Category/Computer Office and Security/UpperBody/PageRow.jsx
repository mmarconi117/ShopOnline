import DesktopView from "./PageViews/Laptops.jsx";
import LaptopsView from "./PageViews/DestopsView.jsx";
import ComputerAccessoriesView from "./PageViews/ComputerAccessoriesView.jsx";
import ComputerView from "./PageViews/ComputerView.jsx";
import PrintersView from "./PageViews/PrintersView.jsx";
import PresentationView from "./PageViews/PresentationView.jsx";
import NetworkingView from "./PageViews/NetworkingView.jsx";
import StorageView from "./PageViews/StorageView.jsx";
import OfficeSuppliesView from "./PageViews/OfficeSuppliesView.jsx";
import OfficeSecView from "./PageViews/OfficeSec.jsx"
import SmartLocksView from "./PageViews/SmartLocksView.jsx";


function Pagerow() {
    return (
        <div
            className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]"
        >
            <ComputerView></ComputerView>
            <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
                <LaptopsView></LaptopsView>
                <DesktopView></DesktopView>
                <ComputerAccessoriesView></ComputerAccessoriesView>
                <PrintersView></PrintersView>
                <PresentationView></PresentationView>
                <NetworkingView></NetworkingView>
                <StorageView></StorageView>
                <OfficeSuppliesView></OfficeSuppliesView>
                <OfficeSecView></OfficeSecView>
                <SmartLocksView></SmartLocksView>
            </div>
        </div>
    );
}

export default Pagerow;
