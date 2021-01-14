import {getCategories} from '../api';

const Header = {
  render: async () => {
    const categories = await getCategories();
    console.log("categories: ", categories);
    return `
      <nav>
        <a href="/#/">HOME</a>
        <a href="/#/signin">Login</a>
        ${categories.map(c => `
          <a href="/products/category/${c}">${c}</a>
        `).join(" ")
        }
        <a href="/#/admin">ADMIN</a>
      </nav>   
    `
  }
}

export default Header;