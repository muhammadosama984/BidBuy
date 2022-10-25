import express from "express";
import { deleteProfile } from "../controllers/deleteprofile.controller.js";
import { getuser } from "../controllers/GetProfile.controller.js";
import { Login } from "../controllers/LogIn.controller.js";
import { AddProduct } from "../controllers/Product/AddProduct.controller.js";
import deleteProduct from "../controllers/Product/deleteProduct.controller.js";
import Register from "../controllers/Register.controller.js";
import { updateProfile } from "../controllers/updateProfile.controller.js";
import { addProductSchema } from "../validationSchema/AddProductSchema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);
apiProtected.get("/getprofile", getuser);
apiProtected.post("/updateprofile", updateProfile);
apiProtected.post("/deleteprofile", deleteProfile);
apiProtected.post("/addproduct", addProductSchema, AddProduct);
apiProtected.post("/deleteproduct", deleteProduct);
