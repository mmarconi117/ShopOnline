import Form from "./Pageviews/WomensFashionview";
import Topsview from "./Pageviews/Topsview";
import Bottomsview from "./Pageviews/Bottomsview";
import Dressesview from "./Pageviews/Dressesview";
import Jumpsuitsview from "./Pageviews/Jumpsuitsview";
import Activewearview from "./Pageviews/Activewearview";
import Swimwearview from "./Pageviews/Swimwearview";

function Pagerow() {
  return (
    <div
      className="pagerow w-[1432px] h-auto my-[60px] mx-auto flex justify-between gap-[102px] overflow-hidden"
    >
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
