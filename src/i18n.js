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
          subtitle: "Fibre artistique et souci du détail",
        },
        writer: {
          title: "Rédactrice web",
          subtitlePart1: "La qualité du contenu ",
          subtitlePart2: "réside dans le choix des mots.",
        },
        psycho: {
          title: "Licence en psychologie",
          subtitle: "La compréhension humaine au cœur du code",
        },
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
        btn: "Contactez-moi",
      },

      projets: {
        pageTitle: "Mes projets",
        sections: {
          web: {
            title: "Développement Web / Mobile",
            cards: {
              0: {
                title: "Projet 1",
                subtitle: "Technologies",
                desc: "Description du projet.",
              },
              1: {
                title: "Projet 2",
                subtitle: "Technologies",
                desc: "Description du projet.",
              },
              2: {
                title: "Projet 3",
                subtitle: "Technologies",
                desc: "Description du projet.",
              },
              3: {
                title: "Projet 4",
                subtitle: "Technologies",
                desc: "Description du projet.",
              },
              4: {
                title: "Projet 5",
                subtitle: "Technologies",
                desc: "Description du projet.",
              },
            },
          },
          video: {
            title: "Motion & Créations visuelles",
            cards: {
              0: {
                title: "Logo",
                subtitle: "DIGITAL MARKET",
                desc: "Création du logo de l'entreprise.",
              },
              1: {
                title: "Carte de visite",
                subtitle: "WELLNESS THERAPY",
                desc: "Création de la carte de visite d'une masseuse indépendante.",
              },
              2: {
                title: "Vidéo d'illustration",
                subtitle: "DIGITAL MARKET",
                desc: "Création d'une vidéo afin d'illustrer du contenu dans le thème de la programmation.",
              },
              3: {
                title: "Projet 4",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
              4: {
                title: "Projet 5",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
            },
          },
          visual: {
            title: "Créations visuelles",
            cards: {
              0: {
                title: "Projet 1",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
              1: {
                title: "Projet 2",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
              2: {
                title: "Projet 3",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
              3: {
                title: "Projet 4",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
              4: {
                title: "Projet 5",
                subtitle: "Outils",
                desc: "Description du projet.",
              },
            },
          },
        },
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
        taglineQuestion: "Une idée en tête ?",
        taglineCta: "Discutons de votre projet !",
        name: "Nom",
        placeholderName: "Prénom Nom",
        email: "Email",
        message: "Message",
        placeholderEmail: "exemple@email.com",
        placeholderMessage: "Votre message...",
        send: "Envoyer",
        sending: "Envoi en cours...",
        success:
          "Message envoyé ! Je vous répondrai dans les plus brefs délais.",
        error:
          "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.",
        phone: "0033 7 65 14 92 65",
        whatsappNumber: "33765149265",
      },
      uxcard: {
        title: "Refonte UX d'un trajet sur M00VIT",
        s1: {
          title: "Problème identifié",
          intro: "Lorsqu'un utilisateur scanne le QR code du bus :",
          b0: "Redirection immédiate vers une page de sélection de l'arrêt de destination.",
          b1: "Le trajet n'est pris en charge QUE lorsque l'utilisateur sélectionne l'arrêt de destination.",
          step1: "Scan du QR code",
          step2: "Sélection de l'arrêt",
        },
        s2: {
          title: "Impact",
          intro:
            "Si l'utilisateur ferme l'application avant d'avoir sélectionné son arrêt de destination :",
          b0: "Pas de prise en charge de son trajet.",
          b1: "Possibilité de fraude involontaire ou volontaire.",
          b2: "Possibilité de dette de régularisation ?",
        },
        s3: {
          title: "Solution proposée",
          b0: "Limite de temps claire",
          b1: "Statut visible en temps réel",
          b2: "Session expirée explicite",
        },
        s4: {
          title: "Parcours utilisateur amélioré",
          step1: "Scan du QR code",
          step2: "Choisir l'arrêt",
          step3: "À compléter",
          screenTitle: "Où allez-vous ?",
          screenSub:
            "Sélectionnez l'arrêt de destination pour valider votre trajet.",
          timer: "Temps restant pour valider",
          expired: "Session expirée",
          expiredDesc: "Veuillez scanner le QR code pour valider votre trajet.",
        },
        s5: {
          title: "Résultats",
          link1: "Tester le prototype",
          link2: "Voir le code sur GitHub",
        },
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
          subtitle: "Artistic flair and eye for detail",
        },
        writer: {
          title: "Web Writer",
          subtitlePart1: "Quality content lies ",
          subtitlePart2: "in the choice of words.",
        },
        psycho: {
          title: "Bachelor's degree in psychology",
          subtitle: "Human understanding at the heart of code",
        },
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
        pageTitle: "My Projects",
        sections: {
          web: {
            title: "Web / Mobile Development",
            cards: {
              0: {
                title: "Project 1",
                subtitle: "Technologies",
                desc: "Project description.",
              },
              1: {
                title: "Project 2",
                subtitle: "Technologies",
                desc: "Project description.",
              },
              2: {
                title: "Project 3",
                subtitle: "Technologies",
                desc: "Project description.",
              },
              3: {
                title: "Project 4",
                subtitle: "Technologies",
                desc: "Project description.",
              },
              4: {
                title: "Project 5",
                subtitle: "Technologies",
                desc: "Project description.",
              },
            },
          },
          video: {
            title: "Motion & Visual Creations",
            cards: {
              0: {
                title: "Logo",
                subtitle: "DIGITAL MARKET",
                desc: "Company logo creation.",
              },
              1: {
                title: "Business Card",
                subtitle: "WELLNESS THERAPY",
                desc: "Business card creation for an independent massage therapist.",
              },
              2: {
                title: "Illustration Video",
                subtitle: "DIGITAL MARKET",
                desc: "Creation of a video to illustrate content on the theme of programming.",
              },
              3: {
                title: "Project 4",
                subtitle: "Tools",
                desc: "Project description.",
              },
              4: {
                title: "Project 5",
                subtitle: "Tools",
                desc: "Project description.",
              },
            },
          },
          visual: {
            title: "Visual Creations",
            cards: {
              0: {
                title: "Project 1",
                subtitle: "Tools",
                desc: "Project description.",
              },
              1: {
                title: "Project 2",
                subtitle: "Tools",
                desc: "Project description.",
              },
              2: {
                title: "Project 3",
                subtitle: "Tools",
                desc: "Project description.",
              },
              3: {
                title: "Project 4",
                subtitle: "Tools",
                desc: "Project description.",
              },
              4: {
                title: "Project 5",
                subtitle: "Tools",
                desc: "Project description.",
              },
            },
          },
        },
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
        taglineQuestion: "Got an idea in mind ?",
        taglineCta: "Let's talk about your project !",
        name: "Name",
        placeholderName: "First Last",
        email: "Email",
        message: "Message",
        placeholderEmail: "example@email.com",
        placeholderMessage: "Your message...",
        send: "Send",
        sending: "Sending...",
        success: "Message sent! I'll get back to you as soon as possible.",
        error:
          "Something went wrong. Please try again or contact me directly by email.",
        phone: "00972 537 889 212",
        whatsappNumber: "972537889212",
      },
      uxcard: {
        title: "UX Redesign of an M00VIT Journey",
        s1: {
          title: "Problem identified",
          intro: "When a user scans a bus QR code:",
          b0: "Immediate redirect to a stop selection page.",
          b1: "The trip is only covered once the user selects the destination stop.",
          step1: "QR code scan",
          step2: "Stop selection",
        },
        s2: {
          title: "Impact",
          intro:
            "If the user closes the app before selecting their destination stop:",
          b0: "The trip is not covered.",
          b1: "Risk of involuntary or deliberate fraud.",
          b2: "Possible debt from fare evasion?",
        },
        s3: {
          title: "Proposed solution",
          b0: "Clear time limit",
          b1: "Real-time visible status",
          b2: "Explicit expired session",
        },
        s4: {
          title: "Improved user journey",
          step1: "QR code scan",
          step2: "Choose stop",
          step3: "To be completed",
          screenTitle: "Where are you going?",
          screenSub: "Select the destination stop to validate your trip.",
          timer: "Time left to validate",
          expired: "Session expired",
          expiredDesc: "Please scan the QR code to validate your trip.",
        },
        s5: {
          title: "Results",
          link1: "Try the prototype",
          link2: "View code on GitHub",
        },
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
