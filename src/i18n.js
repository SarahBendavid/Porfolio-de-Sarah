// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traductions
const resources = {
  fr: {
    translation: {
      header: {
        subtitle: "Développeuse front-end / Full-stack en devenir",
        tagline: "UI, Motion & Création visuelle assistée par IA",
        language: "Langue",
      },
      footer: {
        contact: "Contact :",
        legal: "Mentions légales",
        privacy: "Politique de confidentialité",
        rights: "Tous droits réservés",
      },
      description: {
        title: "Qui suis-je ?",
        textWithBr:
          "Initialement titulaire d'une licence en psychologie, j'ai toujours été intrigué, au cours de ma formation, par l'analogie entre le cerveau humain, et le fonctionnement d'un ordinateur. Par ailleurs,  étant perfectionniste, et à la recherche d'exactitude, je me suis detournée de l'etude de l'humain, pour me tourner vers une science plus exacte. <br /><br /> Pourquoi la programmation ? <br /><br /> Pour commencer, c’est un domaine vaste et en évolution constante, ce qui s'adapte parfaitement à ma soif de connaissance, et d'apprentissage. En programmation, il y a toujours un nouveau langage à apprendre, un nouveau problème à résoudre... De plus, je suis quelqu'un de très logique et dotée de la fibre artistique. La création de projets me permet donc de m'épanouir sous tous les angles : le front-end stimule ma créativité, et le back-end stimule ma logique. Ajoutons à cela, les qualités acquises en sciences humaines, qui me procurent une meilleure compréhension des besoins-utilisateurs, cela fait de moi, une développeuse complète, qui saura vous satisfaire. Si vous en doutez encore, je vous invite à découvrir mon CV et mes projets.",
      },
      buttons: {
        cv: "CV",
        projects: "Mes projets",
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
    },
  },

  en: {
    translation: {
      header: {
        subtitle: "Front-end Developer / Aspiring Full-stack",
        tagline: "UI, Motion & Visual creation (IA assisted)",
        language: "Language",
      },
      footer: {
        contact: "Contact:",
        legal: "Legal notice",
        privacy: "Privacy Policy",
        rights: "All rights reserved",
      },
      description: {
        title: "Who am I?",
        textWithBr:
          "Originally trained with a degree in psychology, I was always intrigued throughout my studies by the analogy between the human brain and the workings of a computer. However, being a perfectionist and striving for accuracy, I turned away from the study of human behavior to pursue a more precise science. <br /><br /> Why programming ? <br /><br /> To begin with, it's a vast and constantly evolving field, which perfectly suits my thirst for knowledge and learning. In programming, there's always a new language to learn, a new problem to solve... Furthermore, I'm a very logical person with an artistic flair. Creating projects allows me to flourish in every way: the front-end stimulates my creativity, and the back-end stimulates my logic. Add to that the skills I acquired in the humanities, which give me a better understanding of user needs, and you have a well-rounded developer who will be able to meet your expectations. If you still have any doubts, I invite you to take a look at my CV and my projects.",
      },
      buttons: {
        cv: "Resume",
        projects: "My projects",
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
            date: "In October 2022",
            desc: "Designed with React",
          },

          6: {
            title: "AzerType",
            date: "Created in May 2022",
            desc: "Practice typing faster on the keyboard!",
          },

          7: {
            title: "TotalTip",
            date: "In March 2022",
            desc: "Quick calculation of tips.",
          },

          8: {
            title: "Quizz",
            date: "Created in 2021",
            desc: "A ridiculous quiz (Js). ",
          },

          9: {
            title: "Hearts of mothers",
            date: "Created in 2021",
            desc: "First project : \nShowcase website.",
          },
        },
      },
    },
  },
};

// Initialisation
i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
