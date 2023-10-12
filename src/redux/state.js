const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, post: "Первый пост", likesCount: 10 },
        { id: 2, post: "Вторый пост", likesCount: 15 },
        { id: 3, post: "Третий пост", likesCount: 17 },
        { id: 4, post: "Четвертый пост", likesCount: 19 },
      ],
      newPostText: "некий текстww",
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
    },
  },
  _callSubscriber() {
    console.log("state");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let id = this._state.profilePage.postsData.length + 1;

      let newPost = {
        id: id,
        post: this._state.profilePage.newPostText,
        likesCount: 14,
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });


export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text, });

export default store;
window.store = store;
