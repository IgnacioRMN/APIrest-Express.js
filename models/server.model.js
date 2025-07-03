import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/database.js";
import cors from "cors";
import userRoutes from "../routes/user.routes.js";
import productRoutes from "../routes/product.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server corriendo en puerto ${PORT}`));
