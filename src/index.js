import LoginScreen from './components/login-screen.js';

const rootEle = document.querySelector("#root");
rootEle.innerHTML = LoginScreen.render();

// Check if after_render method is defined
//    If yes, invoke after_render()
if (LoginScreen.after_render) {
  LoginScreen.after_render();
}