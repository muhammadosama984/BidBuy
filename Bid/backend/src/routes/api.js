import express from "express";
import AddProduct from "../controllers/Product/AddProduct.controller.js";
import deleteProduct from "../controllers/Product/deleteProduct.controller.js";
import getAllProducts from "../controllers/Product/getAllProducts.controller.js";
import getSingleProduct from "../controllers/Product/getSingleProduct.controller.js";
import { deleteProfile } from "../controllers/User/deleteprofile.controller.js";
import { getuser } from "../controllers/User/GetProfile.controller.js";
import { Login } from "../controllers/User/LogIn.controller.js";
import myProducts from "../controllers/User/myPrdoucts.controller.js";
import Register from "../controllers/User/Register.controller.js";
import { updateProfile } from "../controllers/User/updateProfile.controller.js";
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
apiProtected.get("/getallproducts", getAllProducts);
apiProtected.get("/getsingleproduct", getSingleProduct);
apiProtected.get("/myproduct", myProducts);
