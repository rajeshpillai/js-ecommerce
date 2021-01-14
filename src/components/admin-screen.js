import {createProduct} from '../api';

// alias
const AdminScreen = {
  after_render: () => {
    document.querySelector("#product-form")
      .addEventListener("submit",  async (e) => {
        e.preventDefault();
        const productData = {
          title: document.querySelector("#title").value,
          price: document.querySelector("#price").value,
          description: document.querySelector("#description").value,
          category: document.querySelector("#category").value
        };

        const data = await createProduct(productData);

        if (data.error) {
          // Show some message
        } else {
          document.location.hash ="/";
        }
      });
  },
  render: () => {
    return `<div>
      <h4>Product Maintenance</h4>
      <form id="product-form">
        <div>
          <input id="title" type="text" placeholder="product title" />
        </div>
        <div>
          <input id="price" type="number" placeholder="price" />
        </div>
        <div>
          <textarea id="description" rows="10" cols="60" placeholder="description"></textarea>
        </div>
        <div>
          <input id="category" type="text" placeholder="category" />
        </div>
        <button type="submit">Create New Product </button>
      </form>
    </div>`
  }
}
export default AdminScreen;