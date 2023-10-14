const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});

const dialogsReducer = (state, action) => {
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
