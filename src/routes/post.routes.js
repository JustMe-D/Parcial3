const router = require("express").Router();
const controller = require("../controllers/post.controller");
const multer = require("multer");
const storage = require("../middleware/post-image.multer");

const uploader = multer({ storage });

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

router.post(
    "/images/posts/:id",
    uploader.single("image"),
    controller.uploadImage
);

module.exports = router;