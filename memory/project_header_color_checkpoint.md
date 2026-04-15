---
name: Header couleurs — checkpoint 2026-04-16
description: État exact des couleurs du header (h1/h2/h3, navbar) au 16 avril 2026, avant de nouveaux essais
type: project
---

Checkpoint couleurs header sauvegardé à la demande de l'utilisatrice.

**Why:** Elle expérimente et veut pouvoir revenir à cet état si les essais ne sont pas productifs.

**How to apply:** Restaurer les valeurs ci-dessous si elle demande de "revenir à l'état sauvegardé" ou "revenir au checkpoint".

---

## Header.css — couleurs des titres

**h1** (`.accueil-page h1, .projet-page h1`) :
- `color: #803cc5` (violet)
- `text-shadow: 0 0 18px #a855f7, 0 0 40px #7c3aed, 0 0 70px #6d28d960`

**h2** (`.accueil-page header h2, .projet-page header h2`) :
- `color: rgb(243 106 199)` (rose)
- `text-shadow: none`

**h3 / .titre3** (`.accueil-page header .titre3, .projet-page header .titre3`) :
- `color: #c084fc` (violet clair)
- pas de text-shadow spécifique

---

## SkillsBar.css — navbar

**Bordures** :
- `border-top/bottom: 3px solid rgba(253, 129, 212, 0.5)` (rose électrique)

**Box-shadow** :
- `0 -1px 8px rgba(253, 129, 212, 0.7)`
- `0 -1px 20px rgba(179, 74, 146, 0.5)`
- `0  1px 8px rgba(253, 129, 212, 0.7)`
- `0  1px 20px rgba(179, 74, 146, 0.5)`

**Boutons `.skill-btn`** :
- `background-color: #c084fc` (violet clair, même que h3)
- `color: black`
- `box-shadow: 0 0 8px rgba(192, 132, 252, 0.3)`
