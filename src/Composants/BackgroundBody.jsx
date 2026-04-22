import animBg from "../Assets/images/AnimBackground.mp4";
import "../Assets/styles/BackgroundBody.css";

export default function BackgroundBody() {
  return (
    <video
      className="bg-video"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    >
      <source src={animBg} type="video/mp4" />
    </video>
  );
}
