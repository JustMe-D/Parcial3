const {successResponse, errorResponse} = require('../utils/response');
const likeService = require('../services/like.service');

const create = async (req, res) => {
    try {
        const like = await likeService.created(req.body);
        return successResponse(req, res, like, 201);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const likes = await likeService.getAll();
        return successResponse(req, res, likes, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getById = async (req, res) => {
    try {
        const like = await likeService.getById(req.params.id);
        if (!like) {
            return errorResponse(req, res, "Like no encontrado", 404);
        }
        return successResponse(req, res, like, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const like = await likeService.Updated(req.params.id, req.body);
        return successResponse(req, res, like, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        await likeService.deleted(req.params.id);
        return successResponse(req, res, "Like eliminado exitosamente", 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};