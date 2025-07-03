import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "../config/database.js";
import userRoutes from "../routes/user.routes.js";
import productRoutes from "../routes/product.routes.js";

dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.userPath = "/api/users";
    this.productPath = "/api/products";

    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    await connectDB();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.userPath, userRoutes);
    this.app.use(this.productPath, productRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export default Server;
