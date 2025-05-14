const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const User = require("./user.model");

const Role = sequelize.define(
"Role",
{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
        notNull: { msg: "name is required" },
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
},
{
    timestamps: true,
  }
);