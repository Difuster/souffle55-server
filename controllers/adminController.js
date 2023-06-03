const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Admin} = require("../models/models");

const generateJWT = (id, name) => {
  return jwt.sign({id, name}, process.env.SECRET_KEY, {expiresIn: "8h"});
}

class AdminController {
  async registration(req, res, next) {
    const {name, password} = req.body;
    if(!name || !password) {
      return next(ApiError.badRequest("Заполните все поля"));
    }

    const candidate = await Admin.findOne({where: {name}});
    if(candidate) {
      return next(ApiError.badRequest("Такой пользователь уже существует"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const admin = Admin.create({name, password: hashPassword});
    const token = generateJWT(admin.id, name);
    return res.json(token);
  }

  async login(req, res, next) {
    const {name, password} = req.body;
    if(!name || !password) {
      return next(ApiError.badRequest("Заполните все поля"));
    }

    const admin = await Admin.findOne({where: {name}});
    if(!admin) {
      return next(ApiError.internal("Пользователь не найден"));
    }

    let comparePassword = bcrypt.compareSync(password, admin.password);
    if(!comparePassword) {
      return next(ApiError.internal("Неверный пароль"));
    }

    const token = generateJWT(admin.id, name);
    return res.json(token);
  }

  async check(req, res, next) {
    const token = generateJWT(req.admin.id, req.password);

    return res.json({token});
  }
}

module.exports = new AdminController();
