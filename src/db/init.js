import productModel from "../model/sales/product.js";
import SalesModel from "../model/sales/index.js";
import SaleProductModel from "../model/sales/salesProducts.js";
import StudentModel from "../model/student/index.js";
import sequelize from "./config.js";

const syncDB = async () => {
  //   await sequelize.sync({ alter: true, force: false });
  await productModel.sync({ alter: true, force: false });
  await SalesModel.sync({ alter: true, force: false });
  await SaleProductModel.sync({ alter: true, force: false });
  await StudentModel.sync({ alter: true, force: false });

};

export default syncDB;
