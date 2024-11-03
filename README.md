https://lsng.vercel.app/	  
# Portfolio de Le-Savio NGUYEN

Bienvenue sur le code source du portfolio de Le-Savio NGUYEN, un développeur web passionné par la création d'expériences numériques interactives et attrayantes. Ac

## Table des Matières
- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Scripts Disponibles](#scripts-disponibles)
- [Structure du Projet](#structure-du-projet)
- [Données Supabase](#données-supabase)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Contact](#contact)

## Aperçu
Ce projet est une application web développée avec React et TypeScript, servant de portfolio interactif pour présenter mes compétences, mes projets et mon parcours professionnel. Le site est conçu pour offrir une expérience utilisateur fluide et moderne, avec une navigation intuitive et un design responsive.

## Fonctionnalités
- **Introduction Personnelle** : Présentation avec options pour télécharger le CV et liens vers les profils GitHub et LinkedIn.
- **Parcours d'Apprentissage** : Timeline interactive du parcours éducatif et professionnel.
- **Projets Légendaires** : Liste des projets réalisés avec descriptions détaillées.
- **Capacités de Champion** : Affichage des compétences avec niveaux de maîtrise.
- **Formulaire de Contact** : Envoi de messages via EmailJS.
- **Navigation Dynamique** : Menu fixe avec indication de la section active lors du défilement.
- **Design Responsive** : Adaptation du site aux différents appareils (desktop, tablette, mobile).

## Technologies Utilisées
- **Front-end** : React avec TypeScript
- **Styling** : Tailwind CSS
- **Icônes** : Lucide React
- **Backend** : Supabase pour la gestion des données
- **Email Service** : EmailJS pour le formulaire de contact
- **Outils** : Vite, ESLint, Prettier

## Installation

### Prérequis
- Node.js version 14 ou supérieure
- npm ou yarn

### Étapes
1. Cloner le dépôt
    ```bash
    git clone https://github.com/lsng1/portfolio.git
    cd portfolio
    ```

2. Installer les dépendances
    ```bash
    npm install
    # ou
    yarn install
    ```

## Configuration

### Variables d'Environnement
Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```
Remplacez les valeurs par vos propres clés et identifiants. Assurez-vous de ne pas exposer ces informations sensibles dans le code source public.

## Utilisation
Démarrer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```
Le site sera accessible à l'adresse `http://localhost:3000`.

## Scripts Disponibles
- `npm run dev` : Démarre le serveur de développement.
- `npm run build` : Génère une version de production de l'application.
- `npm run preview` : Prévisualise la version de production localement.
- `npm run lint` : Exécute ESLint pour analyser le code.
- `npm run format` : Formate le code avec Prettier.

## Structure du Projet
```bash
portfolio/
├── src/
│   ├── components/        # Composants réutilisables (Button, Card, etc.)
│   ├── pages/             # Pages principales (Portfolio.tsx)
│   ├── assets/            # Images et icônes
│   ├── styles/            # Fichiers de style globaux
│   ├── App.tsx            # Point d'entrée principal
│   └── main.tsx           # Configuration de React et du routage
├── public/                # Fichiers statiques
├── .env                   # Variables d'environnement
├── package.json           # Dépendances et scripts
└── README.md              # Documentation du projet
```

## Données Supabase
Assurez-vous que votre instance Supabase contient les tables suivantes :

### Table `projects`
- `id` : integer, primary key
- `name` : text
- `description` : text
- `category` : text
- `link` : text (optionnel)

### Table `skills`
- `id` : integer, primary key
- `name` : text
- `level` : integer (1 à 5)

### Table `experience`
- `id` : integer, primary key
- `title` : text
- `role` : text
- `duration` : text
- `location` : text (optionnel)

## Contribuer
Les contributions sont les bienvenues ! Pour améliorer ce projet :
1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/YourFeature`)
3. Committez vos modifications (`git commit -m 'Add some feature'`)
4. Pushez vers la branche (`git push origin feature/YourFeature`)
5. Ouvrez une Pull Request

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Contact
Pour toute question ou suggestion, n'hésitez pas à me contacter via le formulaire de contact sur le site ou via mes profils professionnels :
- **Email** : lsng@protonmail.com
- **LinkedIn** : [linkedin.com/in/lsng](https://www.linkedin.com/in/lsng)
- **GitHub** : [github.com/lsng1](https://github.com/lsng1)

Merci d'avoir visité mon portfolio ! 🙌
