import Bullets from "./_components/Bullets/Bullets";
import ContactMain from "./_components/Contact/Contact";
import Ekipa from "./_components/Ekipa/Ekipa";
import FAQ from "./_components/FAQ/FAQ";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import Images from "./_components/Images/Images";
import Navbar from "./_components/Navbar/navbar";
import Question from "./_components/Question/Question";
import Testimonials from "./_components/Testimonials/Testimonials";
import Blog from "./_components/Blog/Blog";
import Revealer from "./_components/Revealer/Revealer";
import AboutHeader from "./About/_components/AboutHeader/AboutHeader";
import GoogleAnalytics from "../../components/GoogleAnalytics/GoogleAnalytics";

export default function Home() {
  return (
    <div >
      <Revealer/>
      <Navbar/>
      <GoogleAnalytics/>
      {/*<Hero/>*/}
      <AboutHeader/>
      <Bullets/>
      <Images/>
      <Ekipa/>
      <Question/>
      <Testimonials/>
      <FAQ/>
      <Blog/>
      <ContactMain/>
      <Footer/>
    </div>
  );
}
