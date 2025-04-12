
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/navbar";
import Revealer from "../_components/Revealer/Revealer";
import AboutHeader2 from '../About/_components/AboutHeader/AboutHeader2'
import Hero from "../_components/Hero/Hero";
import Story from "../About/_components/Story/Story";
import Ekipa from "../_components/Ekipa/Ekipa";
import BigImg from "../About/_components/BigImg/BigImg";
import Testimonials from "../_components/Testimonials/Testimonials";
import Checks from "../Services/_components/Checks/Checks";
import Stats from "../Services/_components/Stats/Stats";
import ContactHero from "../Contact/_components/ContactHero/ContactHero";
import ContactMain from "../_components/Contact/Contact";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";

export const metadata = {
  title: "Über uns",
  description: "Erfahren Sie mehr über unsere Geschichte, unser Team und unsere Mission. Wir sind stolz darauf, umfassende Informationen und Dienstleistungen im Bereich Hausbetreuung und Reinigung anzubieten.",
};


export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>
      <Revealer/>
      <Hero/>
      <Story/>
      <Ekipa/>
      <BigImg/>
      <Stats/>
      <Testimonials/>
      <ContactMain/>
      <Footer/>
    </div>
  );
}
