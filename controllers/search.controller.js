const { response, request } = require("express");

const search = async (req = request, res = response) => {
  const { collection, term } = req.params;

  return res.json({
    msg: `Searching ${term} => ${collection}`,
    data: { collection, term },
  });
};

module.exports = {
  search,
};
