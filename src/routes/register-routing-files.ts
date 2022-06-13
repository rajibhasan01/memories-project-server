import express from "express";
import loginRoute from "./login/route.login";
import homeRouter from "./route.home";

const registeredRouters = express.Router();

registeredRouters.use("/", homeRouter);
registeredRouters.use("/login/", loginRoute);


export = registeredRouters ;


