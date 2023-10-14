import dialogsReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: "Первый пост", likesCount: 10 },
        { id: 2, post: "Вторый пост", likesCount: 15 },
        { id: 3, post: "Третий пост", likesCount: 17 },
        { id: 4, post: "Четвертый пост", likesCount: 19 },
      ],
      newPostText: "некий текст",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Владимир" },
        { id: 2, name: "Фёдор" },
        { id: 3, name: "Селиван" },
        { id: 4, name: "Дед Вовка" },
      ],
      messages: [
        { id: 1, message: "Первое сообщение" },
        { id: 2, message: "Второе сообщение" },
        { id: 3, message: "Третье сообщение" },
        { id: 4, message: "Четвертое сообщение" },
      ],
      newMessageText: "Сообщение",
    },
    navBar: [
      { id: 1, name: "Profile", path: "/profile" },
      { id: 1, name: "Messages", path: "/Dialogs" },
      { id: 1, name: "News", path: "/News" },
      { id: 1, name: "Music", path: "/Music" },
      { id: 1, name: "Settings", path: "/Settings" },
      { id: 1, name: "Friends", path: "/Friends" },
    ],
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navBar = navbarReducer(this._state.navBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
