const Post = require('../models/post.models');
const User = require('../models/user.models');

const created = async (data) => {
    await Post.sync();
    const post = await Post.create(data);
    return post;
}
const Updated = async (id, data) => {
    const post = await Post.update(data, { where: { id } });
    return post;
}
const getAll = async () => {
    return await Post.findAll(
        { include: [
            { model: User, as: 'uPost' }
        ] }
    );
}
const getById = async (id) => {
    return await Post.findOne(
        { where: { id } },
        { include: [
            { model: User, as: 'uPost' }
        ] }

    );
}
const deleted = async (id) => {
    return await Post.destroy({ where: { id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
