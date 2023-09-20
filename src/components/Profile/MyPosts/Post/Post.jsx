import cl from "./Post.module.scss";

const Post = (props) => {
  return (
    <article className={cl.post}>
      {props.massage} {props.likesCount} лайков
    </article>
  )
};

export default Post;
