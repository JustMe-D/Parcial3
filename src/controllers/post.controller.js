const {successResponse, errorResponse} = require('../utils/response');
const postService = require('../services/post.service');

const create = async (req, res) => {
    try {
        const post = await postService.created(req.body);
        return successResponse(req, res, post, 201);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const posts = await postService.getAll();
        return successResponse(req, res, posts, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getById = async (req, res) => {
    try {
        const post = await postService.getById(req.params.id);
        if (!post) {
            return errorResponse(req, res, "Post no encontrado", 404);
        }
        return successResponse(req, res, post, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const post = await postService.Updated(req.params.id, req.body);
        return successResponse(req, res, post, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        await postService.deleted(req.params.id);
        return successResponse(req, res, "Post eliminado exitosamente", 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const uploadImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { file } = req;
        if (!file) {
            return errorResponse(req, res, "No se subió ningún archivo", 400);
        }
        const result = await postService.updateImage(id, file);
        return successResponse(req, res, {
            msg: "Imagen modificada correctamente",
            post: id,
            img: result.image_url,
        }, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    uploadImage
};