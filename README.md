# APIrest-Express.js

API REST básica de productos construida con Node.js, Express.js y MongoDB. Ideal como base para un proyecto de ecommerce, con autenticación JWT, gestión de usuarios y productos, y roles de administrador.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [Usuarios](#usuarios)
  - [Productos](#productos)
- [Dependencias](#dependencias)
- [Licencia](#licencia)

---

## Características

- Registro y login de usuarios con JWT.
- Roles de usuario y administrador.
- CRUD de productos (solo admin puede crear, actualizar y eliminar).
- Validación y manejo de errores.
- Base de datos MongoDB.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/IgnacioRMN/APIrest-Express.js.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz con el siguiente contenido:
   ```
   MONGODB_CNN=tu_cadena_de_conexion_mongodb
   JWT_SECRET=tu_secreto_jwt
   PORT=5000
   ```

## Configuración

- Asegúrate de tener una base de datos MongoDB disponible.
- Modifica las variables de entorno según tu entorno.

## Uso

- Inicia el servidor en modo desarrollo:
  ```bash
  npm run dev
  ```
- O en modo producción:
  ```bash
  npm start
  ```
- El servidor correrá por defecto en `http://localhost:5000/`

---

## Endpoints

### Usuarios

| Método | Endpoint              | Descripción         | Autenticación |
| ------ | --------------------- | ------------------- | ------------- |
| POST   | `/api/users/register` | Registro de usuario | No            |
| POST   | `/api/users/login`    | Login de usuario    | No            |

#### Ejemplo de registro

```json
POST /api/users/register
{
  "name": "Juan",
  "email": "juan@mail.com",
  "password": "123456"
}
```

#### Ejemplo de login

```json
POST /api/users/login
{
  "email": "juan@mail.com",
  "password": "123456"
}
```

---

### Productos

| Método | Endpoint            | Descripción                | Autenticación |
| ------ | ------------------- | -------------------------- | ------------- |
| GET    | `/api/products`     | Listar todos los productos | No            |
| GET    | `/api/products/:id` | Obtener producto por ID    | No            |
| POST   | `/api/products`     | Crear producto             | Admin (JWT)   |
| PUT    | `/api/products/:id` | Actualizar producto        | Admin (JWT)   |
| DELETE | `/api/products/:id` | Eliminar producto          | Admin (JWT)   |

#### Ejemplo de creación de producto (requiere token de admin)

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

## Dependencias

- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken
- express-async-handler
- express-validator
- nodemon (dev)

## Licencia

MIT
