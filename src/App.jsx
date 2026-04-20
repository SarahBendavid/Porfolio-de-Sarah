import { Routes, Route } from "react-router-dom";
import "flag-icons/css/flag-icons.min.css";

import BackgroundBody from "./Composants/BackgroundBody";
import Accueil from "./Pages/Accueil.jsx";
import Projets from "./Pages/Projets.jsx";
import Contact from "./Pages/Contact.jsx";

import MentionsLegales from "./Pages/Mentions-legales.jsx";
import Confidentialite from "./Pages/Confidentialite.jsx";
import LegalNotice from "./Pages/Legal-notice.jsx";
import PrivacyPolicy from "./Pages/Privacy-policy.jsx";

function NotFound() {
  return <h1>404 - Page non trouvée</h1>;
}

function App() {

  return (
    <>

    <BackgroundBody />

      <Routes>
    
      <Route path="/" element={<Accueil />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />


      {/* Pages légales */}
      <Route path="/Mentions-legales" element={<MentionsLegales />} />
      <Route path="/Confidentialite" element={<Confidentialite />} />
      <Route path="/Legal-notice" element={<LegalNotice />} />
      <Route path="/Privacy-policy" element={<PrivacyPolicy />} />

      {/* Page 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
