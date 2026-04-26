export default function Confidentialite() {
  return (
  <div
      className="legal-page"
      style={{
        position: "relative",
        zIndex: 1,
        background: "white",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
      }}
    >
      <h1 style={{ fontSize: "6vw", marginBottom: "40px" }}>
        Politique de confidentialité</h1>
      <h2>Collecte des données</h2>
      <p>
    Ce site portfolio est à vocation personnelle et ne collecte pas de données
    sensibles. Cependant, certaines informations peuvent être transmises via le
    formulaire de contact (nom, adresse e-mail, message).
  </p>
  <h2>Utilisation des données</h2>
  <p>
    Les informations transmises via le formulaire de contact sont utilisées
    uniquement pour répondre à vos demandes et ne sont pas partagées avec des
    tiers.
  </p>
  <h2>Durée de conservation</h2>
  <p>
    Les messages envoyés via le formulaire de contact sont conservés le temps
    nécessaire pour traiter votre demande, puis supprimés.
  </p>
  <h2>Cookies</h2>
  <p>
    Ce site n’utilise pas de cookies de suivi à des fins commerciales. Seuls des
    cookies techniques nécessaires au bon fonctionnement du site peuvent être
    utilisés.
  </p>
  <h2>Droits des utilisateurs</h2>
  <p>
    Conformément au Règlement Général sur la Protection des Données (RGPD), vous
    pouvez demander l’accès, la modification ou la suppression de vos données
    personnelles en écrivant à l’adresse suivante :
    <strong> sarah.laura.bendavid@gmail.com</strong>.
  </p>
  </div>
  )
}