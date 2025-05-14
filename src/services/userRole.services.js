const Role = require("../models/role.models");
const User = require("../models/user.models");
const UserRole = require("../models/userRole.models");

const created = async (data) => {
    await UserRole.sync();
    const UserRole = await UserRole.create(data);
    return UserRole;
}
const Updated = async (user_id,role_id, data) => {
    const UserRole = await UserRole.Update(data, {where: {user_id,role_id}});
    return UserRole;
}
const getAll = async () => {
    return await UserRole.findAll(
        {include: [
            {model: User, as: 'User'},
            {model: Role, as: 'Role'}
        ]}
    );
}
const getById = async (user_id,role_id) => {
    return await UserRole.findOne(
        {where: {user_id,role_id}},
        {include: [
            {model: User, as: 'User'},
            {model: Role, as: 'Role'}
        ]}
    );
}

const deleted = async (user_id,role_id) => {
    return await UserRole.destroy({where: {user_id,role_id}});
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}