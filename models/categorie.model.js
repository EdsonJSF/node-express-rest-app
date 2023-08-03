const { Schema, model } = require("mongoose");

const CategorieSchema = Schema({
  name:  { type: String, require: true, unique: true },
  state: { type: Boolean, default: true, require: true },
  user:  { type: Schema.Types.ObjectId, ref: "User", require: true },
});

CategorieSchema.methods.toJSON = function () {
  const { __v, _id, ...categorie } = this.toObject();
  categorie.categorie_id = _id;
  return categorie;
};

module.exports = model("Categorie", CategorieSchema);
