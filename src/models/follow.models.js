const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Follow = sequelize.define(
"Follow",
{
    follower_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        validate: {
            notNull: { msg: "follower_id is required" },
        },
    },
    following_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        validate: {
            notNull: { msg: "following_id is required" },
        },
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
},
{
    validate: {
        notSelfFollow() {
            if (this.follower_id === this.following_id) {
                throw new Error('A user cannot follow themselves');
            }
        }
    },
    
}
);

module.exports = Follow;