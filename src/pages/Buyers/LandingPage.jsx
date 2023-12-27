import Footer from "../../components/Footer/Footer";
import Menu from '../../components/Menu/Menu'
import Header from "../../components/Header/Header";
import FashionSection from '../../components/Menu/FashionSection'
import Explore from "../../components/Explore/Explore";


export default function LandingPage() {
  return (
    <div>
      <Header />
      <Menu />
      <FashionSection />
      <Explore />    
      <Footer />
    </div>
  );
}