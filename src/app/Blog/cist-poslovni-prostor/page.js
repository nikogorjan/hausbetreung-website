
import Footer from "../../Services/_components/Footer/Footer";
import Navbar from "../../_components/Navbar/navbar";
import Revealer from "../../_components/Revealer/Revealer";
import Cist from "../../Blog/cist-poslovni-prostor/_components/Cist";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";




export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>
      <Revealer/>
      <Cist/>
      <Footer/>
    </div>
  );
}
