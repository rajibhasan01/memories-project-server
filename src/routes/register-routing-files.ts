import express from "express";
import invoiceRoute from "./invoice/route.invoice";
import loginRoute from "./login/route.login";
import homeRouter from "./route.home";

const registeredRouters = express.Router();

registeredRouters.use("/", homeRouter);
registeredRouters.use("/invoice/", invoiceRoute);
registeredRouters.use("/login/", loginRoute);


export = registeredRouters ;


