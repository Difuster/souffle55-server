const Router = require("express");
const router = new Router();
const cheesecakeRouter = require("./cheesecakeRouter");
const motiRouter = require("./motiRouter");
const cupcakeRouter = require("./cupcakeRouter");
const feedbackRouter = require("./feedbackRouter");
const adminRouter = require("./adminRouter");

router.use("/cheesecake", cheesecakeRouter);
router.use("/moti", motiRouter);
router.use("/cupcake", cupcakeRouter);
router.use("/feedback", feedbackRouter);
router.use("/admin", adminRouter);

module.exports = router;
