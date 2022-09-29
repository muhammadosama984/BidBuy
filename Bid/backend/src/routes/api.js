import express from "express";
import { getuser } from "../controllers/GetProfile.controller.js";
import { Login } from "../controllers/LogIn.controller.js";
import Register from "../controllers/Register.controller.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);
apiProtected.get("/getprofile", getuser);
