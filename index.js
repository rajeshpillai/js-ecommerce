import LoginScreen from './components/login-screen.js';

const rootEle = document.querySelector("#root");
rootEle.innerHTML = LoginScreen.render();
if (LoginScreen.after_render) {
  LoginScreen.after_render();
}