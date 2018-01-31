# Proof of Concept : Tarificateur

Ce projet est un test d'implémentation d'un tarificateur avec Node.Js.

Objectifs principaux :
* Test de performance de Node.Js pour des calculs de tarif
* Servir de pattern de base (strongly opiniated) pour d'autres tarificateurs sur des projets personnels.

Fonctionnalités minimales :
* Calcul d'un tarif
* Décomposition des lignes du tarif par produit / type de montant (hors taxe, taxes, ...)
* unit testing

BDD de test :
* SqLite 3

# Déploiement

* Cloner le projet
* Avoir ou installer Node.Js
* Exécuter la commande : 
> npm install

# Commandes

Démarrer le serveur (clear dist + tsc watch + nodemon start)
> npm run start

Compiler le typescript
> npm run build

Compiler + activer le watcher (compilation typescript on the fly)
> npm run watch:build

# Structure du projet

* Répertoire "dist/" contient les fichiers JS compilés depuis Typescript.
* Répertoire "src/" contient les fichiers TS

* Point de départ : 
> src/index.ts
 
## Répertoires

* src/migrations
> Pour les tests : scripts de déploiement d'une BDD de test + valeurs
> Pour un projet : si ORM, scripts de seeding + migrations

* src/models
> Modules de classes (avec ou sans lien BDD) 

* src/helpers
> Modules de logiques communes (manipulation de dates, ...)

* src/controllers
> Contient un répertoire par controller.
> Chaque répertoire contient :
> * routes.js : module des routes du controller
> * [nom]Controller.js : module(s) de logique du controller

