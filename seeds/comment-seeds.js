const { Comment }= require("../models");

const commentData = [
    {
        "id": 1,
        "comment_text": "The first comment!",
        "user_id": 2,
        "post_id": 1,
    },
    {
        "id": 2,
        "comment_text": "Another comment!",
        "user_id": 3,
        "post_id": 1,
    },
    {
        "id": 3,
        "comment_text": "A comment for John's post!",
        "user_id": 1,
        "post_id": 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;