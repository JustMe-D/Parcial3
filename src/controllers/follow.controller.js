const {successResponse, errorResponse} = require('../utils/response');
const followService = require('../services/follow.service');

const create = async (req, res) => {
    try {
        const follow = await followService.created(req.body);
        return successResponse(req, res, follow, 201);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const follows = await followService.getAll();
        return successResponse(req, res, follows, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getById = async (req, res) => {
    try {
        const follow = await followService.getById(req.params.id);
        if (!follow) {
            return errorResponse(req, res, "Seguidor no encontrado", 404);
        }
        return successResponse(req, res, follow, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const follow = await followService.Updated(req.params.id, req.body);
        return successResponse(req, res, follow, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        await followService.deleted(req.params.id);
        return successResponse(req, res, "Seguidor eliminado exitosamente", 200);
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
