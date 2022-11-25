import BannerDiablo from "../../layout/BannerDiablo";
import Footer from "../../layout/Footer";
import Games from "../../layout/JogosExclusivos";
import Menu from "../../layout/Menu";

function Home() {
  return (
    <div>
      <Menu/>
      <BannerDiablo/>
      <Games />
      <Footer />
    </div>
  );
}
export default Home;
