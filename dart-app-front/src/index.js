import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import App from "./App";
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import store from "./store/rootStore";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//registerServiceWorker();
//rahul.mehta.newmediaguru@gmail.com/1234567
