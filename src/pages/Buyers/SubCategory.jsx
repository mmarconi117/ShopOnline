import Footer from "../../components/Footer/Footer.jsx";
/*import Footer from '../../components/Footer/Footer';*/
/*import { Menu } from "../../components/Menu/Menu.jsx";
import { Explore } from "../../components/Explore/Explore.jsx";*/
import TopsRow from "../../components/Tops/Tops.jsx";
import BottomsRow from "../../components/Bottoms/Bottoms.jsx";
import DressesRow from "../../components/Dresses/Dresses.jsx";
import JumpsuitsRow from "../../components/Jumpsuits/Jumpsuits.jsx";
import ActivewearRow from "../../components/Activewear/Activewear.jsx";
import SwimwearRow from "../../components/Swimwear/Swimwear.jsx";
import UpperBody from "../../components/UpperBody/UpperBody.jsx";
//this is a comment
function SubCategory() {
    return (
      <>
        <UpperBody></UpperBody>
        <TopsRow></TopsRow>
        <BottomsRow></BottomsRow>
        <DressesRow></DressesRow>
        <JumpsuitsRow></JumpsuitsRow>
        <ActivewearRow></ActivewearRow>
        <SwimwearRow></SwimwearRow>
        <Footer />
      </>
    );
  }
  
  export default SubCategory;