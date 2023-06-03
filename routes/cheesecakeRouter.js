const Router = require("express");
const router = new Router();
const cheesecakeController = require("../controllers/cheesecakeController");

router.post("/", cheesecakeController.create);
router.get("/", cheesecakeController.getAll);
router.get("/:id", cheesecakeController.getOne);

module.exports = router;
