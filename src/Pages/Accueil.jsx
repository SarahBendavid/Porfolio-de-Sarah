import Header from "../Composants/Accueil/Header.jsx";
import Presentation from "../Composants/Accueil/Presentation.jsx";
import FooterBand from "../Composants/FooterBand.jsx";

  export default function Accueil() {
  return (
    <>
    <main className="accueil-page">
      <Header />
      <Presentation />
      <FooterBand />
    </main>
    </>
  );
}
