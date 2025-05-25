const {successResponse, errorResponse} = require('../utils/response');
const favoriteService = require('../services/favorite.services');

const create = async (req, res) => {
    try {
        const favorite = await favoriteService.created(req.body);
        return successResponse(req, res, favorite, 201);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const favorites = await favoriteService.getAll();
        return successResponse(req, res, favorites, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getById = async (req, res) => {
    try {
        const favorite = await favoriteService.getById(req.params.id);
        if (!favorite) {
            return errorResponse(req, res, "Favorito no encontrado", 404);
        }
        return successResponse(req, res, favorite, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const favorite = await favoriteService.Updated(req.params.id, req.body);
        return successResponse(req, res, favorite, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        await favoriteService.deleted(req.params.id);
        return successResponse(req, res, "Favorito eliminado exitosamente", 200);
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