# 🛍️ API REST de Productos (E-commerce)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Una API RESTful construida con **Node.js**, **Express.js** y **MongoDB**, pensada como base para proyectos de e-commerce. Incluye autenticación con JWT, gestión de usuarios con roles, y operaciones CRUD de productos.

---

## 🚀 Características

- ✅ Registro y login de usuarios con autenticación JWT.
- 🔐 Roles de **usuario** y **administrador**.
- 🛠️ CRUD completo de productos (solo el admin puede crear, actualizar o eliminar).
- ⚠️ Validación de entradas y manejo centralizado de errores.
- 💾 Conexión a base de datos **MongoDB**.

---

## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/IgnacioRMN/APIrest-Express.js.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con las variables necesarias:
   ```env
   MONGODB_CNN=
   JWT_SECRET=
   PORT=5000
   ```

---

## 🧪 Uso

Iniciar el servidor:

- En modo desarrollo:
  ```bash
  npm run dev
  ```

- En modo producción:
  ```bash
  npm start
  ```

Accede a la API en: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Autenticación

- Los endpoints protegidos requieren token JWT en el encabezado:
  ```
  Authorization: Bearer <token>
  ```

---

## 📦 Endpoints

### 👤 Usuarios

| Método | Endpoint              | Descripción         | Autenticación |
|--------|-----------------------|---------------------|--------------|
| POST   | `/api/users/register` | Registro de usuario | ❌ No        |
| POST   | `/api/users/login`    | Login de usuario    | ❌ No        |

#### 📍 Ejemplo de Registro

```json
POST /api/users/register
{
  "name": "Usuario",
  "email": "usuario@gmail.com",
  "password": "123456"
}
```

#### 📍 Ejemplo de Login

```json
POST /api/users/login
{
  "email": "usuario@gmail.com",
  "password": "123456"
}
```

---

### 🛒 Productos

| Método | Endpoint             | Descripción                | Autenticación |
|--------|----------------------|----------------------------|--------------|
| GET    | `/api/products`      | Listar todos los productos | ❌ No        |
| GET    | `/api/products/:id`  | Obtener producto por ID    | ❌ No        |
| POST   | `/api/products`      | Crear nuevo producto       | ✅ Admin     |
| PUT    | `/api/products/:id`  | Actualizar producto        | ✅ Admin     |
| DELETE | `/api/products/:id`  | Eliminar producto          | ✅ Admin     |

#### 📍 Ejemplo de creación de producto (Admin)

```json
POST /api/products
Headers: Authorization: Bearer <token>
{
  "name": "Producto 1",
  "description": "Descripción",
  "price": 100,
  "stock": 10,
  "category": "<id_categoria>",
  "image": "url_imagen"
}
```

---

## 📦 Dependencias

| Paquete                | Descripción                        |
|------------------------|----------------------------------|
| `express`              | Framework web para Node.js        |
| `mongoose`             | ODM para MongoDB                  |
| `dotenv`               | Variables de entorno              |
| `cors`                 | Middleware de CORS               |
| `bcryptjs`             | Encriptación de contraseñas       |
| `jsonwebtoken`         | Tokens JWT                      |
| `express-async-handler`| Manejo de errores async           |
| `express-validator`    | Validación de inputs             |
| `nodemon` (dev)        | Reinicio automático del servidor |

---

## ⚠️ Nota Importante

Aunque esta es una primera versión funcional, el proyecto está en desarrollo activo y está sujeto a futuras mejoras y actualizaciones, como manejo de errores, escalabilidad y seguridad, entre otras.


## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.
