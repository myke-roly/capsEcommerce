export const useFetchById = (products, ids) => {
  // useFetch()
  let filterProducts = [];

  if (Object.entries(ids).length !== 0) {
    JSON.parse(ids).map((id) => {
      products.filter(
        (product) => id.id === product._id && filterProducts.push(product)
      );
    });
  }
  return { filterProducts };
};
