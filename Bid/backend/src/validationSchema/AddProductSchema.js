import { check } from "express-validator";

export const addProductSchema = [
  check("name").trim().isAlpha().withMessage("Name should be alphabets only"),

  check("description", "description is required")
    .exists()
    .isAlphanumeric()
    .withMessage("username should be alphaNumeric only")
    .trim()
    .isLength({ min: 6, max: 100 }),

  check("price", "price is required")
    .exists()
    .isLength({ min: 6, max: 100 })
    .trim(),
];
