import "./index.css";
import reportWebVitals from "./reportWebVitals";


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();

// store.getState()

// let man =  {
//   name: 'Федор',
//   age: 30,
//   sayName() {
//     console.log(this.name)
//   }
// }
// man.sayName()

// let page = {
//   title: 'Заголовок',
//   content: '',
//   render() {
//     document.title = (this.content);
//   }
// }
// page.content = 'Контент';
// // page.render();

// let page2 = {
//   title: 'Заголовок',
//   _content: `j`,
//   setContent(value) {
//     this._content = value;
//   },
//   getContent() {
//     return this._content;
//   },
//   render() {
//     document.title = (this._content);
//   }
// }

// page2.setContent(`Реактор`);
// console.log(page2.getContent())
// page2.render()


// let store = {
//   _subscriber() {
//     console.log('Субскрайбер');
//   },
//   _state: {
//     firstName: 'Александр',
//     lastName: 'Петров'
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._subscriber = observer;
//   },
//   setFirstName(value) {
//     this._state.firstName = value;
//     this._subscriber();
//   }
// }

// store.subscribe( () => {
//   console.log(store.getState());
//   console.log('субскрайб сработал')
// })
// store.setFirstName('Федор')

