import cl from './Dialogs.module.scss';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/*" + props.id;

  return (
    <div className={cl.dialog + ' ' + cl.active}>
      <NavLink to={path} className={navData => navData.isActive ? cl.activeLink : cl.a}>{props.name}</NavLink>
    </div>
  )
}

let dialogs = [
  {id: 1, name: 'Владимир'},
  {id: 2, name: 'Фёдор'},
  {id: 3, name: 'Селиван'},
  {id: 4, name: 'Дед Вовка'},
]

let messages = [
  {id: 1, message: 'Первое сообщение'},
  {id: 2, message: 'Второе сообщение'},
  {id: 3, message: 'Третье сообщение'},
  {id: 4, message: 'Четвертое сообщение'},
]

const Message = (props) => {
  return (
    <div className={cl.message}>
      <span>{props.id}</span>
      <p>{props.message}</p>
    </div>
  )
}

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

let messageElements = messages.map(m => <Message message={m.message} id={m.id} />);

const Dialogs = (props) => {
  return (
    <div className={cl.dialogs__wrapper}>
      <div className={cl.dialogs}>
        {dialogsElements}
      </div>
      <div className={cl.messages}>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs;