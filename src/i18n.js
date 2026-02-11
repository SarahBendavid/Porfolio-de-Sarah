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
        cv: "Mon CV",
        projects: "Mes projets",
      },

      cv: {
        title: "Développeuse Full-stack",
        presentation:
          "Développeuse certifiée et passionnée, j'ai d'abord appris le code en autodidacte (HTML, CSS) avant de me lancer dans une reconversion professionnelle complète (JavaScript, PHP, Python, etc.). Polyvalente, je maîtrise les différentes étapes techniques de la création d'un site ou d'une application : du développement front-end au back-end, en passant par la maintenance. De plus, ma formation initiale en sciences humaines me permet de mieux comprendre les besoins des utilisateurs. Ce sont autant d'atouts qui m'ont permis de créer différents projets.",
        experience: "EXPÉRIENCE PROFESSIONNELLE",
        formation: "FORMATION",
        contact: "CONTACT",
        languages: "LANGUES",
        skills: "COMPÉTENCES",
        qualities: "QUALITÉS",
        hobbies: "LOISIRS",
        download: "Télécharger",

        langues: [
          { nom: "Français", niveau: "Langue maternelle" },
          { nom: "Anglais", niveau: "Intermédiaire" },
          { nom: "Hebreu", niveau: "Intermediaire" },
        ],

        competences: [
          { nom: "HTML", niveau: 5 },
          { nom: "CSS", niveau: 5 },
          { nom: "Bootstrap", niveau: 4 },
          { nom: "Wordpress", niveau: 2 },
          { nom: "JavaScript", niveau: 5 },
          { nom: "React", niveau: 4 },
          { nom: "Node.js", niveau: 3 },
          { nom: "Git", niveau: 5 },
        ],

        qualites: [
          "Rigoureuse",
          "Perfectionniste",
          "Autonome",
          "Curieuse",
          "Organisée",
          "Passionnée",
          "Créative",
          "Esprit d'équipe",
          "Capacité d'adaptation",
          "Sens de l'écoute",
        ],

        loisirs: ["Lecture", "Voyages", "Guitare", "Chant"],

        experiences: {
          freelance: {
            title: "Développeuse",
            subtitle: "Freelance",
            date: "2022 – Aujourd’hui",
            place: "Paris, France",
            tasks: [
              "Conception d’un site vitrine pour une association (HTML, CSS)",
              "Conception d'un carnet de bord en ligne (Js)",
              "Conception de mon portfolio (React.js,)",
              "Conception d'une application pour calculer les pourboires (Js)",
              "Gestion des versions et mise en ligne des projets avec Git",
            ],
          },
          redactrice: {
            title: "Rédactrice Web",
            subtitle: "Vospsychologues.com",
            date: "2018 – 2020",
            place: "Toulouse, France",
            tasks: [
              "Recherche et choix de sujets d’actualité",
              "Rédaction d'articles",
              "Mise en page et édition",
            ],
          },
          secretaire: {
            title: "Secrétaire de direction",
            subtitle: "Lycée ORT Colomiers",
            date: "2014 – 2017",
            place: "Colomiers, France",
            tasks: [
              "Accueil physique et téléphonique",
              "Prise de rendez-vous",
              "Planification de l’emploi du temps du directeur",
              "Traitement des dossiers d’inscription",
              "Classement des dossiers scolaires",
              "Préparation de documents administratifs",
              "Gestion du courrier",
              "Création et mise à jour du tableau des effectifs",
            ],
          },
        },

        formations: [
          {
            title: "Graduate Développeur Full-Stack",
            date: "De décembre 2020 à décembre 2022",
            place: "Centre européen de formation",
          },
          {
            title: "Master en psychopathologie clinique",
            date: "De septembre 2017 à juin 2018",
            place: "Université Jean-Jaurès – Toulouse/France",
          },
          {
            title: "Licence en psychologie",
            date: "De septembre 2016 à juin 2017",
            place: "Université Jean-Jaurès – Toulouse/France",
          },
          {
            title: "DEUG (Diplôme de psychologie)",
            date: "De Septembre 2014 a Juin 2016",
            place: "Université Jean-Jaurès  – Toulouse/France",
          },
        ],
      },

      projets: {
        item: {
          1: {
            title: "Jeu d'aventure",
            date: "A venir",
            desc: "description",
          },

          2: {
            title: "Platforme Streaming",
            date: "A venir",
            desc: "description",
          },

          3: {
            title: "E-commerce",
            date: "A venir",
            desc: "description",
          },

          4: {
            title: "Jeu du Morpion",
            date: "Fevrier 2023",
            desc: "Jeu classique que tout le monde connait (React.js)",
          },

          5: {
            title: "Carnet de bord",
            date: "Octobre 2022",
            desc: "N'oubliez rien en créant votre liste de tâches !",
          },

          6: {
            title: "AzerType",
            date: "Mai 2022",
            desc: "Entrainez vous a taper plus vite sur le clavier!",
          },

          7: {
            title: "TotalTip",
            date: "Mars 2022",
            desc: "Calcule rapide de vos pourboires.",
          },

          8: {
            title: "Quizz",
            date: "Créé en 2021",
            desc: "Quizz dérisoire. Conçu dans mes debuts avec js. ",
          },

          9: {
            title: "Coeur des mamans",
            date: "Créé en 2021",
            desc: "Site vitrine: Premier projet.",
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

      cv: {
        title: "Full-stack Developer",
        presentation:
          "Certified and passionate developer, I first learned coding on my own (HTML, CSS) before undertaking a full professional retraining (JavaScript, PHP, Python, etc.). Versatile, I master the various technical stages of creating a website or application: from front-end to back-end development, including maintenance. Moreover, my initial training in human sciences allows me to better understand users’ needs. These are all assets that have enabled me to create several projects.",
        experience: "PROFESSIONAL EXPERIENCE",
        formation: "EDUCATION",
        contact: "CONTACT",
        languages: "LANGUAGES",
        skills: "SKILLS",
        qualities: "QUALITIES",
        hobbies: "HOBBIES",
        download: "Download",

        langues: [
          { nom: "French", niveau: "Native language" },
          { nom: "English", niveau: "Intermédiate" },
          { nom: "Hebrew", niveau: "Intermédiate" },
        ],

        competences: [
          { nom: "HTML", niveau: 5 },
          { nom: "CSS", niveau: 5 },
          { nom: "Bootstrap", niveau: 4 },
          { nom: "Wordpress", niveau: 2 },
          { nom: "JavaScript", niveau: 5 },
          { nom: "React", niveau: 4 },
          { nom: "Node.js", niveau: 3 },
          { nom: "Git", niveau: 5 },
        ],

        qualites: [
          "Rigorous",
          "Perfectionist",
          "Autonomous",
          "Curious",
          "Organized",
          "Passionate",
          "Creative",
          "Team player",
          "Adaptable",
        ],

        loisirs: ["Reading", "Traveling", "Guitar", "Singing"],

        experiences: {
          freelance: {
            title: "Developer",
            subtitle: "Freelance",
            date: "2022 – Present",
            place: "Harish, Israel",
            tasks: [
              "Designed a showcase website for an association (HTML, CSS)",
              "Created an online logbook (HTML, CSS, JS)",
              "Built my portfolio (React.js, CSS)",
              "Developed a tip calculator app (HTML, CSS, JS)",
              "Managed versions and deployed projects using Git",
            ],
          },

          redactrice: {
            title: "Web Writer",
            subtitle: "Vospsychologues.com",
            date: "2018 – 2020",
            place: "Toulouse, France",
            tasks: [
              "Researched and selected current topics",
              "Wrote articles",
              "Page layout and editing",
            ],
          },

          secretaire: {
            title: "Executive Secretary",
            subtitle: "ORT High School Colomiers",
            date: "2014 – 2017",
            place: "Colomiers, France",
            tasks: [
              "In-person and phone reception",
              "Appointment scheduling",
              "Director’s schedule management",
              "Processing registration files",
              "Filing school records",
              "Preparing administrative documents",
              "Mail management",
              "Creating and updating staff tables",
            ],
          },
        },

        formations: [
          {
            title: "Graduate Full-Stack Developer",
            date: "From December 2020 to December 2022",
            place: "European Training Center",
          },
          {
            title: "Master's Degree in Clinical Psychopathology",
            date: "From September 2017 to June 2018",
            place: "Jean-Jaurès University – Toulouse/France",
          },
          {
            title: "Bachelor's Degree in Psychology",
            date: "From September 2016 to June 2017",
            place: "Jean-Jaurès University – Toulouse/France",
          },
          {
            title: "DEUG (Psychology degree)",
            date: "From September 2014 to June 2016",
            place: "Jean-Jaurès University – Toulouse/France",
          },
        ],
      },

      projets: {
        intro:
          "Here you will find a timeline of all the projects I have completed, from the most recent to my very first steps during my training..",

        item: {
          1: {
            title: "mon titre",
            date: "Créé en 2024",
            desc: "description",
          },

          2: {
            title: "mon titre",
            date: "Septembre 2023",
            desc: "description",
          },

          3: {
            title: "mon titre",
            date: "Créé en Mai 2023",
            desc: "description",
          },

          4: {
            title: "Tic-Tac-Toe",
            date: "In February 2023",
            desc: "A classic game that everyone knows. (React.js)",
          },

          5: {
            title: "Logbook",
            date: "In October 2022",
            desc: "Don't forget anything when creating your to-do list!",
          },

          6: {
            title: "AzerType",
            date: "Created in May 2022",
            desc: "Practice typing faster on the keyboard!",
          },

          7: {
            title: "TotalTip",
            date: "In March 2022",
            desc: "Quick calculation of tips to pay.",
          },

          8: {
            title: "Quizz",
            date: "Created in 2021",
            desc: "A ridiculous quiz. Designed in my early days using JavaScript.. ",
          },

          9: {
            title: "Hearts of mothers",
            date: "Created in 2021",
            desc: "Showcase website: First project.",
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
