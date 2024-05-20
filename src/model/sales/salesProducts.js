import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import SalesModel from "./index.js";

const SaleProductModel = sequelize.define(
  "SaleProduct",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productRate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },

     SaleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SalesModel,
        key: 'id',
      },
    },
  },
  {}
);

SalesModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(SalesModel);


export default SaleProductModel;
