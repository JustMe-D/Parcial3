const User = require("../models/user.models");

const created = async (data) => {
    await User.sync();
    const user = await User.create(data);
    return user;
}
const Updated = async (id, data) => {
    const user = await User.update(data, { where: { id } });
    return user;
}
const getAll = async () => {
    return await User.findAll();
}
const getById = async (id) => {
    return await User.findOne({ where: { id } });
}
const deleted = async (id) => {
    return await User.destroy({ where: { id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
