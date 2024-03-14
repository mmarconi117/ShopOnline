import TopsRow from "./Tops/Tops.jsx";
import BottomsRow from "./Bottoms/Bottoms.jsx";
import DressesRow from "./Dresses/Dresses.jsx";
import JumpsuitsRow from "./Jumpsuits/Jumpsuits.jsx";
import ActivewearRow from "./Activewear/Activewear.jsx";
import SwimwearRow from "./Swimwear/Swimwear.jsx";
import UpperBody from "./UpperBody/UpperBody.jsx";
//this is a comment
function WomensFashionSubCategory() {
    return (
      <div className="bg-[#f5f5f9]">
        <UpperBody></UpperBody>
        <TopsRow></TopsRow>
        <BottomsRow></BottomsRow>
        <DressesRow></DressesRow>
        <JumpsuitsRow></JumpsuitsRow>
        <ActivewearRow></ActivewearRow>
        <SwimwearRow></SwimwearRow>
      </div>
    );
  }
  
  export default WomensFashionSubCategory;