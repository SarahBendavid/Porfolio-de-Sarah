export default function MentionsLegales() {
  return (
    <div className="legal-page" style={{ position: "relative", zIndex: 1, background: "white", minHeight: "100vh", padding: "20px" }}>
  <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "8vw" }}>Mentions légales</h1>
  <div style={{ paddingLeft: "20px" }}>
  <h2>Éditeur du site</h2>
  <p>
    Nom : [Laura Bendavid]
    <br />
    Email : [sarah.laura.bendavid@gmail.com]
    <br />
    Téléphone : [+337 65 14 92 65]
    <br />
  </p>
  <h2>Responsable de la publication</h2>
  <p>[Laura Bendavid]</p>
  <h2>Hébergement</h2>
  <p>
    Hébergeur : [GitHub]
    <br />
    Adresse : [wwww.github.com]
    <br />
  </p>
  <h2>Propriété intellectuelle</h2>
  <p style={{ textAlign: "justify" }}>
    L’ensemble du contenu de ce site (textes, images, graphismes, logo, etc.)
    est protégé par le droit d’auteur. Toute reproduction ou représentation est
    interdite sans l’autorisation de l’éditeur.
  </p>
  </div>
</div>
  )
}