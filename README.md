# SkySwap Volley - Games on web 2024 Olympic edition

![Logo](images/logo.png)

## Participants

**Raphaël CALDWELL** et **Corentin VEILLARD**, étudiants en troisième année de BUT Informatique
à l'IUT de Nice Côte d'Azur.

## Présentation du jeu

*SkySwap Volley* est un jeu de volley-ball rempli d'action offrant de nombreuses possibilités.
Serez-vous capable de venir à bout de la campagne, où vous devrez affronter trois athlètes de
difficulté croissante ? Ou bien deviendrez-vous le maître des échanges et du smash parmi vos
amis grâce au mode multijoueur en ligne ou local ?

À très vite sur le terrain 🏐⚡ !

## Caractéristique
- Multijoueur en ligne en temps réel avec des parties privées ou un matchmaking
- Multijoueur en local avec deux joueurs sur le même clavier
- Mode campagne contre trois IA de difficulté croissante
- La dernière IA a été entrainée avec un algorithme utilisant une méthode d'apprentissage profond (NEAT)

## Jouer au jeu !
Le jeu est disponible à l'adresse suivante : https://sky.corentin.cc/

## Les touches

### Joueur de droite (celui qui joue la campagne)

- `Q` pour se déplacer à gauche
- `D` pour sé déplacer à droite
- `Z` pour sauter
- `espace` pour frapper la balle

### Joueur de gauche (en multijoueur local)

- `1` pour se déplacer à gauche
- `3` pour sé déplacer à droite
- `5` pour sauter
- `+` pour frapper la balle

## Vidéo de présentation
### Présentation du jeu
[![Présentation du jeu](images/Présentation%20du%20jeu.jpg)](https://youtu.be/S4sDqExRHQk)


### Présentation de l'interface
[![Présentation de l'interface](images/Présentation%20de%20l'interface.jpg)](https://www.youtube.com/watch?v=IZBaLtZrJhw)

### Vidéo de gameplay
[![Vidéo de gameplay](images/Vidéo%20de%20gameplay.jpg)](https://youtu.be/MUIWrP0zibI)


## Instructions pour le développement

Dans un premier temps, cloner le dépôt sur votre machine :

```bash
git clone https://github.com/gamesonweb/gow-olympic-edition-skyswap-volley.git
```

Pour lancer le backend (serveur multijoueur) :

1. Aller dans le répertoire serveur : `cd serveur`
2. Installer les dépendances (à faire une seule fois) : `pnpm install`
3. Lancer le serveur : `pnpm start`

Pour lancer le frontend (jeu dans le navigateur) :

1. Aller dans le répertoire frontend : `cd frontend`
2. Installer les dépendances (à faire une seule fois) : `pnpm install`
3. Lancer en mode développement : `pnpm dev`


# Pour aller plus loin


## IA facile
La première IA est conçue de manière très basique. Elle se positionne simplement sous la balle et tire. Elle a quelques variantes qui lui permettent de tirer la balle quand elle est de son côté lors de l'engagement et de se positionner à 2/3 du terrain vers le fond. Cela lui permet de récupérer un maximum de balles.
### Bot facile
Le bot facile est la première IA avec des compétences réduites. Elle se déplace plus lentement et avec plus de latence. Le bot est donc moins fort.

### Bot moyen
Le bot moyen a la même IA mais n'a pas la réduction de vitesse et de latence.

## Bot fort (IA)
La seconde IA est une IA forte, conçue avec du machine learning et une procédure évolutive.
### Première approche
1. La première approche a été de créer une population et d'organiser un tournoi pour déterminer le meilleur. Cependant, deux problèmes se sont posés :
   Le nombre de matchs devient trop important si on augmente la population. Ce problème a été résolu en ne faisant pas affronter tous les joueurs et en utilisant un arbre de matchs.
2. C'est trop vague. Il est compliqué pour une IA de tomber sur la bonne combinaison de touches pour renvoyer une balle.
### Deuxième approche
La deuxième méthode d'apprentissage choisie a été de ne pas faire affronter les adversaires, mais plutôt de leur lancer un certain nombre de balles et de voir combien ils arrivent à renvoyer. Ce nombre sera notre fitness.  Ce système fonctionne beaucoup mieux. Une IA forte émerge plus rapidement, mais on perd en stratégie de jeu. L'IA ne fait que renvoyer, mais n'essaie pas vraiment de gagner en soi.  De plus, comme notre fitness est uniquement basé sur le renvoi, l'IA peut garder la balle longtemps avant de la renvoyer. Nous avons ajouté un petit bonus de fitness si la balle est renvoyée rapidement.

# Optimisation du temps de chargement

Nous avons constaté que la taille du jeu devenait trop importante, ce qui affectait le temps de chargement.

La solution que nous avons mise en place consiste à charger l'interface utilisateur comme un site web classique avec un package plus petit dans un premier temps. Une fois que l'interface est chargée, nous chargeons ensuite Babylon.js et le jeu lui-même.
Cette approche permet de rendre l'interface utilisateur disponible plus rapidement, tout en chargeant les éléments plus lourds du jeu en arrière-plan.

# Multijoueur

Nous avons intégré un mode multi-joueurs à notre jeu. Ce mode permet aux joueurs de se connecter à une partie en ligne et d'affronter d'autres joueurs. Pour gérer la communication entre les joueurs, nous avons utilisé le framework Colyseus.
## Difficultés rencontrées


La mise en place d'un mode multi-joueurs en temps réel n'est pas une tâche aisée. Notre objectif était de maintenir des performances optimales même en cas de connexion dégradée.
## Solution

Nous avons décidé que le serveur ne serait pas le maître du jeu, mais servirait simplement de relais entre les joueurs. Chaque joueur est maître de sa section de terrain. Ainsi, même si visuellement un joueur voit la balle toucher le sol de son adversaire, si du point de vue de son adversaire la balle n'a pas touché le sol, alors elle sera considérée comme valide. Cette approche permet de rendre le jeu jouable même avec une connexion dégradée.  L'inconvénient de cette technique est qu'en cas de latence, l'adversaire peut sembler se téléporter.