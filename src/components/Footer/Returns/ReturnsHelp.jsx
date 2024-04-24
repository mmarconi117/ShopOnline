import Banner from "./Banner";
import ReturnOptions from "./ReturnOptions";
import ReturnPolicy from "./ReturnsPolicy";

const ReturnsHelp = () => {
  return (
    <div id="returns-help-component">
      <Banner />
      <ReturnOptions />
      <hr className=" hidden md:block w-[95%] mx-auto " />
      <ReturnPolicy />
    </div>
  );
};

export default ReturnsHelp;
