export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const product = response.json();
    return product;
  }catch(e) {
    console.log("ERROR: ", e);
  }
}

export const getCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await response.json();
    return categories;
  } catch (e) {
    // DO something with the error later (may be log it to server)
    console.log("ERROR: ", e);
  }
}