import LowerRectangle from "./LowerRectangle.jsx";
import Rectangle from "./Rectangle.jsx";
import Pagerow from "./PageRow.jsx";
function UpperBody(){
    return(
        <div className="pt-[13px] lg:pt-[19px]">
            <Rectangle></Rectangle>
            <LowerRectangle></LowerRectangle>
            <Pagerow></Pagerow>
        </div>
    );
}

export default UpperBody;