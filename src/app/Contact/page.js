
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/navbar";
import Revealer from "../_components/Revealer/Revealer";
import ContactHero from "../Contact/_components/ContactHero/ContactHero";
import ContactForm from "../Contact/_components/ContactForm/ContactForm";
import ContactMain from "../_components/Contact/Contact";
import FAQ from "../_components/FAQ/FAQ";
import ContactHook from "../Contact/_components/ContactHook/ContactHook";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";


export const metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie uns für Anfragen, Buchungen und weitere Informationen. Nutzen Sie unser Formular oder finden Sie Antworten in den FAQs. Wir freuen uns auf Ihre Nachricht.",
};

export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>

      <Revealer/>
      <ContactHero/>
      <ContactForm/>
      <ContactMain/>
      <FAQ/>
      <ContactHook/>
      <Footer/>
    </div>
  );
}
