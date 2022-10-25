import { check } from "express-validator";

export const addProductSchema = [
  check("name").trim().isAlpha().withMessage("Name should be alphabets only"),

  check("description", "description is required")
    .exists()
    .trim()
    .isLength({ min: 6, max: 100 }),

  check("price", "price is required").exists().trim(),
];
