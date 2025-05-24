const router = require("express").Router();
const controller = require("../controllers/follow.controller");

router.get("/", controller.getAll);
router.get("/:follower_id/:following_id", controller.getById);
router.post("/", controller.create);
router.put("/:follower_id/:following_id", controller.update);
router.delete("/:follower_id/:following_id", controller.remove);

module.exports = router;