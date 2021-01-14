import LoginScreen from './components/login-screen.js';
import HomeScreen from './components/home-screen';
import Error404Screen from './components/error404-screen';

import './styles/site.css';

const rootEle = document.querySelector("#root");

const routes = {
  '/': HomeScreen,
  '/signin': LoginScreen,
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
  const parseUrl = (request.resource? `/${request.resource}` : '/') +
            (request.id ? '/:id' : '') +
            (request.verb ? `/${request.verb}` : '');
   //alert(parseUrl);         

  const screen = routes[parseUrl] ? routes[parseUrl]: Error404Screen;
  rootEle.innerHTML = await screen.render();
  if (screen.after_render) {
    screen.after_render();
  }
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);



