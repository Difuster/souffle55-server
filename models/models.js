const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Admin = sequelize.define("admin", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false}
});

const Cheesecake = sequelize.define("cheesecake", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  img: {type: DataTypes.STRING, unique: true, allowNull: false},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  calories: {type: DataTypes.INTEGER, allowNull: false},
  weight: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  discount: {type: DataTypes.INTEGER}
});

const Moti = sequelize.define("moti", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  img: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  calories: {type: DataTypes.INTEGER, allowNull: false},
  weight: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  discount: {type: DataTypes.INTEGER}
});

const Cupcake = sequelize.define("cupcake", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  img: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
  calories: {type: DataTypes.INTEGER, allowNull: false},
  weight: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  discount: {type: DataTypes.INTEGER}
});

const Feedback = sequelize.define("feedback", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  text: {type: DataTypes.STRING, allowNull: false},
  cakeId: {type: DataTypes.INTEGER, allowNull: false}
});

module.exports = {
  Admin, Cheesecake, Moti, Cupcake, Feedback
}
