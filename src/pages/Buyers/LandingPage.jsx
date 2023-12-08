import Footer from "../../components/Footer/Footer";
import Menu from '../../components/Menu/Menu'
import Header from "../../components/Header/Header";
import {FashionSection} from '../../components/Menu/FashionSection'


export default function LandingPage() {
  return (
    <div>
      
      <Header />
     <FashionSection></FashionSection>
      <Menu />
      <Footer />
    </div>
  );
}