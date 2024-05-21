import SalesModel from "../../model/sales/index.js";
import productModel from "../../model/sales/product.js";
import SaleProductModel from "../../model/sales/salesProducts.js";


const SalesController = {
  getAll: async (req, res) => {
    try {
      const sales = await SalesModel.findAll({
        order: [["createdAt", "DESC"]],
        limit: 5,
      });

      res.json({
        data: sales,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;

      const sale = await SalesModel.findByPk(id, {
        include: [{
          model :SaleProductModel, 
          include: [productModel]
        }
        ]
      });

      if (!sale) {
        return res.status(404).json({ message: "No sale with this name" });
      }
      res.status(200).json({ data: sale });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error });
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;

      console.log(payload, "payload");

      const sale = new SalesModel();
      // sale.firstName = payload.firstName;
      sale.totalAmount = 1;

      await sale.save();

      const salesProduct = payload.salesProduct.map((ele) => {
        return {
          ...ele,
          SaleId: sale.id,
        };
      });

      await SaleProductModel.bulkCreate(salesProduct);

      res.status(200).json({ message: "sale created", sale });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error",error });
    }
  },
  update: (req, res) => {
    try {
      const { name } = req.params;
      const payload = req.body;

      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "No student with this name" });
      }

      if (payload.name) {
        students[studentIndex].name = payload.name;
      }

      if (payload.class) {
        students[studentIndex].class = payload.class;
      }


      res.status(200).json({ message: "Student Updated", students });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  delete: (req, res) => {
    try {
      const { name } = req.params;

      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "No student with this name" });
      }
      students.splice(studentIndex, 1);
      res.status(200).json({ message: "Student Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getSaleProducts: async (req, res) => {
    try {
      const { id } = req.params;

      const saleProducts = await SaleProductModel.findAll({
        where: { SaleId: id },
      });

      if (saleProducts.length === 0) {
        return res.status(404).json({ message: "No products found for this sale" });
      }

      res.status(200).json({ data: saleProducts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error", error });
    }
  },
};

export default SalesController;
