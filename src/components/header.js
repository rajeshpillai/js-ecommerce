import {getCategories} from '../api';

const Header = {
  render: async () => {
    const categories = await getCategories();
    console.log("categories: ", categories);

    let cartItems = localStorage.getItem('js-cart');
    cartItems = cartItems ? JSON.parse(cartItems): {};  

    return `
      <nav>
        <a href="/#/">HOME</a>
        <a href="/#/signin">Login</a>
        ${categories.map(c => `
          <a href="/products/category/${c}">${c}</a>
        `).join(" ")
        }
        <a href="/#/admin">ADMIN</a>
        <a href="#">(cart ${cartItems.products.length})</a>
      </nav>   
    `
  }
}

export default Header;