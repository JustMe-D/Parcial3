const Comment = require('../models/comment.models');
const Post = require('../models/post.models');
const User = require('../models/user.models');

const created = async (data) => {
    await Comment.sync();
    const comment = await Comment.create(data);
    return comment;
}
const Updated = async (id, data) => {
    const comment = await Comment.update(data, { where: { id } });
    return comment;
}
const getAll = async () => {
    return await Comment.findAll(
        { include: [
            { model: User, as: 'uComment' },
            { model: Post, as: 'pComment' }

        ] }
    );
}
const getById = async (id) => {
    return await Comment.findOne(
        { where: { id } },
        { include: [
            { model: User, as: 'uComment' },
            { model: Post, as: 'pComment' }
        ] }

    );
}
const deleted = async (id) => {
    return await Comment.destroy({ where: { id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
