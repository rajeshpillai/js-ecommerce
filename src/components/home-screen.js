
import {getProducts} from '../api'; // auto pickup index.js

// const products = [
//   {id: 1, title: "Product 1", category: "Fashion", image: "https://picsum.photos/200", price: 100},
//   {id: 2, title: "Product 2", category: "Fashion", image: "https://picsum.photos/200", price: 300},
//   {id: 3, title: "Product 3", category: "Electronics", image: "https://picsum.photos/200", price: 400},
// ]

const HomeScreen = {
  render: async () => {
    const products = await getProducts();
    console.log("PRODUCTS FROM API: ", products);
    return `
      <div class="products">
        ${
          products.map(product => `
            <div class="product">
              <header>${product.title}</header>
              <div>
                <span>${product.category}</span>
                <span>Rs. ${product.price} </span>
              </div>
              <div class="product-image">
                <img src="${product.image}" />
              </div>
            </div>
          `).join("")
        }
      </div>
    `;
  }
}
export default HomeScreen;