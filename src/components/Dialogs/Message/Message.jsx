import cl from "./Message.module.scss";

const Message = (props) => {
  return (
    <div className={cl.message}>
      <span>{props.id}. </span>
      <span>{props.message}</span>
    </div>
  )
}

export default Message;