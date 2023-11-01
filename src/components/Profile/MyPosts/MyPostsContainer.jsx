import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  // console.log(props)

  let state = props.store.getState();
  console.log(state)

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateText = (text) => {
    let action = updatePostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={updateText} addPost={addPost} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;