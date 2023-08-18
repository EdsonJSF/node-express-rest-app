const path = require("path");
const { response } = require("express");

const loadFile = (req, res = response) => {
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

  const { file } = req.files;

  const uploadPath = path.join(__dirname, "../uploads/", file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).json({
        msg: "Internal error",
        errors: err,
      });
    }

    res.json({
      msg: "File uploaded to " + uploadPath,
      data: file,
    });
  });
};

module.exports = {
  loadFile,
};
