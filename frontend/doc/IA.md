# Evolution des IA dans le jeu
## IA facile
La première IA est conçue de manière très basique. Elle se positionne simplement sous la balle et tire. Elle a quelques variantes qui lui permettent de tirer la balle quand elle est de son côté lors de l'engagement et de se positionner à 2/3 du terrain vers le fond. Cela lui permet de récupérer un maximum de balles.
## IA forte
La seconde IA est une IA forte, conçue avec du machine learning et une procédure évolutive.
### Première approche
1. La première approche a été de créer une population et d'organiser un tournoi pour déterminer le meilleur. Cependant, deux problèmes se sont posés :
Le nombre de matchs devient trop important si on augmente la population. Ce problème a été résolu en ne faisant pas affronter tous les joueurs et en utilisant un arbre de matchs.
2. C'est trop vague. Il est compliqué pour une IA de tomber sur la bonne combinaison de touches pour renvoyer une balle.
### Deuxième approche
La deuxième méthode d'apprentissage choisie a été de ne pas faire affronter les adversaires, mais plutôt de leur lancer un certain nombre de balles et de voir combien ils arrivent à renvoyer. Ce nombre sera notre fitness.  Ce système fonctionne beaucoup mieux. Une IA forte émerge plus rapidement, mais on perd en stratégie de jeu. L'IA ne fait que renvoyer, mais n'essaie pas vraiment de gagner en soi.  De plus, comme notre fitness est uniquement basé sur le renvoi, l'IA peut garder la balle longtemps avant de la renvoyer. Nous avons ajouté un petit bonus de fitness si la balle est renvoyée rapidement.