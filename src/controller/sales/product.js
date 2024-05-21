import productModel from "../../model/sales/product.js";
// import SalesModel from "../../model/sales/index.js";
// import SaleProductModel from "../../model/sales/salesproduct.js";

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
                include: [productModel],
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
            const newProduct = await productModel.create(req.body)

            res.status(200).json({ message: "Product created", newProduct });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error", error });
        }
    },



    update: (req, res) => {
        try {
          const { name } = req.params;
          const payload = req.body;
    
          const productIndex = products.findIndex((ele) => ele.name == name);
          if (productIndex == -1) {
            return res.status(404).json({ message: "No product with this name" });
          }
    
          if (payload.name) {
            students[productIndex].name = payload.name;
          }
    
          if (payload.class) {
            students[productIndex].class = payload.class;
          }
    
    
    
          res.status(200).json({ message: "Product Updated", products });
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      },
      delete: (req, res) => {
        try {
          const { name } = req.params;
    
          const productIndex = products.findIndex((ele) => ele.name == name);
          if (productIndex == -1) {
            return res.status(404).json({ message: "No product with this name" });
          }
          products.splice(productIndex, 1);
          res.status(200).json({ message: "Product Deleted" });
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      },
    
    };
export default productController;
