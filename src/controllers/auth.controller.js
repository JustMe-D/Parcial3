const { successResponse, errorResponse } = require('../utils/response');
const authService = require('../services/auth.services');

const create = async (req, res) => {
    try {
        const auth = await authService.created(req.body);
        return successResponse(req, res, auth, 201);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const auths = await authService.getAll();
        return successResponse(req, res, auths, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const getById = async (req, res) => {
    try {
        const auth = await authService.getById(req.params.id);
        if (!auth) {
            return errorResponse(req, res, "Registro no encontrado", 404);
        }
        return successResponse(req, res, auth, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const auth = await authService.Updated(req.params.id, req.body);
        return successResponse(req, res, auth, 200);
    } catch (error) {
        return errorResponse(req, res, error.message, 500);
    }
};

const remove = async (req, res) => {
    try {
        await authService.deleted(req.params.id);
        return successResponse(req, res, "Registro eliminado exitosamente", 200);
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
};