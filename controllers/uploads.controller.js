const { response } = require("express");

const loadFile = (req, res = response) => {
  res.json ({
    msg: "Load file",
    data: ""
  })
}

module.exports = {
  loadFile
}