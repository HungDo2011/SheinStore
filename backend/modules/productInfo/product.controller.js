const { getProductInfo } = require("./product.model");

exports.getProduct = (client, filter) => {
  return getProductInfo(client, filter);
};
