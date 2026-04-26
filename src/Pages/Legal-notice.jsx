export default function LegalNotice() {
  return (
  <div className="legal-page" style={{ position: "relative", zIndex: 1, background: "white", minHeight: "100vh", padding: "20px" }}>
  <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "8vw" }}> Legal Notice </h1>
  <div style={{ padding: "20px", textAlign: "justify" }}>
  <p> This website is published by <strong>Sarah Bendavid</strong>, for personal and professional presentation purposes.</p>
  <p>
    <strong>Contact:</strong> sarah.laura.bendavid@gmail.com
  </p>
  <p>
    <strong>Hosting provider:</strong> [Git]
  </p>
  <p>
    All the content (texts, images, designs) is the exclusive property of Sarah
    Bendavid, unless otherwise stated. Any reproduction, distribution, or use
    without prior authorization is prohibited.
  </p>
  </div>
  </div>
  )
}