import LowerRectangle from "./LowerRectangle";
import Rectangle from "./Rectangle";
import Pagerow from "./Pagerow";
function UpperBody(){
    return(
        <div className="">
            <Rectangle></Rectangle>
            <LowerRectangle></LowerRectangle>
            <Pagerow></Pagerow>
        </div>
    );
}

export default UpperBody;