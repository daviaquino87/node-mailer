import express from "express";
import mailRoutes from "./maill.routes";
const routes = express();

routes.use(mailRoutes);

export default routes;
