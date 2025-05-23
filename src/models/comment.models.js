const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Comment = sequelize.define(
"Comment",
{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    post_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
            notNull: { msg: "post id is required" },
        },
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
            notNull: { msg: "user id is required" },
        },
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: { msg: "content is required" },
        },
    },
}
);

module.exports = Comment;