import BannerHero from "../../layout/BannerHero";
import Footer from "../../layout/Footer";
import Games from "../../layout/JogosExclusivos";
import Menu from "../../layout/Menu";

function Home() {
  return (
    <div>
      <Menu/>
      <BannerHero />
      <Games />
      <Footer />
    </div>
  );
}
export default Home;
