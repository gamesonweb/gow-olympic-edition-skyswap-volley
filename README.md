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
