const { sales, products, users } = require('../database/models');

const getAll = async () => {
  const allSalesProducts = await sales.findAll({ include: [
    { model: users, as: 'seller', attributes: { exclude: ['password'] } },
    { model: products, as: 'products', attributes: { exclude: ['urlImage'] } },
  ] });

  return allSalesProducts;
};

module.exports = {
  getAll,
};
