import React from "react";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  // #408FDC
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const updateMessageText = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            dialogsPage={state}
            newMessageText={state.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
