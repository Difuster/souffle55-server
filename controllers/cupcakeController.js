const uuid = require("uuid");
const path = require("path");
const {Cupcake} = require("../models/models");
const ApiError = require("../error/ApiError");

class CupcakeController {
  async create(req, res, next) {
    try {
      const {name, description, calories, weight, rating, price, discount} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const cupcake = await Cupcake.create({name, img: fileName, description, calories, weight, rating, price, discount});
      return res.json(cupcake);
    } catch(e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const cupcakes = await Cupcake.findAll();
    return res.json(cupcakes);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const cupcake = await Cupcake.findOne({
      where: {id}
    });

    return res.json(cupcake);
  }
}

module.exports = new CupcakeController();
