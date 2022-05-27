import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import { ConfigService } from "../../services/utility/configService";
import { generateToken } from "../../services/utility/functions";
import "./route.auth";
dotenv.config();

const config = ConfigService.getInstance().getConfig();
const loginRoute = express.Router();
loginRoute.use(passport.initialize());
loginRoute.use(cors());

loginRoute.get("/", (req, res) => {
  res.send("<a href=/login/auth/google> Login with Google </a>");
});

loginRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

loginRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: config.google.failUrl,
    session: false,
  }),
  (req, res) => {
    generateToken(req.user).then((token: any) => {
      res.redirect(config.google.successUrl + "/?valid=" + token);
    });
  }
);

export = loginRoute;
