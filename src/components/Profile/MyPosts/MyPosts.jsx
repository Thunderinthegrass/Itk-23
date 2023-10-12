import React from 'react';
import cl from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  console.log(props)

  let post = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost()
    newPostElement.current.value = '';
    props.dispatch(addPostActionCreator());
  };

  let updateText = () => {
    let text = newPostElement.current.value;
    // props.updatePostText(text);
    props.dispatch(updatePostTextActionCreator(text));
  }

  return (
    <div>
      <div className={cl.myPosts}>
        <h3>Мои посты</h3>
        <div className={cl.addPost}>
          <textarea ref={newPostElement} onChange={ updateText } value={props.newPostText} />
          <div className={cl.buttons}>
            <button onClick={addPost} >Добавить пост</button>
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