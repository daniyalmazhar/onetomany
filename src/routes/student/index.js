import { Router } from "express";
import StudentController from "../../controller/student/index.js";

const studentRouter = Router();
studentRouter.get("/students", StudentController.getAll);

studentRouter.post("/student", StudentController.create);

studentRouter.get("/student/:name", StudentController.getSingle);

studentRouter.put("/student/:name", StudentController.update);

studentRouter.delete("/student/:name", StudentController.delete);

export default studentRouter;
