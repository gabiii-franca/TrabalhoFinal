const Usuario = require("../models/User");
module.exports = async (req, res, next) => {
  //  find em Usuario pelo id, guardar em uma const

  const usuario = await User.findById(req.userId)
  //  verificar se o usuario é administrador
  if (User.isadmin) {
    return next();
  }
  return res.status(401).json({ error: "Unathorized user" });
};