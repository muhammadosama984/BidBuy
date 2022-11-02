import { jsonGenerate } from "../utils/helpers.js";
import Jwt from "jsonwebtoken";
import { statusCode } from "../utils/constant.js";

const AuthMiddleware = (req, res, next) => {
  if (req.headers["auth"] === undefined) {
    return res.json(jsonGenerate(statusCode.AUTH_ERROR, "Excess denied"));
  }

  const token = req.headers["auth"];

  try {
    const decoded = Jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    console.log(decoded);

    req.userId = decoded.userId;

    return next();
  } catch (error) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Invalid token")
    );
  }
};

export default AuthMiddleware;