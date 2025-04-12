
import Footer from "../../Services/_components/Footer/Footer";
import Navbar from "../../_components/Navbar/navbar";
import Revealer from "../../_components/Revealer/Revealer";
import Nasveti from "../../Blog/nasveti-za-ciscenje-doma/_components/Nasveti";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";




export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>

      <Revealer/>
      <Nasveti/>
      <Footer/>
    </div>
  );
}
