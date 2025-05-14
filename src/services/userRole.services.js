const Role = require("../models/role.models");
const User = require("../models/user.models");
const UserRole = require("../models/userRole.models");

const created = async (data) => {
    await UserRole.sync();
    const UserRole = await UserRole.create(data);
    return UserRole;
}
const Updated = async (id, data) => {
    const UserRole = await UserRole.Update(data, {where: {id}});
    return UserRole;
}
const getAll = async () => {
    return await UserRole.findAll(
        {include: [
            {model: User, as: 'User'}
        ]}
    );
}
const getById = async (id) => {
    return await UserRole.findOne(
        {where: {id}},
        {include: [
            {model: User, as: 'User'}
        ]}
    );
}

const deleted = async (id) => {
    return await UserRole.destroy({where: {id}});
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}