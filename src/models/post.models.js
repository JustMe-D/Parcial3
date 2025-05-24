const {DataTypes} = require('sequelize');
const sequelize = require('../db/db');

const Post = sequelize.define(
    "Post",
    {
        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
            notNull: { msg: "user id is required" },
        },
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notNull: { msg: "title is required" },
        },
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: { msg: "content is required" },
        },
    },
    image_url: {
        type: DataTypes.TEXT,
        defaultValue: "http://localhost:3000/images/posts/image1.png",
    }
}
);

module.exports = Post;