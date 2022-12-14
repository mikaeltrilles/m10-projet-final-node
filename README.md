# m10-projet-final-node

[![wakatime](https://wakatime.com/badge/user/933ebfa6-42e4-4a54-b3fc-658e9f1ab22f/project/4f8ba691-d7d3-41b6-b6c6-5c49c5a5d6f9.svg)](https://wakatime.com/badge/user/933ebfa6-42e4-4a54-b3fc-658e9f1ab22f/project/4f8ba691-d7d3-41b6-b6c6-5c49c5a5d6f9)

Projet Backend de formation NodeJS Full Stack

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascriptcom/)

---------

## Initialisation du Projet Server Node

```bash
npm init
````

Json du projet

```json
{
  "name": "m10-projet-final-node",
  "version": "1.0.0",
  "description": "Backend gestion de congés",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mikaeltrilles/
m10-projet-final-node.git"
  }
}
```

## Installation d'Express

- Documentation : [ExpressJS](https://expressjs.com/fr/starter/installing.html)

```bash
npm install express --save
````

## Installation de Mongoose

- Documentation : [MongooseJS](https://mongoosejs.com/)

```bash
npm install mongoose --save
````

```javascript
const mongoose = require('mongoose');
const User = require('./models/User');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/gdadb')
```

## Installation Cors pour les requêtes multi-origines

- Documentation [cors](https://expressjs.com/en/resources/middleware/cors.html)

```bash
npm i cors
````

Documentation [DotEnv](https://www.npmjs.com/package/dotenv)

## Installation de DotEnv pour las variables d'environement

- Documentation [dotenv](https://github.com/motdotla/dotenv)

```bash
npm install dotenv --save
````

## Installation de jsonwebtoken pour le token de session

- Documentation [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

```bash
npm install jsonwebtoken
```

## Installation de mongoose validator pour l'unicité des emails

```bash
npm install --save mongoose-unique-validator
```

```js
const uniqueValidator = require('mongoose-unique-validator');
// Code Schema
mySchema.plugin(uniqueValidator);
```

## Modele User en BDD

```JSON
/** 
* Paste one or more documents here
*/
{
  "_id": {
    "$oid": "63989177b4417c3504143a6b"
  },
  "nom": "toto",
  "prenom": "jaco",
  "dateNaissance": 1980-01-01,
  "adresse": "Rue dici 34000 Montpellier",
  "emailEmploye": "trilloux@gmail.com",
  "emailProfessionel": "admin@societe.fr",
  "telephone": "0612345678",
  "mdp": "open",
  "isPresent": "true",
  "departement": {
    "section": "DSI",
    "service": "ADMIN",
    "pole": "ADMIN",
    "numero": 1,
  },
  "role": "ROLE_ADMIN",
  "photo": "",
  "createdAt": 2022-12-13,
  "updatedAt": 2022-12-13,
}
````
