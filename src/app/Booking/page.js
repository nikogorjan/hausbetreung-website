
import Footer from "../../app/_components/Footer/Footer";
import Navbar from "../../app/_components/Navbar/navbar";
import Revealer from "../../app/_components/Revealer/Revealer";
import Plugin from "../Booking/_components/Plugin/Plugin";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  title: "Buchung",
  description: "Buchen Sie Ihre Dienstleistungen bequem online. Wählen Sie den gewünschten Service, die Extras und den passenden Termin. Einfach und schnell zu Ihrer perfekten Hausbetreuung.",
};


export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>
      <Revealer/>
      <Plugin/>
      <Footer/>
    </div>
  );
}
