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
  // addPost() {
  //   let id = this._state.profilePage.postsData.length + 1;

  //   let newPost = {
  //     id: id,
  //     post: this._state.profilePage.newPostText,
  //     likesCount: 14,
  //   };

  //   this._state.profilePage.postsData.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updatePostText(text) {
  //   this._state.profilePage.newPostText = text;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let id = this._state.profilePage.postsData.length + 1;

      let newPost = {
        id: id,
        post: this._state.profilePage.newPostText,
        likesCount: 14,
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST-TEXT") {
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;

// let callSubscriber = () => {
//   console.log("state");
// };

// let state = {
//   profilePage: {
//     postsData: [
//       { id: 1, post: "Первый пост", likesCount: 10 },
//       { id: 2, post: "Вторый пост", likesCount: 15 },
//       { id: 3, post: "Третый пост", likesCount: 17 },
//       { id: 4, post: "Четвертый пост", likesCount: 19 },
//     ],
//     newPostText: "некий текст",
//   },
//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: "Владимир" },
//       { id: 2, name: "Фёдор" },
//       { id: 3, name: "Селиван" },
//       { id: 4, name: "Дед Вовкаd" },
//     ],
//     messages: [
//       { id: 1, message: "Первое сообщение" },
//       { id: 2, message: "Второе сообщение" },
//       { id: 3, message: "Третье сообщение" },
//       { id: 4, message: "Четвертое сообщение" },
//     ],
//   },
// };

// window.state = state;

// export let addPost = () => {
//   let id = state.profilePage.postsData.length + 1;

//   let newPost = {
//     id: id,
//     post: state.profilePage.newPostText,
//     likesCount: 14,
//   };

//   state.profilePage.postsData.push(newPost);
//   state.profilePage.newPostText = "";
//   callSubscriber(state);
// };

// export let updatePostText = (text) => {
//   state.profilePage.newPostText = text;
//   callSubscriber(state);
// };

// export const subscribe = (observer) => {
//   callSubscriber = observer;
// };

// export default state;
// // export default store;
