const {successResponse, errorResponse} = require('../utils/response');
const commentService = require('../services/comment.services');

const create = async (req, res) => {
    try {
        const comment = await commentService.created(req.body);
        return successResponse(req, res, comment, 201);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const comments = await commentService.getAll();
        return successResponse(req, res, comments, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getById = async (req, res) => {
    try {
        const comment = await commentService.getById(req.params.id);
        if (!comment) {
            return errorResponse(req, res, "Comentario no encontrado", 404);
        }
        return successResponse(req, res, comment, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const comment = await commentService.Updated(req.params.id, req.body);
        return successResponse(req, res, comment, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        await commentService.deleted(req.params.id);
        return successResponse(req, res, "Comentario eliminado exitosamente", 200);
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