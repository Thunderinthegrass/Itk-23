import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cl from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messageElements = props.dialogs.messages.map(message => <Message message={message.message} id={message.id} />);

  let newMessageElement = React.createRef();

  let newMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }
  // #408FDC
  return (
    <div className={cl.dialogs__wrapper}>
      <div className={cl.dialogs}>
        {dialogsElements}
      </div>
      <div className={cl.messages}>
        {messageElements}
        <textarea name="" id="" cols="30" rows="10" ref={newMessageElement}>

        </textarea>
        <button onClick={newMessage} >Отправить сообщение</button>
      </div>
    </div>
  )
}

export default Dialogs;