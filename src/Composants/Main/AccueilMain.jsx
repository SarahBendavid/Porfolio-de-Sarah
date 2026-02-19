import { useRef, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";


import "../../Assets/styles/Main/Accueil/AccueilMain.css";
import "../../Assets/styles/Main/Accueil/RightZone.css";
import "../../Assets/styles/Main/Accueil/LeftZone.css";

import animation from "../../Assets/images/animation.mp4";

export default function Presentation() {
  const { t, i18n } = useTranslation();
  

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Conversion RGB → HSV
  const rgbToHsv = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s, v = max;

    const d = max - min;
    s = max === 0 ? 0 : d / max;

    if (d !== 0) {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }

    return [h * 360, s, v];
  };

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      if (video.paused || video.ended) return;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  const [h, s, v] = rgbToHsv(r, g, b);

  const isGreenHue = h > 85 && h < 140;
  const greenAmount = g - Math.max(r, b);

  if (isGreenHue && s > 0.25 && v > 0.25) {

    if (greenAmount > 60) {
      // fond vert fort → suppression totale
      data[i + 3] = 0;

    } else if (greenAmount > 25) {
      // zone de transition → alpha progressif
      const alphaFactor = 1 - (greenAmount - 25) / 35;
      data[i + 3] = data[i + 3] * alphaFactor;
    }
  }
}

      ctx.putImageData(frame, 0, 0);
      requestAnimationFrame(draw);
    };

    video.addEventListener("loadeddata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.play();
      draw();
    });

    return () => {
      video.removeEventListener("loadeddata", draw);
    };
  }, []);

  return (
    <main>
      <section className="presentation">

        <div className="leftZone">
          <div className="animationWrapper">
            <video
              ref={videoRef}
              src={animation}
              autoPlay
              loop
              muted
              playsInline
              style={{ display: "none" }} />
            <canvas ref={canvasRef} />

            {/* Masque pour logo CapCut */}
            <div className="logo-mask"></div>
          </div>
        </div>

        <div className="rightZone">
          <h3>{t("description.title")}</h3>
          <p className="description">
            <Trans i18nKey="description.textWithBr" components={{ br: <br /> }} />
          </p>
        </div>

        <div className="buttons">

          <a
           href={`${import.meta.env.BASE_URL}${i18n.language === "fr" ? "CVFR.pdf" : "CVEN.pdf"}`}
           download
           className="btn cv-btn">
          <Download size={18} className="download-icon" />
           {t("buttons.cv")}
          </a>

          <Link to="/Projets" className="btn pj-btn">
          {t("buttons.projects")}
          </Link>

        </div> 
      </section>
    </main>
  );
}
