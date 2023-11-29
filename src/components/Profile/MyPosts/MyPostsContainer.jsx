// import React from "react";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let updateText = (text) => {
//           let action = updatePostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={updateText}
//             addPost={addPost}
//             posts={state.profilePage.postsData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updatePostTextActionCreator(text))
    },
    addPost: () => {
      addPostActionCreator()
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
