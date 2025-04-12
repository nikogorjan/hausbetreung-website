
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/navbar";
import Revealer from "../_components/Revealer/Revealer";
import ServiceHeader from '../Services/_components/ServiceHeader/ServiceHeader'
import Services from '../Services/_components/Services/Services'
import Stats from '../Services/_components/Stats/Stats'
import Checks from '../Services/_components/Checks/Checks'
import Testimonials from "../_components/Testimonials/Testimonials";
import ContactMain from "../_components/Contact/Contact";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  title: "Dienstleistungen",
  description: "Entdecken Sie unser umfassendes Angebot an Dienstleistungen für Hausbetreuung und Reinigung. Professionell, zuverlässig und individuell auf Ihre Bedürfnisse abgestimmt.",
};

export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>

      <Revealer/>
      <ServiceHeader/>
      <Services/>
      <Stats/>
      <Checks/>
      <Testimonials/>
      <ContactMain/>
      <Footer/>
    </div>
  );
}
