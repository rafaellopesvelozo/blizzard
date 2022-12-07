import BannerDiablo from "../../layout/BannerDiablo";
import Footer from "../../layout/Footer";
import Exclusive from "../../layout/ExclusiveGames";
import Menu from "../../layout/Menu";

function Home() {
  return (
    <div>
      <Menu />
      <main>
        <BannerDiablo />
        <Exclusive />
      </main>
      <Footer />
    </div>
  );
}
export default Home;
