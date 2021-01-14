import LoginScreen from './components/login-screen.js';
import HomeScreen from './components/home-screen';
import Error404Screen from './components/error404-screen';
import HeaderComponent from './components/header';
import AdminScreen from './components/admin-screen';

import './styles/site.css';

const rootEle = document.querySelector("#root");

const routes = {
  '/': HomeScreen,
  '/signin': LoginScreen,
  '/admin': AdminScreen
}

const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    verb: request[3]
  }
}

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl = (request.resource ? `/${request.resource}` : '/') +
            (request.id ? '/:id' : '') +
            (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl]: Error404Screen;

  const headerElem = document.querySelector("#header-container");
  headerElem.innerHTML = await HeaderComponent.render();

  rootEle.innerHTML = await screen.render();
  if (screen.after_render) {
    screen.after_render();
  }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);



