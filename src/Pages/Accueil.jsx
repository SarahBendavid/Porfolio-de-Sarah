import Header from "../Composants/Header/Header.jsx";
import Presentation from "../Composants/Accueil/Presentation.jsx";
import FooterBand from "../Composants/Global/FooterBand.jsx";

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
