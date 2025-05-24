const Follow = require('../models/follow.models');
const Post = require('../models/post.models');
const User = require('../models/user.models');

const created = async (data) => {
    await Follow.sync();
    const follow = await Follow.create(data);
    return follow;
}
const Updated = async (follower_id, following_id, data) => {
    const follow = await Follow.update(data, { where: { follower_id, following_id } });
    return follow;
}
const getAll = async () => {
    return await Follow.findAll(
        { include: [
            { model: User, as: 'uFollower' },
            { model: User, as: 'uFollowing' }

        ] }
    );
}
const getById = async (follower_id, following_id ) => {
    return await Follow.findOne(
        { where: { follower_id, following_id } },
        { include: [
            { model: User, as: 'uFollower' },
            { model: User, as: 'uFollowing' }
        ] }

    );
}
const deleted = async (follower_id, following_id ) => {
    return await Follow.destroy({ where: { follower_id, following_id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
