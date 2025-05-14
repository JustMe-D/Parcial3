const Auth = require("../models/auth.models");
const User = require("../models/user.models");

const created = async (data) => {
    await Auth.sync();
    const Auth = await Auth.create(data);
    return Auth;
}
const Updated = async (id, data) => {
    const Auth = await Auth.Update(data, {where: {id}});
    return Auth;
}
const getAll = async () => {
    return await Auth.findAll(
        {include: [
            {model: User, as: 'User'}
        ]}
    );
}
const getById = async (id) => {
    return await Auth.findOne(
        {where: {id}},
        {include: [
            {model: User, as: 'User'}
        ]}
    );
}

const deleted = async (id) => {
    return await Auth.destroy({where: {id}});
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
