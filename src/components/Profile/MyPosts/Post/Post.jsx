import React from "react";
import cl from "./Post.module.scss";

const Post = (props) => {
  return (
    <article className={cl.post}>
      {props.message} {props.likesCount} лайков
    </article>
  )
};

export default Post;
