const [successResponse, errorResponse] = require('../utils/response');
const roleService = require('../services/role.services');

const create = async (req, res) => {
    try {
        const role = await roleService.create(req.body);
        return successResponse(res, role, "Rol creado exitosamente", 201);
    } catch (error) {
        return errorResponse(res, error, "Error al crear el rol", 500);
    }
};

const getAll = async (req, res) => {
    try {
        const roles = await roleService.getAll();
        return successResponse(res, roles, "Roles obtenidos exitosamente", 200);
    } catch (error) {
        return errorResponse(res, error, "Error al obtener los roles", 500);
    }
};

const getById = async (req, res) => {
    try {
        const role = await roleService.getById(req.params.id);
        if (!role) {
            return errorResponse(res, null, "Rol no encontrado", 404);
        }
        return successResponse(res, role, "Rol obtenido exitosamente", 200);
    } catch (error) {
        return errorResponse(res, error, "Error al obtener el rol", 500);
    }
};

const update = async (req, res) => {
    try {
        const role = await roleService.update(req.params.id, req.body);
        return successResponse(res, role, "Rol actualizado exitosamente", 200);
    } catch (error) {
        return errorResponse(res, error, "Error al actualizar el rol", 500);
    }
};

const remove = async (req, res) => {
    try {
        await roleService.remove(req.params.id);
        return successResponse(res, null, "Rol eliminado exitosamente", 200);
    } catch (error) {
        return errorResponse(res, error, "Error al eliminar el rol", 500);
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
};