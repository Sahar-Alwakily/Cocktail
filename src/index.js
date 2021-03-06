import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'alertifyjs/build/css/alertify.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./redux/reducers/configureStore";

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
