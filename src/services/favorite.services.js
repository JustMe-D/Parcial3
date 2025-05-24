const Favorite = require('../models/favorite.models');
const Post = require('../models/post.models');
const User = require('../models/user.models');

const created = async (data) => {
    await Favorite.sync();
    const favorite = await Favorite.create(data);
    return favorite;
}
const Updated = async (id, data) => {
    const favorite = await Favorite.update(data, { where: { id } });
    return favorite;
}
const getAll = async () => {
    return await Favorite.findAll(
        { include: [
            { model: User, as: 'uFavorite' },
            { model: Post, as: 'pFavorite' }

        ] }
    );
}
const getById = async (id) => {
    return await Favorite.findOne(
        { where: { id } },
        { include: [
            { model: User, as: 'uFavorite' },
            { model: Post, as: 'pFavorite' }
        ] }

    );
}
const deleted = async (id) => {
    return await Favorite.destroy({ where: { id } });
}

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted
}
