const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const UserRole = sequelize.define(
"UserRole",
{
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        },
    
    }
);

module.exports = UserRole;