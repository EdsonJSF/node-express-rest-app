const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // DB Connection
    this.dbConnections();

    // Middlewares
    this.middlewares();

    // Endpoints Paths (Routes)
    this.paths = {
      auth: "/api/auth",
      categories: "/api/categories",
      users: "/api/users",
    };

    // Routes
    this.routes();
  }

  async dbConnections() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Read parse
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth.route"));
    this.app.use(this.paths.categories, require("../routes/categories.route"));
    this.app.use(this.paths.users, require("../routes/users.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at:`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
