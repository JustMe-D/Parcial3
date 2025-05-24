const Like = require('../models/like.models');
const Post = require('../models/post.models');
const User = require('../models/user.models');

const created = async (data) => {
    await Like.sync();
    const like = await Like.create(data);
    return like;
}
const Updated = async (id, data) => {
    const like = await Like.update(data, { where: { id } });
    return like;
}
const getAll = async () => {
    return await Like.findAll(
        { include: [
            { model: User, as: 'uLike' },
            { model: Post, as: 'pLike' }

        ] }
    );
}
const getById = async (id) => {
    return await Like.findOne(
        { where: { id } },
        { include: [
            { model: User, as: 'uLike' },
            { model: Post, as: 'pLike' }
        ] }

    );
}
const deleted = async (id) => {
    return await Like.destroy({ where: { id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
