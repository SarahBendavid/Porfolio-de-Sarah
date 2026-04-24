// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traductions
const resources = {
  fr: {
    translation: {
      header: {
        subtitle: "Développeuse front-end",
        tagline: "UI, Motion & Création visuelle",
        language: "Langue",
      },
      nav: {
        home: "Accueil",
        projects: "Projets",
        contact: "Contact",
      },
      footer: {
        contact: "Contact :",
        legal: "Mentions légales",
        privacy: "Politique de confidentialité",
        rights: "Tous droits réservés",
      },
      skills: {
        dev: {
          title: "Dev Front-End | UI Designer",
          subtitle: "Fibre artistique et souci du détail"
        },
        writer: {
          title: "Rédactrice web",
          subtitlePart1: "La qualité du contenu",
          subtitlePart2: "réside dans le choix des mots."
        },
        psycho: {
          title: "Psychologue",
          subtitle: "La compréhension humaine au cœur du code"
        }
      },
      description: {
        title: "Qui suis-je ?",
        tagline1: "Je conçois des interfaces à votre image —",
        tagline2: "car j'ai d'abord appris à vous comprendre...",
        textWithBr:
          "Développeuse certifiée et passionnée, je me suis interessée a la programmation car c'est un domaine vaste et en évolution constante, ce qui s'adapte parfaitement à ma soif de connaissance, et d'apprentissage. En effet, il y a toujours un nouveau langage à apprendre, un nouveau problème à résoudre...  De plus, etant très logique et dotée de la fibre artistique, la création de projets me permet donc de m'épanouir sous tous les angles : le front-end stimule ma créativité, et le back-end stimule ma logique. J'ai donc d'abord appris le codage en autodidacte, avant de me lancer dans une reconversion professionnelle complète.  <br /><br /> Polyvalente, je maîtrise les différentes étapes techniques de la création d'un site. Ajoutons à cela, les qualités acquises lors de ma formation initial en sciences humaines,  qui me procurent une meilleure compréhension des besoins-utilisateurs. Cela fait de moi, une développeuse complète, qui saura vous satisfaire. Si vous en doutez encore, je vous invite à découvrir mon CV et mes projets.",
      },

      buttons: {
        cv: "CV",
        projects: "Projets",
      },

      workSection: {
        title: "Découvrez mon parcours...",
      },

      contactPreview: {
        title: "Travaillons ensemble !",
        block1: {
          title: "Réponse rapide",
          subtitle: "Délais de 48h",
        },
        block2: {
          title: "Devis gratuit",
          subtitle: "Sans aucun engagement",
        },
        btn: "Contactez moi",
      },

      projets: {
        item: {
          4: {
            title: "E-commerce",
            date: "En cours",
            desc: "",
          },

          5: {
            title: "Jeu du Morpion",
            date: "Octobre 2022",
            desc: "Concu avec React",
          },

          6: {
            title: "AzerType",
            date: "Mai 2022",
            desc: "Entrainez vous a taper plus vite sur le clavier !",
          },

          7: {
            title: "TotalTip",
            date: "Mars 2022",
            desc: "Calculez vos pourboires.",
          },

          8: {
            title: "Quizz",
            date: "Créé en 2021",
            desc: "Quizz dérisoire (js)",
          },

          9: {
            title: "Coeur des mamans",
            date: "Créé en 2021",
            desc: "Premier projet :\nSite vitrine.",
          },
        },
      },

      contact: {
        pageTitle: "Contactez-moi",
        name: "Nom",
        placeholderName: "Prénom Nom",
        email: "Email",
        message: "Message",
        placeholderEmail: "exemple@email.com",
        placeholderMessage: "Votre message...",
        send: "Envoyer",
        sending: "Envoi en cours...",
        success: "Message envoyé ! Je vous répondrai dans les plus brefs délais.",
        error: "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.",
        phone: "0033 7 65 14 92 65",
        whatsappNumber: "33765149265",
      },
    },
  },

  en: {
    translation: {
      header: {
        subtitle: "Front-end Developer",
        tagline: "UI, Motion & Visual creation",
        language: "Language",
      },
      nav: {
        home: "Home",
        projects: "Projects",
        contact: "Contact",
      },
      footer: {
        contact: "Contact:",
        legal: "Legal notice",
        privacy: "Privacy Policy",
        rights: "All rights reserved",
      },
      skills: {
        dev: {
          title: "Front-End Dev | UI Designer",
          subtitle: "Artistic flair and eye for detail"
        },
        writer: {
          title: "Web Writer",
          subtitlePart1: "Quality content",
          subtitlePart2: "lies in the choice of words."
        },
        psycho: {
          title: "Psychologist",
          subtitle: "Human understanding at the heart of code"
        }
      },
      description: {
        title: "Who am I ?",
        tagline1: "I design interfaces tailored to you —",
        tagline2: "because I first learned to understand you...",
        textWithBr:
          "Originally trained with a degree in psychology, I was always intrigued throughout my studies by the analogy between the human brain and the workings of a computer. However, being a perfectionist and striving for accuracy, I turned away from the study of human behavior to pursue a more precise science. <br /><br /> Why programming ? <br /><br /> To begin with, it's a vast and constantly evolving field, which perfectly suits my thirst for knowledge and learning. In programming, there's always a new language to learn, a new problem to solve... Furthermore, I'm a very logical person with an artistic flair. Creating projects allows me to flourish in every way: the front-end stimulates my creativity, and the back-end stimulates my logic. Add to that the skills I acquired in the humanities, which give me a better understanding of user needs, and you have a well-rounded developer who will be able to meet your expectations. If you still have any doubts, I invite you to take a look at my CV and my projects.",
      },
      buttons: {
        cv: "Resume",
        projects: "Projects",
      },

      workSection: {
        title: "Discover my journey...",
      },

      contactPreview: {
        title: "Let's work together!",
        block1: {
          title: "Quick response",
          subtitle: "Within 48 hours maximum",
        },
        block2: {
          title: "Free quote",
          subtitle: "No commitment required",
        },
        btn: "Contact me",
      },

      projets: {
        intro:
          "Here you will find a timeline of all the projects I have completed, from the most recent to my very first steps during my training..",

        item: {
          4: {
            title: "E-commerce",
            date: "In progress",
            desc: "",
          },

          5: {
            title: "Tic-Tac-Toe",
            date: "October 2022",
            desc: "Designed with React",
          },

          6: {
            title: "AzerType",
            date: "May 2022",
            desc: "Practice typing faster on the keyboard!",
          },

          7: {
            title: "TotalTip",
            date: "March 2022",
            desc: "Quick calculation of tips.",
          },

          8: {
            title: "Quizz",
            date: "In 2021",
            desc: "A ridiculous quiz (Js). ",
          },

          9: {
            title: "Hearts of mothers",
            date: "In 2021",
            desc: "First project : \nShowcase website.",
          },
        },
      },

      contact: {
        pageTitle: "Contact me",
        name: "Name",
        placeholderName: "First Last",
        email: "Email",
        message: "Message",
        placeholderEmail: "example@email.com",
        placeholderMessage: "Your message...",
        send: "Send",
        sending: "Sending...",
        success: "Message sent! I'll get back to you as soon as possible.",
        error: "Something went wrong. Please try again or contact me directly by email.",
        phone: "00972 537 889 212",
        whatsappNumber: "972537889212",
      },
    },
  },
};

// Initialisation
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
