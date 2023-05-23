# Projet 11 : Développez une application Web avec React et React Router

Ce projet a été réalisé en septembre 2022 lors de ma formation de développeur front-end chez OpenClassrooms.

## Scénario :
<p align="center">
  <img src="src/assets/logo.PNG">
</p> 
Kasa m'a recruté en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

Le site de Kasa a été codé en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel.

### Objectif :
Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et avec un code de qualité ! 

### Back-end / data : 
Le recrutement de la personne en charge du Back-End n'est pas terminé. Il faut faire sans pour le moment avec un fichier JSON contenant les 20 dernières annonces de logements.

### Contraintes techniques :
#### React :
- Découpage en composants modulaires et réutilisables
- Un composant par fichier
- Structure logique des différents fichiers
- Utilisation des props entre les composants
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements
- Listes : utiliser autant que possible les itérations sur les listes par exemple avec map

#### React Router :
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement
- Il existe une page par route
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées
- La logique du routeur est réunie dans un seul fichier

#### Général :
Le code ne doit pas produire d'erreur ou de warning dans la console.

### Contraintes fonctionnelles :
- Pour le défilement des photos dans la galerie (composant Gallery) :
    - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
    - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
    - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
    - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : 
    - Par défaut, les Collapse sont fermés à l'initialisation de la page. 
    - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Lien vers les maquettes Figma :
https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design?node-id=4%3A1

## Compétences évaluées :
- Développer les routes d'une application web avec React Router
- Initialiser une application web avec un framework
- Créer des composants avec React

## Lien vers la page :
https://p11-oc-kasa.vercel.app/
