import Form from "./Pageviews/WomensFashionview";
import Topsview from "./Pageviews/Topsview";
import Bottomsview from "./Pageviews/Bottomsview";
import Dressesview from "./Pageviews/Dressesview";
import Jumpsuitsview from "./Pageviews/Jumpsuitsview";
import Activewearview from "./Pageviews/Activewearview";
import Swimwearview from "./Pageviews/Swimwearview";

function Pagerow() {
    return(
        <div className="pagerow" style={{width: "100%", height: 100, marginTop: 10, backgroundColor:"#ffffff", float: "left", borderColor: "black", borderWidth: 3, padding: 10}}>
            <Form></Form>
            <Topsview></Topsview>
            <Bottomsview></Bottomsview>
            <Dressesview></Dressesview>
            <Jumpsuitsview></Jumpsuitsview>
            <Activewearview></Activewearview>
            <Swimwearview></Swimwearview>
        </div>
    );
}

export default Pagerow;