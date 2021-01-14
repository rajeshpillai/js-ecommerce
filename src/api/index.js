export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const product = response.json();
    return product;
  }catch(e) {
    console.log("ERROR: ", e);
  }
}