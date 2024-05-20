import productModel from "../../model/sales/product.js";
import SalesModel from "../../model/sales/index.js";
import SaleProductModel from "../../model/sales/salesproduct.js";

const productController = {
    getAll: async (req, res) => {
      try {
        const product = await productModel.findAll({
          order: [["createdAt", "DESC"]],
          limit: 5,
        });
  
        res.json({
          data: product,
        });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    },
    getSingle: async (req, res) => {
      try {
        const { id } = req.params;
  
        const product = await productModel.findByPk(id, {
          include: [productProductModel],
        });
  
        if (!product) {
          return res.status(404).json({ message: "No product with this name" });
        }
        res.status(200).json({ data: product });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
      }
    },
    
    create: async (req, res) => {
        try {
            const payload = req.body;
        
            console.log(payload, "payload");
        
            const product = new ProductModel();
            product.productName = payload.productName;
            product.productStock = payload.productStock;
            product.productRate = payload.productRate;
        
            await product.save();
        
            res.status(200).json({ message: "Product created", product });
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
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
  
        // students[studentIndex].name = payload.name
        //   ? payload.name
        //   : students[studentIndex].name;
        // students[studentIndex].class = payload.class
        //   ? payload.class
        //   : students[studentIndex].class;
  
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
    
  };
  
  export default productController;
  