const { User }= require("../models");

const userData = [
    {
        id: 1,
        "username": "chris",
        "password": "chris",
    },
    {
        id: 2,
        "username": "john",
        "password": "john"
    },
    {
        id: 3,
        "username": "susan",
        "password": "susan"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;