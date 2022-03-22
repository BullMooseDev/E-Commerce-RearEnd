// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false
    },
    category_id: {
/*       foreignkey?
      references: {
        model: 'user',
        key: 'id'
      } */
    }

    // define columns
    /* id integer not null primarykey auto increment
    product_name string not null
    price decimal not null validates?
    stock integer not null default value 10? validates #?
    catagory id uses foriegnkey from catagory - integer  */
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
