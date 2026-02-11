import Header from "../Composants/Header/Header.jsx";
import Presentation from "../Composants/Main/AccueilMain.jsx";
import Footer from "../Composants/Footer/Footer.jsx";

  export default function Accueil() {
  return (
    <>
    <main className="accueil-page">
      <Header />
      <Presentation />
      <Footer className="footer" />
    </main>
    </>
  );
}
