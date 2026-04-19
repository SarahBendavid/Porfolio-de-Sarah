import bgImage from "../Assets/images/Background.webp";

export default function BackgroundBody() {
  return (
    <img
      src={bgImage}
      aria-hidden="true"
      alt=""
      style={{
        position:   "fixed",
        top:        0,
        left:       0,
        width:      "100%",
        height:     "100%",
        objectFit:  "cover",
        zIndex:     0,
        pointerEvents: "none",
      }}
    />
  );
}
