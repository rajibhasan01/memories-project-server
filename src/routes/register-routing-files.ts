import express from "express";
import loginRoute from "./login/route.login";
import postRoute from "./posts/route.posts";
import homeRouter from "./route.home";

const registeredRouters = express.Router();

registeredRouters.use("/", homeRouter);
registeredRouters.use("/post", postRoute);
registeredRouters.use("/login/", loginRoute);


export = registeredRouters ;


