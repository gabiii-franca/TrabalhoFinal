const express = require('express');
const routes = express.Router();
const CommerceControllers = require("./controllers/CommerceControllers");
const UserControllers = require("./controllers/UserControllers");
const SessionControllers = require("./controllers/SessionControllers");
const authMiddleware = require("./middlewares/auth");
//const adminMiddleware = require("./middlewares/admin");

routes.use(authMiddleware);

routes.post("/user", UserControllers.store);
routes.get("/user", UserControllers.list);

routes.post("/sessions", SessionControllers.store);
routes.get("/sessions", SessionControllers.list);

routes.post("/commerce", CommerceControllers.store);
routes.get("/commerce", CommerceControllers.list);

routes.get("teste", (req, res) => res.json({ ok: true }));

module.exports = routes;