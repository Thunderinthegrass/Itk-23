import React from 'react';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  const updateMessageText = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  }
  // #408FDC
  return (
    <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogsPage={state} newMessageText={state.newMessageText} />
  )
}

export default DialogsContainer;