const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "get API",
      });
    });

    this.app.post("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "post API",
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "put API",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "delete API",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at:`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
