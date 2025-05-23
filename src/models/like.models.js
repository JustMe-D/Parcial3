const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Like = sequelize.define(
"Like",
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
    post_id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
            notNull: { msg: "post id is required" },
        },
    },
},
{

    indexes: [
        {
            unique: true,
            fields: ['user_id', 'post_id']
        }
    ]
}
);

module.exports = Like;