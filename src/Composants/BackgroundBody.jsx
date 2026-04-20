import bgImage from "../Assets/images/Background.webp";

export default function BackgroundBody() {
  return (
    <>
      <img
        src={bgImage}
        aria-hidden="true"
        alt=""
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         "100%",
          height:        "100%",
          objectFit:     "cover",
          objectPosition: "center right",
          zIndex:        0,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position:   "fixed",
          inset:      0,
          zIndex:     1,
          pointerEvents: "none",
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(160, 60, 220, 0.35) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(200, 60, 180, 0.25) 0%, transparent 50%)
          `,
        }}
      />
    </>
  );
}
