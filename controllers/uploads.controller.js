const { response } = require("express");
const { uploadFile } = require("../helpers");

const loadFile = async (req, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      msg: "No files were uploaded.",
      errors: [],
    });
  }

  if (!req.files.file) {
    return res.status(400).json({
      msg: "You have some request errors",
      errors: [
        {
          type: "field",
          msg: "Invalid file",
          path: "file",
          location: "body",
        },
      ],
    });
  }

  const fileName = await uploadFile(req.files);

  res.json({ msg: fileName });
};

module.exports = {
  loadFile,
};
