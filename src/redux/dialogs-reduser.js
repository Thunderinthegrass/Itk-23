const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let id = state.messages.length;
      let text = state.newMessageText;

      let newMessage = {
        id: id,
        message: text,
      };

      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
