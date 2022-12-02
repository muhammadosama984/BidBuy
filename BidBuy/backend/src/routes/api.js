import express from "express";
import cancelBiddings from "../controllers/Biddings/cancelBidding.controller.js";
import PostForm from "../controllers/Forms/postForm.js";
import GetForm from "../controllers/Forms/getForm.js";
import getAllBiddings from "../controllers/Biddings/getAllBiddings.controller.js";
import getSingleBidding from "../controllers/Biddings/getSingleBidding.controller.js";
import startBidding from "../controllers/Biddings/startBidding.controller.js";
import updateBidding from "../controllers/Biddings/updateBidding.controller.js";
import getAllOrdersCompleted from "../controllers/Orders/getAllOrdersCompleted.controller.js";
import getSingleorder from "../controllers/Orders/getSingleOrder.controller.js";
import postOrderCompleted from "../controllers/Orders/postOrderCompleted.controller.js";
import AddProduct from "../controllers/Product/AddProduct.controller.js";
import deleteProduct from "../controllers/Product/deleteProduct.controller.js";
import getAllProducts from "../controllers/Product/getAllProducts.controller.js";
import getBiddingID from "../controllers/Product/getBiddingID.controller.js";
import getSingleProduct from "../controllers/Product/getSingleProduct.controller.js";
import AddMyFav from "../controllers/User/AddtoMyFav.controller.js";
import { deleteProfile } from "../controllers/User/deleteprofile.controller.js";
import myOrders from "../controllers/User/getMyOrders.controllers.js";
import { getuser } from "../controllers/User/GetProfile.controller.js";
import getUserRole from "../controllers/User/getUserRole.controller.js";
import { Login } from "../controllers/User/LogIn.controller.js";
import myFavourites from "../controllers/User/myFavourites.controller.js";
import myProducts from "../controllers/User/myPrdoucts.controller.js";
import Register from "../controllers/User/Register.controller.js";
import { updateProfile } from "../controllers/User/updateProfile.controller.js";
import { addProductSchema } from "../validationSchema/AddProductSchema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import updateProductPrice from "../controllers/Product/UpdateProductPrice.controller.js";

export const apiRoute = express.Router();
export const apiProtected = express.Router();

//users
apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);
apiProtected.get("/getprofile", getuser);
apiProtected.post("/updateprofile", updateProfile);
apiProtected.post("/deleteprofile", deleteProfile);
apiProtected.get("/myfav", myFavourites);
apiProtected.post("/addmyfav", AddMyFav);
apiProtected.get("/getuserrole", getUserRole);

//Products
apiProtected.post("/addproduct", addProductSchema, AddProduct);
apiProtected.post("/deleteproduct", deleteProduct);
apiRoute.get("/getallproducts", getAllProducts);
apiProtected.get("/getsingleproduct", getSingleProduct);
apiProtected.get("/myproduct", myProducts);
apiProtected.get("/getbiddingid", getBiddingID);
apiProtected.post("/updateproductprice", updateProductPrice);

// biddings
apiProtected.post("/startbidding", startBidding);
apiProtected.post("/updatebidding", updateBidding);
apiProtected.post("/cancelbidding", cancelBiddings);
apiProtected.get("/getallbiddings", getAllBiddings);
apiProtected.get("/getsinglebidding", getSingleBidding);

// orders
apiProtected.post("/ordercompleted", postOrderCompleted);
apiProtected.get("/getsingleorder", getSingleorder);
apiProtected.get("/getallordercompleted", getAllOrdersCompleted);
apiProtected.get("/myorder", myOrders);

//forms

apiRoute.post("/postForm", PostForm);
apiRoute.get("/getForm", GetForm);
