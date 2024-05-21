import { Router } from "express";
import productController from "../../controller/sales/product.js";

const productRouter = Router();
productRouter.get("/products", productController.getAll);

productRouter.post("/products", productController.create);

productRouter.get("/products/:id", productController.getSingle);

productRouter.put("/products/:id", productController.update);

productRouter.delete("/products/:id", productController.delete);

export default productRouter;
