import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cl from './Dialogs.module.scss';
import Message from './Message/Message';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messageElements = props.dialogs.messages.map(message => <Message message={message.message} id={message.id} />);

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
    newMessageElement.current.value = '';
  }

  const updateMessageText = (e) => {
    let text = e.target.value;
    props.dispatch(updateMessageTextActionCreator(text));
  }
  // #408FDC
  return (
    <div className={cl.dialogs__wrapper}>
      <div className={cl.dialogs}>
        {dialogsElements}
      </div>
      <div className={cl.messages}>
        <div className={cl.messagesWrapper}>
          {messageElements}
        </div>
        <textarea plaseholder='Введите сообщение' value={props.newMessageText} className={cl.textarea} onChange={updateMessageText} ref={newMessageElement}>

        </textarea>
        <button onClick={sendMessage} >Отправить сообщение</button>
      </div>
    </div>
  )
}

export default Dialogs;