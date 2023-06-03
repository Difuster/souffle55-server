const {Feedback} = require("../models/models");
const ApiError = require("../error/ApiError");

class FeedbackController {
  async create(req, res, next) {
    try {
      const {name, text, cakeId} = req.body;
      const feedback = await Feedback.create({name, text, cakeId});
      return res.json(feedback);
    } catch(e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const feedbacks = await Feedback.findAll();
    return res.json(feedbacks);
  }
}

module.exports = new FeedbackController();
