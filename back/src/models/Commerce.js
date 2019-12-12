const { Schema, model } = require("mongoose");

const CommerceSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },

    rua: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    bairro: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Commerce", CommerceSchema);