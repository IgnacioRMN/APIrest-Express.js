import asyncHandler from "express-async-handler";
import Product from "../models/product.js";

// Obtener todos los productos
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate("category", "name");
  res.json(products);
});

// Obtener producto por ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    "category",
    "name"
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Crear producto (solo admin)
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, image } = req.body;
  const product = new Product({ name, description, price, category, image });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Actualizar producto
const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, image } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.image = image || product.image;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

// Eliminar producto
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Producto eliminado" });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
