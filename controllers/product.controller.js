import asyncHandler from "express-async-handler";
import Product from "../models/product.js";

// Obtener todos los productos
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate("category", "name");
  res.json(products);
});

// Crear producto (solo admin)
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, image } = req.body;
  const product = new Product({ name, description, price, category, image });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getProducts, createProduct };
