import LoginScreen from './components/login-screen.js';
import HomeScreen from './components/home-screen';

import './styles/site.css';

const rootEle = document.querySelector("#root");

const router = async () => {
  rootEle.innerHTML = await HomeScreen.render();
  // Check if after_render method is defined
  //    If yes, invoke after_render()
  if (HomeScreen.after_render) {
    HomeScreen.after_render();
  }
}
router();