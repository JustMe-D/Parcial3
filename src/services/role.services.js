const Role = require("../models/role.models");

const created = async (data) => {
    await Role.sync();
    const Role = await Role.create(data);
    return Role;
}
const Updated = async (id, data) => {
    const Role = await Role.update(data, { where: { id } });
    return Role;
}
const getAll = async () => {
    return await Role.findAll();
}
const getById = async (id) => {
    return await Role.findOne({ where: { id } });
}
const deleted = async (id) => {
    return await Role.destroy({ where: { id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
