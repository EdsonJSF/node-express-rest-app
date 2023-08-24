const { response, request } = require("express");
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

  uploadFile(req.files)
    .then((resp) => {
      const { file } = req.files;
      return res.json({ msg: resp, data: file });
    })
    .catch((resp) => {
      return res.status(400).json({ msg: resp });
    });
};

const updateFile = async (req = request, res = response) => {
  const { collection, id } = req.params;

  res.json({
    msg: "",
    data: "",collection, id
  });
};

module.exports = {
  loadFile,
  updateFile,
};
