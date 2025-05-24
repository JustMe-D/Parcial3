const Post = require('../models/post.models');
const User = require('../models/user.models');
const fs = require('fs');

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

const updateImage = async (id, file) => {
    const post = await Post.findOne({ where: { id } });
    if (!post) {
        throw new Error("Post no encontrado");
    }
    // Elimina la imagen anterior si existe
    if (post.imagePath) {
        fs.unlink(post.imagePath, (err) => {
            if (err) console.error(err);
        });
    }
    const imagePath = file.path;
    const image_url = `http://localhost:3000/images/posts/${file.filename}`;
    await Post.update({ image_url, imagePath }, { where: { id } });
    return { image_url, imagePath };
};

module.exports = {
    created,
    Updated,
    getAll,
    getById,
    deleted,
    updateImage
}
