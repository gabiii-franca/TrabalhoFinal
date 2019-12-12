const Commerce = require('../models/Commerce');
module.exports = {
  async store(req, res) {
    const { name } = req.body;
    if (await Commerce.findOne({ name })) {
      return res.status(400).json({ error: "Comércio Existente" });
    }
    const commerce = await Commerce.create(req.body);
    return res.json(commerce);
  },

  async list(req, res) {
    const commerce = await Commerce.find({})
    return res.json(commerce);
  },
  async index(req, res) {
    const commerce = await Commerce.findOne({ name: req.params.name })
    if (!commerce) {
      return res.status(400).json({ error: "Não encontrado!" });
    }
    return res.json(commerce);

  },
  async update(req, res) {
    const commerce = await Commerces.findByIdAndUpdate(req.params.name, req.body, { new: true });
    return res.json(commerce);
  },
  async destroy(req, res) {
    await Commerces.deleteOne({ _name: req.params.name });
    return res.json({ message: "Comércio Excluído" });
  }

};