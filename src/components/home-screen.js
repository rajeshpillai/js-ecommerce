
import {getProducts} from '../api'; // auto pickup index.js

// const products = [
//   {id: 1, title: "Product 1", category: "Fashion", image: "https://picsum.photos/200", price: 100},
//   {id: 2, title: "Product 2", category: "Fashion", image: "https://picsum.photos/200", price: 300},
//   {id: 3, title: "Product 3", category: "Electronics", image: "https://picsum.photos/200", price: 400},
// ]

let cart = {
  userId: 1,
  products: []
};

const HomeScreen = {
  after_render: () => {
    document.querySelector(".products")
      .addEventListener("click", (e) => {
        const result = e.target.classList.contains("add-to-cart");
        if (result) {
          const productId  = e.target.getAttribute("id");
          
          let existingCart = localStorage.getItem('js-cart');
          existingCart = existingCart ? JSON.parse(existingCart): {};  
          cart = existingCart;
          cart.date = new Date();
          cart.products = [...cart.products, productId];
          localStorage.setItem('js-cart', JSON.stringify(cart));
        }
      })
  },

  render: async () => {
    const products = await getProducts();
    console.log("PRODUCTS FROM API: ", products);
    return `
      <div class="products">
        ${
          products.map(product => `
            <div class="product" >
              <header>${product.title}</header>
              <div>
                <span>${product.category}</span>
                <span>Rs. ${product.price} </span>
              </div>
              <div class="product-image">
                <img src="${product.image}" />
              </div>
              <div>
                <button id="${product.id}" class="add-to-cart">Add to cart</button>
              </div>
            </div>
          `).join("")
        }
      </div>
    `;
  }
}
export default HomeScreen;