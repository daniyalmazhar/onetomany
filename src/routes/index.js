import classRoutes from "./class/index.js";
import studentRouter from "./student/index.js";
import teacherRoutes from "./teacher/index.js";

const allRoutes = [studentRouter, teacherRoutes, classRoutes];

export default allRoutes;
