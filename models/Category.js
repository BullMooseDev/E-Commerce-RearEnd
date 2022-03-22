const { Model, DataTypes, INTEGER } = require('sequelize');
const { NOT } = require('sequelize/types/lib/deferrable');
const { not } = require('sequelize/types/lib/operators');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columnS

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    catagory_name: {
      type: DataTypes.STRING,
      allowNull: false
    }

    /* id integer not null primarykey auto increment
    catagory_name string not null */
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
