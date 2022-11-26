import BannerDiablo from "../../layout/BannerDiablo";
import Footer from "../../layout/Footer";
import ExclusiveGames from "../../layout/JogosExclusivos";
import Menu from "../../layout/Menu";

function Home() {
  return (
    <div>
      <Menu/>
      <BannerDiablo/>
      <ExclusiveGames />
      <Footer />
    </div>
  );
}
export default Home;
