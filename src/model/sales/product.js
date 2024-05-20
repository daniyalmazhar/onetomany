import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import SaleProductModel from "./index.js";

const productModel = sequelize.define(
  "Product",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productRate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

  },
  {}
);

productModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(productModel);

export default productModel;
