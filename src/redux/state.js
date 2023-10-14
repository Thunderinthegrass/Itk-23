const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
      newMessageText: 'Сообщение',
    },
    navBar: [
      {id: 1, name: 'Profile', path: '/profile'},
      {id: 1, name: 'Messages', path: '/Dialogs'},
      {id: 1, name: 'News', path: '/News'},
      {id: 1, name: 'Music', path: '/Music'},
      {id: 1, name: 'Settings', path: '/Settings'},
      {id: 1, name: 'Friends', path: '/Friends'}
    ]
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
    if (action.type === ADD_POST) {
      let id = this._state.profilePage.postsData.length + 1;

      let newPost = {
        id: id,
        post: this._state.profilePage.newPostText,
        likesCount: 14,
      };
      this._state.profilePage.newPostText = "";
      this._state.profilePage.postsData.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
        let id = this._state.dialogsPage.messages.length;
        let text = this._state.dialogsPage.newMessageText;

        let newMessage = {
          id: id,
          message: text,
        }
    
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
        this._state.dialogsPage.newMessageText = '';
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        this._state.dialogsPage.newMessageText = action.text;
        this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text, });

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text});

export default store;
window.store = store;
