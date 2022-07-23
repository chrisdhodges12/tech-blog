const { Post }= require("../models");

const postData = [
    {
        "id": 1,
        "title": "The Title of my first post",
        "post_text": "The text of my first post",
        "user_id": 1
    },
    {
        "id": 2,
        "title": "The title of my second post",
        "post_text": "The text of my second post",
        "user_id": 1
    },
    {
        "id": 3,
        "title": "The title of John's first post",
        "post_text": "The text of John's first post",
        "user_id": 2
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;