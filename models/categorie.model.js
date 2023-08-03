const { Schema, model } = require("mongoose");

const CategorieSchema = Schema({
  name:  { type: String, require: true },
  state: { type: Boolean, default: true, require: true },
  user:  { type: Schema.Types.ObjectId, ref: "User", require: true },
});

module.exports = model("Categorie", CategorieSchema);
