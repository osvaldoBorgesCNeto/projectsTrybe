const SalesProducts = require('../services/SalesProducts');

const getAll = async (_req, res) => {
  const getAllSalesProducts = await SalesProducts.getAll();

  return res.status(200).json(getAllSalesProducts);
};

module.exports = {
  getAll,
};
