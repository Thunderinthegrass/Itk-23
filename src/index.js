import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";
// import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={state} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
reportWebVitals();

