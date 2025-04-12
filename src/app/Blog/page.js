
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/navbar";
import Revealer from "../_components/Revealer/Revealer";
import BlogHead from "../Blog/_components/BlogHead/BlogHead";
import GoogleAnalytics from "../../../components/GoogleAnalytics/GoogleAnalytics";


export const metadata = {
  title: "Blog",
  description: "Entdecken Sie unsere neuesten Artikel und Einblicke zu verschiedenen Themen rund um Hausbetreuung, Reinigung und mehr. Bleiben Sie informiert und inspiriert.",
};

export default function Home() {
  return (
    <div >
      <Navbar/>
      <GoogleAnalytics/>

      <Revealer/>
      <BlogHead/>
      <Footer/>
    </div>
  );
}
