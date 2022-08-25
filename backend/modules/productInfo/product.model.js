exports.getProductInfo = (client, filter) => {
  return client.db("Shein").collection("product").find(filter).toArray();
};

exports.addProductInfo = (client, filter) => {
  return client.db("bv").collection("product").insert(filter);
};
