const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const Auth = require("./auth.models");
const userRole = require("./userRole.models");

const User = sequelize.define(
"User",
{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
        notNull: { msg: "first name is required" },
        },
    },
    last_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
        notNull: { msg: "last name is required" },
        },
    },
    username: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
        notNull: { msg: "username is required" },
        },
    },
    telephone: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
        notNull: { msg: "telephone is required" },
        },
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
        notNull: { msg: "email is required" },
        },
    },
    avatar: {
        type: DataTypes.TEXT,
        defaultValue: "http://localhost:3000/images/users/avatar/avatar-user.png",
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
},

);

User.hasOne(Auth, {
    foreignKey: 'id',
    sourceKey: 'id',
    as: 'User',
});

Auth.belongsTo(User, {
    foreignKey: 'id',
    targetKey: 'id',
    as: 'User',
});

User.hasMany(userRole, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    as: 'User',
});

userRole.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    as: 'User',
});

module.exports = User;