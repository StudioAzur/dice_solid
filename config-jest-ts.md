# Installer Jest dans un projet TS

## Initialiser le projet Node

`npm init`: va créer un fichier package.json remplis avec vos reponses à ses questions

> changer le `'main'` du package.json pour indiquer quel est le programme qui lance l'application (ex: `'main': './dist/index.js'`). Dans notre cas nous lançons le fichier buildé par Typescript (*/dist/index.js*)

## Installer TS et Jest

`npm install typescript jest`

## Initialiser Typescript

`npx tsc --init`: va créer un fichier tsconfig.json qu'il faut modifier.

Dans le champ *rootDirs* (et pas rootDir): renseigner le(s) dossier(s) de vos sources (ex: ["./src"])

Dans le champ *outDir*: renseigner le dossier dans lequel envoyer le build (ex: './dist').

## Installer ts-jest

`npm install -D ts-jest`: installe un packet qui configue Jest avec Typescript.

`npx ts-jest config:init`: créer et remplit un fichier jest-config.

## initialiser Git

`git init`

`.gitignore` doit contenir les fichiers à ignorer:

- coverage (le dossier de couverture de code de Jest)
- le fichier de sortie du build (précisé dans outDir du ts-config)
- node_modules (comme dans tout projets NodeJS !)

## Modifier le package.json

*package.json* contient les propriétés du projet NodeJS.

La partie script contient les commandes à lancer rapidement:
- `'start':'tsc && node .'`: lance le projet
- `'test':'jest'`: lance les tests avec Jest
- `'build':'tsc'`: transpile le code en TS en JS
