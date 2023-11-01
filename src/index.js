import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
// import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  // console.log(state)
  // console.log(store)
  // debugger;
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)} /> */}
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
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

