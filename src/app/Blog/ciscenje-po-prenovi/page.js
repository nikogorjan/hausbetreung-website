
import Footer from "../../Services/_components/Footer/Footer";
import Navbar from "../../_components/Navbar/navbar";
import Revealer from "../../_components/Revealer/Revealer";
import Prenova from "./_components/Prenova/Prenova";
import GoogleAnalytics from "../../../../components/GoogleAnalytics/GoogleAnalytics";




export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>

      <Revealer/>
      <Prenova/>
      <Footer/>
    </div>
  );
}
