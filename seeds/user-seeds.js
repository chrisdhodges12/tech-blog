const { User }= require("../models");

const userData = [
    {
        id: 1,
        username: "Chris",
        email: "chris@email.com",
        password: "chris",
    },
    {
        id: 2,
        username: "John",
        email: "john@email.com",
        password: "john"
    },
    {
        id: 3,
        username: "Susan",
        email: "susan@email.com",
        password: "susan"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;