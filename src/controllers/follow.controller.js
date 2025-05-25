const {successResponse, errorResponse} = require('../utils/response');
const followService = require('../services/follow.services');

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
        const { follower_id, following_id } = req.params;
        const follow = await followService.getById(follower_id, following_id);
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
        const { follower_id, following_id } = req.params;
        const follow = await followService.Updated(follower_id, following_id, req.body);
        return successResponse(req, res, follow, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        const { follower_id, following_id } = req.params;
        await followService.deleted(follower_id, following_id);
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
