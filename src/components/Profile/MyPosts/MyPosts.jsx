import React from 'react';
import cl from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

  let post = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    newPostElement.current.value = '';
    props.addPost();
  };

  let onUpdateText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={cl.myPosts}>
        <h3>Мои посты</h3>
        <div className={cl.addPost}>
          <textarea ref={newPostElement} onChange={ onUpdateText } value={props.newPostText} />
          <div className={cl.buttons}>
            <button onClick={ onAddPost } >Добавить пост</button>
            <button>Удалить пост</button>
          </div>
        </div>
      </div>
      <div className="posts">
        {post}
      </div>
    </div>
  )
}

export default MyPosts;