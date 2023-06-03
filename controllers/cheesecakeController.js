const uuid = require("uuid");
const path = require("path");
const {Cheesecake} = require("../models/models");
const ApiError = require("../error/ApiError");

class CheesecakeController {
  async create(req, res, next) {
    try {
      const {name, description, calories, weight, rating, price, discount} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const cheesecake = await Cheesecake.create({name, img: fileName, description, calories, weight, rating, price, discount});
      return res.json(cheesecake);
    } catch(e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const cheesecakes = await Cheesecake.findAll();
    return res.json(cheesecakes);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const cheesecake = await Cheesecake.findOne({
      where: {id}
    });

    return res.json(cheesecake);
  }
}

module.exports = new CheesecakeController();
