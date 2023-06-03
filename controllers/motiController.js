const uuid = require("uuid");
const path = require("path");
const {Moti} = require("../models/models");
const ApiError = require("../error/ApiError");

class MotiController {
  async create(req, res, next) {
    try {
      const {name, description, calories, weight, rating, price, discount} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const moti = await Moti.create({name, img: fileName, description, calories, weight, rating, price, discount});
      return res.json(moti);
    } catch(e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const motis = await Moti.findAll();
    return res.json(motis);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const moti = await Moti.findOne({
      where: {id}
    });

    return res.json(moti);
  }
}

module.exports = new MotiController();
