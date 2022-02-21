const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    first_name: "Debbie",
    last_name: "Hall",
    username: "dhall",
    email: "dhall@gmail.com",
    password: "Password1",
  },
  {
    first_name: "Stephen",
    last_name: "Ruf",
    username: "sruf",
    email: "sruf@gmail.com",
    password: "Password2",
  },
  {
    first_name: "Lilo",
    last_name: "Stitch",
    username: "lstitch",
    email: "lstitch@gmail.com",
    password: "Password3",
  },
];

const seedGroups = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedGroups;