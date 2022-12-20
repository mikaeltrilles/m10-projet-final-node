const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/gdadb')

const myPlaintextPassword = 'admin';
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  User.create({
    nom: "Administrator",
    prenom: "MASTER",
    emailEmploye: "admin@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'ADMIN',
    role: "ROLE_ADMIN",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword2 = 'manager';
bcrypt.hash(myPlaintextPassword2, saltRounds, function (err, hash) {
  User.create({
    nom: "Paul",
    prenom: "MANAGER DEV",
    emailEmploye: "managerdev@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'DEV',
    role: "ROLE_MANAGER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword3 = 'manager';
bcrypt.hash(myPlaintextPassword3, saltRounds, function (err, hash) {
  User.create({
    nom: "Mathieu",
    prenom: "MANAGER CDA",
    emailEmploye: "managercda@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'CDA',
    role: "ROLE_MANAGER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

// Generation de plusiieurs utilisateurs dans la base de données avec des ROLE_USER 
const myPlaintextPassword4 = 'user';
bcrypt.hash(myPlaintextPassword4, saltRounds, function (err, hash) {
  User.create({
    nom: "Benoit",
    prenom: "USER DEV",
    emailEmploye: "benoitdev@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'DEV',
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword5 = 'user';
bcrypt.hash(myPlaintextPassword5, saltRounds, function (err, hash) {
  User.create({
    nom: "Pierre",
    prenom: "USER DEV",
    emailEmploye: "pierredev@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'DEV',
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword6 = 'user';
bcrypt.hash(myPlaintextPassword6, saltRounds, function (err, hash) {
  User.create({
    nom: "Jean",
    prenom: "USER DEV",
    emailEmploye: "jeandev@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'DEV',
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword7 = 'user';
bcrypt.hash(myPlaintextPassword7, saltRounds, function (err, hash) {
  User.create({
    nom: "Marc",
    prenom: "USER CDA",
    emailEmploye: "marccda@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'CDA',
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword8 = 'user';
bcrypt.hash(myPlaintextPassword8, saltRounds, function (err, hash) {
  User.create({
    nom: "Jaco",
    prenom: "USER CDA",
    emailEmploye: "jacocda@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'CDA',
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});

const myPlaintextPassword9 = 'user';
bcrypt.hash(myPlaintextPassword9, saltRounds, function (err, hash) {
  User.create({
    nom: "Simon",
    prenom: "USER CDA",
    emailEmploye: "simoncda@gmail.com",
    mdp: hash,
    isPresent: "true",
    departement: 'CDA',
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  }, (error, user) => { console.log(error, user) });
});
