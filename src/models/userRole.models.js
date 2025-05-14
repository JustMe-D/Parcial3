userRole.model.js
const UserRole = sequelize.define(
"UserRole",
{
    user_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
        model: User,
        key: 'id'
        },
    allowNull: false,
    },
    role_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
        model: Role,
        key: 'id'
        },
    allowNull: false,
    }
},
    {
    timestamps: true,
    }
);

// Establecer relaciones
User.belongsToMany(Role, { through: UserRole, foreignKey: 'user_id' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'role_id' });